import path from 'path';

import chalk from 'chalk';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import * as jsYaml from 'js-yaml';
import ora from 'ora';

const { copySync, existsSync, readJsonSync, writeJsonSync } = fs;
import { ErrorCode, handleError, CliError } from '../utils/error-handler';
import { logger } from '../utils/logger';
import { checkDir, cwdPath, updateFiles } from '../utils/path';

// 添加类型定义
interface PackageJson {
  name: string;
  version?: string;
  description?: string;
  workspaces?: string[] | { packages: string[] };
  [key: string]: unknown;
}

interface TsConfig {
  references?: Array<{ path: string }>;
  [key: string]: unknown;
}

interface PromptAnswers {
  pkgName?: string;
  description: string;
  version: string;
  template?: string;
  dir?: string;
  customDir?: string;
}

interface PnpmWorkspaceConfig {
  packages: string[];
}

// 预设的包模板列表
const PACKAGE_TEMPLATES = [
  { name: '默认库模板', value: 'packages/template' },
  { name: 'React 组件库', value: 'packages/lib-template' },
  { name: 'Monorepo 子包', value: 'packages/lib-monorepo-template' }
];

/**
 * 获取包模板路径
 * @param template 模板名称或路径
 * @returns 模板路径
 */
function getPackageTemplatePath(template: string): string {
  // 如果是相对路径或绝对路径，直接返回
  if (template.match(/^((.{1,2})?\/|file:).*/)) {
    return cwdPath(template);
  }

  // 查找预设模板
  const presetTemplate = PACKAGE_TEMPLATES.find(
    (t) => t.value === template || t.name === template
  );
  if (presetTemplate) {
    return cwdPath(presetTemplate.value);
  }

  // 默认返回基础模板
  return cwdPath('packages/template');
}

/**
 * 获取 monorepo 的工作区目录列表
 * @returns 工作区目录列表
 */
function getMonorepoWorkspaces(): string[] {
  const rootPackageJsonPath = cwdPath('package.json');
  if (!existsSync(rootPackageJsonPath)) {
    logger.debug('根目录 package.json 不存在');
    return [];
  }

  try {
    const rootPackageJson = readJsonSync(rootPackageJsonPath) as PackageJson;
    const workspaces: string[] = [];

    logger.debug(`根目录 package.json: ${JSON.stringify(rootPackageJson)}`);

    // 处理 workspaces 数组格式
    if (Array.isArray(rootPackageJson.workspaces)) {
      logger.debug(
        `workspaces 是数组格式: ${JSON.stringify(rootPackageJson.workspaces)}`
      );
      workspaces.push(...rootPackageJson.workspaces);
    }
    // 处理 workspaces 对象格式
    else if (
      rootPackageJson.workspaces &&
      typeof rootPackageJson.workspaces === 'object' &&
      'packages' in rootPackageJson.workspaces
    ) {
      const workspacesObj = rootPackageJson.workspaces as {
        packages: string[];
      };
      logger.debug(`workspaces 是对象格式: ${JSON.stringify(workspacesObj)}`);
      workspaces.push(...workspacesObj.packages);
    } else {
      logger.debug('没有找到 workspaces 配置');
    }

    // 如果没有找到工作区配置，添加默认的 packages 目录
    if (workspaces.length === 0) {
      logger.debug('没有找到工作区配置，添加默认的 packages/*');
      workspaces.push('packages/*');
    }

    logger.debug(`最终的工作区配置: ${JSON.stringify(workspaces)}`);
    return workspaces;
  } catch (error) {
    logger.warn('读取 workspaces 配置失败');
    logger.debug(
      `错误: ${error instanceof Error ? error.message : String(error)}`
    );
    return ['packages/*'];
  }
}

/**
 * 检查目录是否在工作区中
 * @param dirPath 目录路径
 * @returns 是否在工作区中
 */
function isInWorkspace(dirPath: string): boolean {
  const workspaces = getMonorepoWorkspaces();
  const relativePath = path.relative(cwdPath(), dirPath).replace(/\\/g, '/');

  // 检查是否在 package.json 的 workspaces 中
  if (
    workspaces.some((workspace) => {
      const pattern = workspace.replace(/\*/g, '.*');
      const regex = new RegExp(`^${pattern}$`);
      return (
        regex.test(relativePath) ||
        relativePath.startsWith(workspace.replace('/*', ''))
      );
    })
  ) {
    return true;
  }

  // 检查是否在 pnpm-workspace.yaml 中
  const pnpmWorkspacePath = cwdPath('pnpm-workspace.yaml');
  if (existsSync(pnpmWorkspacePath)) {
    try {
      const content = fs.readFileSync(pnpmWorkspacePath, 'utf8');
      const config = parseYamlConfig(content);

      if (
        config.packages.some((workspace) => {
          const pattern = workspace.replace(/\*/g, '.*');
          const regex = new RegExp(`^${pattern}$`);
          return (
            regex.test(relativePath) ||
            relativePath.startsWith(workspace.replace('/*', ''))
          );
        })
      ) {
        return true;
      }
    } catch (error) {
      logger.warn('读取 pnpm-workspace.yaml 失败');
    }
  }

  // 检查是否在 rush.json 中
  const rushJsonPath = cwdPath('rush.json');
  if (existsSync(rushJsonPath)) {
    try {
      const rushConfig = readJsonSync(rushJsonPath) as {
        projects?: Array<{ projectFolder: string }>;
      };

      if (
        rushConfig.projects?.some((p) => {
          const projectPath = path.relative(cwdPath(), dirPath);
          return p.projectFolder === projectPath;
        })
      ) {
        return true;
      }
    } catch (error) {
      logger.warn('读取 rush.json 失败');
    }
  }

  return false;
}

/**
 * 获取可用的工作区目录列表
 * @returns 可用的工作区目录列表
 */
function getAvailableWorkspaceDirs(): { name: string; value: string }[] {
  const workspaces = getMonorepoWorkspaces();
  const dirs: { name: string; value: string }[] = [];

  logger.debug(`获取到的工作区配置: ${JSON.stringify(workspaces)}`);

  // 将 glob 模式转换为实际目录
  workspaces.forEach((workspace) => {
    const baseDir = workspace.replace('/*', '');
    logger.debug(`处理工作区目录: ${baseDir}`);

    if (existsSync(cwdPath(baseDir))) {
      dirs.push({ name: baseDir, value: baseDir });
      logger.debug(`添加工作区目录: ${baseDir}`);
    } else {
      logger.debug(`工作区目录不存在: ${baseDir}`);
    }
  });

  // 如果没有找到工作区目录，添加默认的 packages 目录
  if (dirs.length === 0) {
    logger.debug('没有找到工作区目录，添加默认的 packages 目录');
    dirs.push({ name: 'packages', value: 'packages' });
  }

  // 添加自定义选项
  dirs.push({ name: '自定义路径...', value: 'custom' });

  logger.debug(`最终的目录列表: ${JSON.stringify(dirs)}`);
  return dirs;
}

function parseYamlConfig(content: string): PnpmWorkspaceConfig {
  const result = jsYaml.load(content);
  if (!result || typeof result !== 'object') {
    throw new Error('Invalid YAML config');
  }

  return {
    packages: Array.isArray((result as { packages?: string[] }).packages)
      ? (result as { packages: string[] }).packages
      : []
  };
}

function dumpYamlConfig(config: PnpmWorkspaceConfig): string {
  return jsYaml.dump(config, { quotingType: '"' });
}

/**
 * 更新工作区配置文件
 * @param packagePath 包路径
 */
async function updateWorkspaceConfig(packagePath: string): Promise<void> {
  const relativePath = path
    .relative(cwdPath(), packagePath)
    .replace(/\\/g, '/');
  const workspacePattern = `${relativePath}/*`;
  let updated = false;

  // 更新 package.json 中的 workspaces
  const rootPackageJsonPath = cwdPath('package.json');
  if (existsSync(rootPackageJsonPath)) {
    try {
      const rootPackageJson = readJsonSync(rootPackageJsonPath) as PackageJson;

      // 处理 workspaces 数组格式
      if (Array.isArray(rootPackageJson.workspaces)) {
        if (!rootPackageJson.workspaces.includes(workspacePattern)) {
          rootPackageJson.workspaces.push(workspacePattern);
          updated = true;
        }
      }
      // 处理 workspaces 对象格式
      else if (
        rootPackageJson.workspaces &&
        typeof rootPackageJson.workspaces === 'object' &&
        'packages' in rootPackageJson.workspaces
      ) {
        const workspacesObj = rootPackageJson.workspaces as {
          packages: string[];
        };
        if (!workspacesObj.packages.includes(workspacePattern)) {
          workspacesObj.packages.push(workspacePattern);
          updated = true;
        }
      }
      // 如果没有 workspaces 配置，创建一个
      else if (!rootPackageJson.workspaces) {
        rootPackageJson.workspaces = [workspacePattern];
        updated = true;
      }

      if (updated) {
        await Promise.resolve(
          writeJsonSync(rootPackageJsonPath, rootPackageJson, { spaces: 2 })
        );
        logger.success('已更新 package.json 的 workspaces 配置');
      }
    } catch (error) {
      logger.warn('更新 package.json 的 workspaces 配置失败');
    }
  }

  // 更新 pnpm-workspace.yaml
  const pnpmWorkspacePath = cwdPath('pnpm-workspace.yaml');
  if (existsSync(pnpmWorkspacePath)) {
    try {
      const content = fs.readFileSync(pnpmWorkspacePath, 'utf8');
      const config = parseYamlConfig(content);

      if (!config.packages.includes(workspacePattern)) {
        config.packages.push(workspacePattern);
        const yamlContent = dumpYamlConfig(config);
        fs.writeFileSync(pnpmWorkspacePath, yamlContent, 'utf8');
        logger.success('已更新 pnpm-workspace.yaml');
      }
    } catch (error) {
      logger.warn('更新 pnpm-workspace.yaml 失败');
    }
  }

  // 更新 rush.json
  const rushJsonPath = cwdPath('rush.json');
  if (existsSync(rushJsonPath)) {
    try {
      const rushConfig = readJsonSync(rushJsonPath) as {
        projects?: Array<{ packageName: string; projectFolder: string }>;
      };

      if (!rushConfig.projects) {
        rushConfig.projects = [];
      }

      const projectPath = path.relative(cwdPath(), packagePath);
      const exists = rushConfig.projects.some(
        (p) => p.projectFolder === projectPath
      );

      if (!exists) {
        rushConfig.projects.push({
          packageName: path.basename(packagePath),
          projectFolder: projectPath
        });
        writeJsonSync(rushJsonPath, rushConfig, { spaces: 2 });
        logger.success('已更新 rush.json');
      }
    } catch (error) {
      logger.warn('更新 rush.json 失败');
    }
  }
}

/**
 * 创建基本的 README.md 文件
 * @param targetDir 目标目录
 * @param pkgName 包名
 * @param description 包描述
 */
function createReadme(
  targetDir: string,
  pkgName: string,
  description: string
): void {
  const readmePath = path.join(targetDir, 'README.md');
  if (!existsSync(readmePath)) {
    const content = `# ${pkgName}\n\n${
      description || '一个新的包'
    }\n\n## 安装\n\n\`\`\`bash\nnpm install ${pkgName}\n\`\`\`\n\n## 使用\n\n\`\`\`js\nimport { example } from '${pkgName}';\n\n// 使用示例\n\`\`\`\n`;
    fs.writeFileSync(readmePath, content);
  }
}

/**
 * Handle package command
 * @param pkgName Package name
 * @param options Command options
 */
export default async function packageCommand(
  pkgName: string,
  options: {
    force: boolean;
    dir: string;
    template: string;
    scope?: string;
    version?: string;
    description?: string;
  }
): Promise<void> {
  try {
    const {
      force,
      scope,
      version: cmdVersion,
      description: cmdDescription
    } = options;

    // 获取可用的工作区目录
    const availableWorkspaceDirs = getAvailableWorkspaceDirs();

    // 确定默认目录 - 始终使用工作区的第一个目录作为默认值，忽略命令行参数中的 dir
    const defaultDir =
      availableWorkspaceDirs.length > 0 &&
      availableWorkspaceDirs[0].value !== 'custom'
        ? availableWorkspaceDirs[0].value
        : 'packages';

    // 交互式配置
    const answers = await inquirer.prompt<PromptAnswers>([
      {
        type: 'input',
        name: 'pkgName',
        message: '包名:',
        default: pkgName,
        when: !pkgName
      },
      {
        type: 'input',
        name: 'description',
        message: '包描述:',
        default:
          cmdDescription || `A package named ${pkgName || '{{pkgName}}'}`,
        when: !cmdDescription
      },
      {
        type: 'input',
        name: 'version',
        message: '初始版本:',
        default: cmdVersion || '0.1.0',
        when: !cmdVersion
      },
      {
        type: 'list',
        name: 'template',
        message: '选择包模板:',
        choices: PACKAGE_TEMPLATES,
        default: 'packages/template',
        when: !options.template
      },
      {
        type: 'list',
        name: 'dir',
        message: '选择包目录:',
        choices: availableWorkspaceDirs,
        default: defaultDir
      },
      {
        type: 'input',
        name: 'customDir',
        message: '请输入自定义目录路径:',
        when: (answers: { dir?: string }) => answers.dir === 'custom'
      }
    ]);

    // 合并配置
    const finalPkgName = pkgName || answers.pkgName || '';
    const finalTemplate =
      options.template || answers.template || 'packages/template';
    const description = cmdDescription || answers.description;
    const version = cmdVersion || answers.version;

    // 处理目录选择结果
    let finalDir: string;
    if (answers.dir === 'custom' && answers.customDir) {
      finalDir = answers.customDir;
      logger.info(`使用自定义目录: ${chalk.cyan(finalDir)}`);
    } else if (answers.dir) {
      finalDir = answers.dir;
      logger.info(`使用选择的目录: ${chalk.cyan(finalDir)}`);
    } else {
      finalDir = defaultDir;
      logger.info(`使用默认目录: ${chalk.cyan(finalDir)}`);
    }

    if (!finalPkgName) {
      throw new CliError('包名不能为空', 1);
    }

    // 确保目录存在
    if (!existsSync(cwdPath(finalDir))) {
      logger.info(`目录 ${chalk.cyan(finalDir)} 不存在，将自动创建`);
      await fs.ensureDir(cwdPath(finalDir));
    }

    // 检查目录是否在工作区中
    const dirPath = path.join(cwdPath(), finalDir);
    const inWorkspace = isInWorkspace(dirPath);

    if (!inWorkspace) {
      logger.warn(`目录 ${chalk.yellow(finalDir)} 不在当前 monorepo 工作区中`);
      const { addToWorkspace } = await inquirer.prompt<{
        addToWorkspace: boolean;
      }>([
        {
          type: 'confirm',
          name: 'addToWorkspace',
          message: '是否将该目录添加到工作区配置中?',
          default: true
        }
      ]);

      if (addToWorkspace) {
        await updateWorkspaceConfig(dirPath);
      } else {
        logger.warn('未添加到工作区，可能会导致包无法被正确识别');
      }
    }

    // 检查目录并获取最终目标路径
    const finalTargetDir = await checkDir(
      path.join(cwdPath(), finalDir, finalPkgName),
      force
    );

    // 检查模板是否存在
    const templatePath = getPackageTemplatePath(finalTemplate);
    if (!existsSync(templatePath)) {
      throw new CliError(`模板目录不存在: ${templatePath}`, 1);
    }

    // 复制模板文件
    const spinner = ora(
      `创建包: ${finalPkgName} 到 ${chalk.cyan(finalDir)} 目录`
    ).start();
    copySync(templatePath, finalTargetDir);
    spinner.succeed(
      `包目录创建成功: ${path.relative(cwdPath(), finalTargetDir)}`
    );

    // 更新 package.json
    const packageJsonPath = path.join(finalTargetDir, 'package.json');
    if (existsSync(packageJsonPath)) {
      const packageJson = readJsonSync(packageJsonPath) as PackageJson;
      packageJson.name = scope ? `@${scope}/${finalPkgName}` : finalPkgName;

      // 更新版本和描述
      if (version) packageJson.version = version;
      if (description) packageJson.description = description;

      writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
      logger.success('已更新 package.json');
    }

    // 创建 README.md
    createReadme(finalTargetDir, finalPkgName, description);

    // 更新 tsconfig.json
    const rootTsConfigPath = path.join(cwdPath(), 'tsconfig.json');
    if (existsSync(rootTsConfigPath)) {
      const tsConfig = readJsonSync(rootTsConfigPath) as TsConfig;
      if (tsConfig.references) {
        // 使用相对于根目录的路径
        const packagePath = path
          .relative(cwdPath(), finalTargetDir)
          .replace(/\\/g, '/');
        const alreadyExists = tsConfig.references.some(
          (ref: { path: string }) => ref.path === `./${packagePath}`
        );

        if (!alreadyExists) {
          tsConfig.references.push({ path: `./${packagePath}` });
          writeJsonSync(rootTsConfigPath, tsConfig, { spaces: 2 });
          logger.success('已更新根目录 tsconfig.json');
        }
      }
    }

    // 替换模板中的占位符
    updateFiles(finalTargetDir, finalPkgName);

    logger.success(`包 ${chalk.green(finalPkgName)} 创建成功!`);
    logger.info(
      `可以通过以下命令安装依赖:\n  cd ${path.relative(
        cwdPath(),
        finalTargetDir
      )} && npm install`
    );
  } catch (error) {
    handleError(error, ErrorCode.UNKNOWN);
  }
}

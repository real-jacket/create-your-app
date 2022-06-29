const { execSync } = require('child_process');
const chalk = require('chalk');

/**
 * 支持的 cli 列表
 */
const cliList = [
  {
    name: 'vue',
    description: 'create your new vue app with vite',
    cliName: 'npm create vite@latest'
  },
  {
    name: 'react',
    description: 'create your new react app with create-react-app',
    cliName: 'npx create-react-app@latest'
  }
];

function cli(options) {
  try {
    const [name, ...args] = options;
    const cliName = cliList.find((item) => item.name === name).cliName;
    const shell = `${cliName} ${args.join(' ')}`;
    console.log(shell);
    execSync(shell, { stdio: 'inherit' });
  } catch (error) {
    console.log(`cya ${options.join(' ')} fail:`, chalk.red(error.message));
  }
}

module.exports = {
  cliList,
  cli
};

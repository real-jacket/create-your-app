FROM node:18-alpine AS base

# 安装pnpm
RUN npm install -g pnpm@8

# 设置工作目录
WORKDIR /app

# 安装依赖阶段
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/*/package.json ./packages/
RUN pnpm install --frozen-lockfile

# 构建阶段
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build:all

# 生产阶段
FROM base AS runner
ENV NODE_ENV production

# 复制构建产物
COPY --from=builder /app/packages/create-your-app/lib ./packages/create-your-app/lib
COPY --from=builder /app/packages/create-your-app/package.json ./packages/create-your-app/

# 设置全局命令
RUN cd packages/create-your-app && npm link

# 设置入口点
ENTRYPOINT ["create-your-app"] 
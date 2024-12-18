# 使用 Node.js 18
FROM node:18-alpine

# 创建工作目录
WORKDIR /app

# 首先只复制 package 文件
COPY package*.json ./

# 安装依赖（添加 --legacy-peer-deps 标志）
RUN npm install --legacy-peer-deps

# 然后复制其他所有文件
COPY . .

# 构建应用
RUN npm run build

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]

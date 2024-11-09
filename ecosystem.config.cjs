module.exports = {
    apps: [
      {
        name: 'official_website',  // 进程名称，可随意修改，但执行pm2命令也要修改成对应进程名称
        port: '3000', // 端口冲突请修改这里的端口号
        exec_mode: 'fork',
        instances: '1',
        script: './.output/server/index.mjs'
      }
    ]
  }
**当前项目需要的node环境必须大于16.11.7**


0. **配置跳转url**
   ```bash
   url配置文件地址：components/config.js
   ```

1. **安装依赖**：
   在服务器上，进入到你的项目目录，然后安装所有依赖项。

   ```bash
   npm install
   ```

   如果没有pm2环境，请执行下列命令
   ```bash
   npm install -g pm2
   ```

2. **构建应用**：
   使用 `npm run build` 命令来构建你的应用。这将为 SSR 准备必要的文件。

   ```bash
   npm run build
   ```

3. **配置服务器**：
   根据你的服务器环境，配置你的 web 服务器（如 Nginx 或 Apache）作为反向代理，将请求转发到你的 Node.js 应用。

   例如，使用 Nginx 的配置可能如下：

   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000; # 你的 Nuxt 应用运行的端口
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   如端口号冲突，可在项目根目录找到下方文件，配置其他端口号
   ```bash
   端口配置文件地址：./ecosystem.config.cjs
   ```

4. **启动应用**：
   使用 `pm2 start ./ecosystem.config.cjs ` 命令来启动你的 Nuxt 应用。

   ```bash
   pm2 start ./ecosystem.config.cjs 
   ```

5. **重启应用**：
   修改项目内容后，使用 `pm2 restart official_website` 命令来重启项目。
   
   ```bash
   pm2 restart official_website
   ```

6. **删除应用**：
   如修改ecosystem.config.cjs文件下的端口号与进程后，需要删除应用并重新启动
   删除应用：`pm2 delete official_website`
      
   ```bash
   pm2 delete official_website
   ```

   重新启动应用：`pm2 start ./ecosystem.config.cjs`
   
   ```bash
   pm2 start ./ecosystem.config.cjs 
   ```
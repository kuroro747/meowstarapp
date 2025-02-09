import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/meowstarapp/', // 确保此字段正确配置为仓库名称
  build: {
    outDir: 'dist', // 确保输出目录为 dist
  },
    //server:{
    //port:3003,// 设置react项目2的访问端口
  //},
})

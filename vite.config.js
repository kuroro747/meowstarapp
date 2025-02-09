import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/meowstarapp/',
    //server:{
    //port:3003,// 设置react项目2的访问端口
    //},
});

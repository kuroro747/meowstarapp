import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./App.css"; // 修改为正确的文件名大小写

//获取根节点
const container = document.getElementById("root");
const root = createRoot(container!); // 使用 createRoot 创建根节点

root.render(
  <StrictMode>
    <BrowserRouter basename="/meowstarapp">
      <App />
    </BrowserRouter>
  </StrictMode>
);

//React 入口文件

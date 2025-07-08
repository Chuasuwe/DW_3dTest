# Three.js ES6 Demo (Vite)

## 项目简介

本项目为基于 Three.js 的现代化前端演示，采用 ES6 模块化开发，使用 Vite 作为开发与构建工具，支持 GitHub Pages 部署。所有资源与源码均职责分离，结构清晰，便于维护和扩展。

## 目录结构

```
simple_3js_es6_demo/
├── index.html              # 入口 HTML
├── package.json            # 项目依赖与脚本
├── package-lock.json       # 锁定依赖
├── src/                    # 所有源码与资源
│   ├── main.js             # 入口 JS
│   ├── skyEnvironment.js   # 天空模块
│   ├── modelLoader.js      # 模型加载
│   ├── cameraUtils.js      # 相机工具
│   ├── uiLayer.js          # UI 层
│   ├── hdriLoader.js       # HDRI 加载
│   └── assets/             # 资源文件夹
│       ├── Tower.glb
│       ├── camera_presets.json
│       ├── environment.exr
│       ├── Text01.png ~ Text05.png
│       └── Title.png
└── node_modules/           # 依赖目录
```

## 本地开发

1. 安装依赖（首次）
   ```sh
   npm install
   ```
2. 启动开发服务器
   ```sh
   npm run dev
   ```
3. 浏览器访问终端输出的本地地址（如 http://localhost:5173/）

## 构建与部署（GitHub Pages）

1. 构建静态文件
   ```sh
   npm run build
   ```
2. 将 dist 目录内容上传到 GitHub 仓库，配置 Pages 指向 dist/
3. 或用 gh-pages 插件自动部署

## 说明
- 项目无任何本地网络/服务器依赖，纯前端静态结构。
- 资源路径均为 `src/assets/`，便于统一管理。
- 推荐将 base 路径在 vite.config.js 中设置为仓库名，适配 GitHub Pages。 
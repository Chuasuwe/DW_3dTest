# Three.js ES6 Demo (Vite)

## Project Introduction

This project is a modern front-end demo based on Three.js, developed with ES6 modules and using Vite as the development and build tool. It supports deployment to GitHub Pages. All assets and source code are clearly separated and organized for easy maintenance and expansion.

## Directory Structure

```
simple_3js_es6_demo/
├── index.html              # Entry HTML
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── src/                    # All source code and assets
│   ├── main.js             # Entry JS
│   ├── skyEnvironment.js   # Sky module
│   ├── modelLoader.js      # Model loader
│   ├── cameraUtils.js      # Camera utilities
│   ├── uiLayer.js          # UI layer
│   ├── hdriLoader.js       # HDRI loader
│   └── assets/             # Asset folder
│       ├── Tower.glb
│       ├── camera_presets.json
│       ├── environment.exr
│       ├── Text01.png ~ Text05.png
│       └── Title.png
└── node_modules/           # Dependency folder
```

## Local Development

1. Install dependencies (first time)
   ```sh
   npm install
   ```
2. Start the development server
   ```sh
   npm run dev
   ```
3. Visit the local address output by the terminal in your browser (e.g., http://localhost:5173/)

## Build and Deploy (GitHub Pages)

1. Build static files
   ```sh
   npm run build
   ```
2. Upload the contents of the dist directory to the GitHub repository and configure Pages to point to dist/
3. Or use the gh-pages plugin for automatic deployment

## Notes
- The project has no local network/server dependencies, it is a pure front-end static structure.
- All asset paths are under `src/assets/` for unified management.
- It is recommended to set the base path in vite.config.js to the repository name to adapt to GitHub Pages. 
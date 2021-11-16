import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import { viteVConsole } from 'vite-plugin-vconsole';
export default ({ mode }) => defineConfig({
    plugins: [
        vue(),
        viteVConsole({
            entry: path.resolve('src/main.js'),
            localEnabled: false,
            enabled: false,
            // enabled: loadEnv(mode, process.cwd()).MODE !== 'prod',
            config: {
                maxLogNumber: 1000,
                theme: 'dark'
            }
        })
    ],
    base: "./",
    resolve: {
        alias: {
            // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@views": path.resolve(__dirname, "./src/views"),
            "@store": path.resolve(__dirname, "./src/store"),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve('src/assets/css/vantChange.less')}";`,
                },
                javascriptEnabled: true,
            }
        }
    },
    build: {
        outDir: "dist",
    },
    server: {
        https: false, // 是否开启 https
        open: false, // 是否自动在浏览器打开
        port: 8001, // 端口号
        host: "0.0.0.0",
        proxy: {
            "/api": {
                target: loadEnv(mode, process.cwd()).VITE_BASE_API, // 后台接口
                changeOrigin: true,
                secure: false, // 如果是https接口，需要配置这个参数
                // ws: true, //websocket支持
                // rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    // 引入第三方的配置
    optimizeDeps: {
        include: [],
    },
})
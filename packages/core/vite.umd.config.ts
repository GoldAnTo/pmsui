import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: "dist/umd",
        lib: {
            entry: resolve(__dirname, "./index.ts"),
            name: "pmsui",
            fileName: "index",
            formats: ["umd"]
        }
    },
    rollupOptions: {
        external: ["vue"],
        outPut:{
            exports:"named",
            globals:{
                vue: "Vue",
            },
            assetFileNames: (assetInfo :any) =>{
                if (assetInfo.name === 'style.css') {
                    return 'index.css'
                }
                return assetInfo.name as string
            }
        }
    }
})
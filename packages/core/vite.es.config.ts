import { defineConfig } from "vite";
import { readdirSync, readdir } from "fs";
import { defer, delay, filter, map, includes } from "lodash-es";
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

function getDirectoriesSync(basePath: string) {
    const entries = readdirSync(basePath, { withFileTypes: true });
    return map(
        filter(entries, (entry) => entry.isDirectory()),
        (entry) => entry.name
    );
}

const COMP_NAMES = [
    "Button"
] as const


export default defineConfig({
    plugins: [vue(), dts({
        tsconfigPath: '../../tsconfig.build.json',
        outDir: 'dist/types'
    })],
    build: {
        outDir: "dist/es",
        lib: {
            entry: resolve(__dirname, "./index.ts"),
            name: "pmsui",
            fileName: "index",
            formats: ["es"]
        }
    },
    rollupOptions: {
        external: [
            "vue",
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/vue-fontawesome",
            "@popperjs/core",
            "async-validator",
        ],
        outPut: {
            assetFileNames: (assetInfo: any) => {
                if (assetInfo.name === 'style.css') {
                    return 'index.css'
                }
                return assetInfo.name as string
            },
            manualChunks(id: any) {
                if (includes(id, "node_modules")) return "vendor";

                if (includes(id, "/packages/hooks")) return "hooks";

                if (
                    includes(id, "/packages/utils") ||
                    includes(id, "plugin-vue:export-helper")
                ) return "utils";

                // for (const item of getDirectoriesSync("../components")) {
                //     console.log(item,'item');
                //     if (includes(id, `/packages/components/${item}`)) return item;
                // }
                for ( const item  of COMP_NAMES) {
                    if (id.includes(`/packages/components/${item}`)) {
                        return item
                    }
                }
            }
        }
    }
})
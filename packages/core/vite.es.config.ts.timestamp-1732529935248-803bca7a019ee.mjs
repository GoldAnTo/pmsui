// vite.es.config.ts
import { defineConfig } from "file:///E:/gdui/pmsui/node_modules/.pnpm/vite@5.4.11_@types+node@20.17.6/node_modules/vite/dist/node/index.js";
import { readdirSync } from "fs";
import { filter, map, includes } from "file:///E:/gdui/pmsui/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import vue from "file:///E:/gdui/pmsui/node_modules/.pnpm/@vitejs+plugin-vue@5.2.0_vite@5.4.11_@types+node@20.17.6__vue@3.5.13_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///E:/gdui/pmsui/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.17.6_rollup@4.27.3_typescript@5.6.3_vite@5.4.11_@types+node@20.17.6_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\gdui\\pmsui\\packages\\core";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
var vite_es_config_default = defineConfig({
  plugins: [vue(), dts({
    tsconfigPath: "../../tsconfig.build.json",
    outDir: "dist/types"
  })],
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "pmsui",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "index.css";
          }
          return assetInfo.name;
        },
        manualChunks(id) {
          if (includes(id, "node_modules")) return "vendor";
          if (includes(id, "/packages/hooks")) return "hooks";
          if (includes(id, "/packages/utils") || includes(id, "plugin-vue:export-helper"))
            return "utils";
          for (const item of getDirectoriesSync("../components")) {
            if (includes(id, `/packages/components/${item}`)) return item;
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxnZHVpXFxcXHBtc3VpXFxcXHBhY2thZ2VzXFxcXGNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXGdkdWlcXFxccG1zdWlcXFxccGFja2FnZXNcXFxcY29yZVxcXFx2aXRlLmVzLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovZ2R1aS9wbXN1aS9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHJlYWRkaXIgfSBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHsgZGVmZXIsIGRlbGF5LCBmaWx0ZXIsIG1hcCwgaW5jbHVkZXMgfSBmcm9tIFwibG9kYXNoLWVzXCI7XHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcblxyXG5mdW5jdGlvbiBnZXREaXJlY3Rvcmllc1N5bmMoYmFzZVBhdGg6IHN0cmluZykge1xyXG4gICAgY29uc3QgZW50cmllcyA9IHJlYWRkaXJTeW5jKGJhc2VQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XHJcbiAgICByZXR1cm4gbWFwKFxyXG4gICAgICAgIGZpbHRlcihlbnRyaWVzLCAoZW50cnkpID0+IGVudHJ5LmlzRGlyZWN0b3J5KCkpLFxyXG4gICAgICAgIChlbnRyeSkgPT4gZW50cnkubmFtZVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFt2dWUoKSwgZHRzKHtcclxuICAgICAgICB0c2NvbmZpZ1BhdGg6ICcuLi8uLi90c2NvbmZpZy5idWlsZC5qc29uJyxcclxuICAgICAgICBvdXREaXI6ICdkaXN0L3R5cGVzJ1xyXG4gICAgfSldLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBvdXREaXI6IFwiZGlzdC9lc1wiLFxyXG4gICAgICAgIGxpYjoge1xyXG4gICAgICAgICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9pbmRleC50c1wiKSxcclxuICAgICAgICAgICAgbmFtZTogXCJwbXN1aVwiLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogXCJpbmRleFwiLFxyXG4gICAgICAgICAgICBmb3JtYXRzOiBbXCJlc1wiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgICAgICBleHRlcm5hbDogW1xyXG4gICAgICAgICAgICAgICAgXCJ2dWVcIixcclxuICAgICAgICAgICAgICAgIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiLFxyXG4gICAgICAgICAgICAgICAgXCJAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lXCIsXHJcbiAgICAgICAgICAgICAgICBcIkBwb3BwZXJqcy9jb3JlXCIsXHJcbiAgICAgICAgICAgICAgICBcImFzeW5jLXZhbGlkYXRvclwiLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09ICdzdHlsZS5jc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnaW5kZXguY3NzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUgYXMgc3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2h1bmtzKGlkOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZXMoaWQsIFwibm9kZV9tb2R1bGVzXCIpKSByZXR1cm4gXCJ2ZW5kb3JcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVzKGlkLCBcIi9wYWNrYWdlcy9ob29rc1wiKSkgcmV0dXJuIFwiaG9va3NcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmNsdWRlcyhpZCwgXCIvcGFja2FnZXMvdXRpbHNcIikgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZXMoaWQsIFwicGx1Z2luLXZ1ZTpleHBvcnQtaGVscGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ1dGlsc1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZ2V0RGlyZWN0b3JpZXNTeW5jKFwiLi4vY29tcG9uZW50c1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZXMoaWQsIGAvcGFja2FnZXMvY29tcG9uZW50cy8ke2l0ZW19YCkpIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQW1SLFNBQVMsb0JBQW9CO0FBQ2hULFNBQVMsbUJBQTRCO0FBQ3JDLFNBQXVCLFFBQVEsS0FBSyxnQkFBZ0I7QUFDcEQsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFMaEIsSUFBTSxtQ0FBbUM7QUFPekMsU0FBUyxtQkFBbUIsVUFBa0I7QUFDMUMsUUFBTSxVQUFVLFlBQVksVUFBVSxFQUFFLGVBQWUsS0FBSyxDQUFDO0FBQzdELFNBQU87QUFBQSxJQUNILE9BQU8sU0FBUyxDQUFDLFVBQVUsTUFBTSxZQUFZLENBQUM7QUFBQSxJQUM5QyxDQUFDLFVBQVUsTUFBTTtBQUFBLEVBQ3JCO0FBQ0o7QUFFQSxJQUFPLHlCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUk7QUFBQSxJQUNqQixjQUFjO0FBQUEsSUFDZCxRQUFRO0FBQUEsRUFDWixDQUFDLENBQUM7QUFBQSxFQUNGLE9BQU87QUFBQSxJQUNILFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNELE9BQU8sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDdEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNsQjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0o7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNKLGdCQUFnQixDQUFDLGNBQW1CO0FBQ2hDLGNBQUksVUFBVSxTQUFTLGFBQWE7QUFDaEMsbUJBQU87QUFBQSxVQUNYO0FBQ0EsaUJBQU8sVUFBVTtBQUFBLFFBQ3JCO0FBQUEsUUFDQSxhQUFhLElBQVM7QUFDbEIsY0FBSSxTQUFTLElBQUksY0FBYyxFQUFHLFFBQU87QUFFekMsY0FBSSxTQUFTLElBQUksaUJBQWlCLEVBQUcsUUFBTztBQUU1QyxjQUNJLFNBQVMsSUFBSSxpQkFBaUIsS0FDOUIsU0FBUyxJQUFJLDBCQUEwQjtBQUV2QyxtQkFBTztBQUVYLHFCQUFXLFFBQVEsbUJBQW1CLGVBQWUsR0FBRztBQUNwRCxnQkFBSSxTQUFTLElBQUksd0JBQXdCLElBQUksRUFBRSxFQUFHLFFBQU87QUFBQSxVQUM3RDtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFFSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

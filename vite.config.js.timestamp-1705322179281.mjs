// vite.config.js
import { defineConfig } from "file:///F:/Jina/Frontend/Go%20It%20%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F/GIT/goit-js-hw-10/node_modules/vite/dist/node/index.js";
import glob from "file:///F:/Jina/Frontend/Go%20It%20%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F/GIT/goit-js-hw-10/node_modules/glob/glob.js";
import injectHTML from "file:///F:/Jina/Frontend/Go%20It%20%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F/GIT/goit-js-hw-10/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///F:/Jina/Frontend/Go%20It%20%D0%BD%D0%B0%D0%B2%D1%87%D0%B0%D0%BD%D0%BD%D1%8F/GIT/goit-js-hw-10/node_modules/vite-plugin-full-reload/dist/index.js";
var vite_config_default = defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "commonHelpers.js"
        }
      },
      outDir: "../dist"
    },
    plugins: [injectHTML(), FullReload(["./src/**/**.html"])]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxKaW5hXFxcXEZyb250ZW5kXFxcXEdvIEl0IFx1MDQzRFx1MDQzMFx1MDQzMlx1MDQ0N1x1MDQzMFx1MDQzRFx1MDQzRFx1MDQ0RlxcXFxHSVRcXFxcZ29pdC1qcy1ody0xMFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcSmluYVxcXFxGcm9udGVuZFxcXFxHbyBJdCBcdTA0M0RcdTA0MzBcdTA0MzJcdTA0NDdcdTA0MzBcdTA0M0RcdTA0M0RcdTA0NEZcXFxcR0lUXFxcXGdvaXQtanMtaHctMTBcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0ppbmEvRnJvbnRlbmQvR28lMjBJdCUyMCVEMCVCRCVEMCVCMCVEMCVCMiVEMSU4NyVEMCVCMCVEMCVCRCVEMCVCRCVEMSU4Ri9HSVQvZ29pdC1qcy1ody0xMC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgZ2xvYiBmcm9tICdnbG9iJztcclxuaW1wb3J0IGluamVjdEhUTUwgZnJvbSAndml0ZS1wbHVnaW4taHRtbC1pbmplY3QnO1xyXG5pbXBvcnQgRnVsbFJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1mdWxsLXJlbG9hZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCB9KSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmluZToge1xyXG4gICAgICBbY29tbWFuZCA9PT0gJ3NlcnZlJyA/ICdnbG9iYWwnIDogJ19nbG9iYWwnXToge30sXHJcbiAgICB9LFxyXG4gICAgcm9vdDogJ3NyYycsXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBzb3VyY2VtYXA6IHRydWUsXHJcblxyXG4gICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgaW5wdXQ6IGdsb2Iuc3luYygnLi9zcmMvKi5odG1sJyksXHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcclxuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAndmVuZG9yJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnY29tbW9uSGVscGVycy5qcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgb3V0RGlyOiAnLi4vZGlzdCcsXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW2luamVjdEhUTUwoKSwgRnVsbFJlbG9hZChbJy4vc3JjLyoqLyoqLmh0bWwnXSldLFxyXG4gIH07XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZYLFNBQVMsb0JBQW9CO0FBQzFaLE9BQU8sVUFBVTtBQUNqQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUV2QixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFFBQVEsTUFBTTtBQUMzQyxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixDQUFDLFlBQVksVUFBVSxXQUFXLFlBQVksQ0FBQztBQUFBLElBQ2pEO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxXQUFXO0FBQUEsTUFFWCxlQUFlO0FBQUEsUUFDYixPQUFPLEtBQUssS0FBSyxjQUFjO0FBQUEsUUFDL0IsUUFBUTtBQUFBLFVBQ04sYUFBYSxJQUFJO0FBQ2YsZ0JBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixxQkFBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQUEsVUFDQSxnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQSxTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQUEsRUFDMUQ7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

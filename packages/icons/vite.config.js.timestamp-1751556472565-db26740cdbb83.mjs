// vite.config.js
import react from "file:///Users/ericmoerth/ws/michael/vitessce/node_modules/.pnpm/@vitejs+plugin-react@4.0.0_vite@4.3.9_@types+node@20.16.10_sass@1.55.0_terser@5.15.1_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///Users/ericmoerth/ws/michael/vitessce/node_modules/.pnpm/vite-plugin-svgr@2.2.2_@babel+core@7.22.0_rollup@3.23.0_vite@4.3.9_@types+node@20.16.10_sass@1.55.0_terser@5.15.1_/node_modules/vite-plugin-svgr/dist/index.mjs";
import { defineConfig } from "file:///Users/ericmoerth/ws/michael/vitessce/node_modules/.pnpm/vite@4.3.9_@types+node@20.16.10_sass@1.55.0_terser@5.15.1/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
var __vite_injected_original_dirname = "/Users/ericmoerth/ws/michael/vitessce/packages/icons";
var isProduction = process.env.APP_ENV === "production";
var vite_config_default = defineConfig({
  build: {
    sourcemap: true,
    emptyOutDir: false,
    minify: isProduction ? "esbuild" : false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.js"),
      // The file extension used by Vite depends on whether the package.json contains "type": "module".
      // Reference: https://github.com/vitejs/vite/blob/1ee0014caa7ecf91ac147dca3801820020a4b8a0/docs/guide/build.md?plain=1#L212
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  plugins: [
    react({
      jsxRuntime: "classic"
    }),
    svgr()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZXJpY21vZXJ0aC93cy9taWNoYWVsL3ZpdGVzc2NlL3BhY2thZ2VzL2ljb25zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZXJpY21vZXJ0aC93cy9taWNoYWVsL3ZpdGVzc2NlL3BhY2thZ2VzL2ljb25zL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9lcmljbW9lcnRoL3dzL21pY2hhZWwvdml0ZXNzY2UvcGFja2FnZXMvaWNvbnMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuY29uc3QgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuQVBQX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuXG4vLyBGb3IgdGVzdHMuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICBlbXB0eU91dERpcjogZmFsc2UsXG4gICAgbWluaWZ5OiBpc1Byb2R1Y3Rpb24gPyAnZXNidWlsZCcgOiBmYWxzZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC5qcycpLFxuICAgICAgLy8gVGhlIGZpbGUgZXh0ZW5zaW9uIHVzZWQgYnkgVml0ZSBkZXBlbmRzIG9uIHdoZXRoZXIgdGhlIHBhY2thZ2UuanNvbiBjb250YWlucyBcInR5cGVcIjogXCJtb2R1bGVcIi5cbiAgICAgIC8vIFJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVqcy92aXRlL2Jsb2IvMWVlMDAxNGNhYTdlY2Y5MWFjMTQ3ZGNhMzgwMTgyMDAyMGE0YjhhMC9kb2NzL2d1aWRlL2J1aWxkLm1kP3BsYWluPTEjTDIxMlxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXG4gICAgICBmb3JtYXRzOiBbJ2VzJ10sXG4gICAgfSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXG4gICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3Qoe1xuICAgICAganN4UnVudGltZTogJ2NsYXNzaWMnLFxuICAgIH0pLFxuICAgIHN2Z3IoKSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VSxPQUFPLFdBQVc7QUFDaFcsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTtBQUh4QixJQUFNLG1DQUFtQztBQUt6QyxJQUFNLGVBQWUsUUFBUSxJQUFJLFlBQVk7QUFHN0MsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLElBQ2IsUUFBUSxlQUFlLFlBQVk7QUFBQSxJQUNuQyxLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBO0FBQUE7QUFBQSxNQUd4QyxVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFlBQVk7QUFBQSxJQUNkLENBQUM7QUFBQSxJQUNELEtBQUs7QUFBQSxFQUNQO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

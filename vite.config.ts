import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: {
			"@src": path.resolve(__dirname, "./src"),
			"@Components": path.resolve(__dirname, "./src/Components"),
			"@assets": path.resolve(__dirname, "./src/assets"),
		},
	},
});

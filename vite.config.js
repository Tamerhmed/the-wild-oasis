
import react from '@vitejs/plugin-react';
import eslint from "vite-plugin-eslint";
import { defineConfig } from 'vite';
// import { defineConfig, loadEnv } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslint()],
	// server: {
	// 	hmr: {
	// 		overlay: false,
	// 	},
	// },
});



// https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
// 	const env = loadEnv(mode, process.cwd(), '');
// 	return {
// 		define: {
// 			'process.env': env,
// 		},
// 		plugins: [react(), eslint()],
// 	};
// });
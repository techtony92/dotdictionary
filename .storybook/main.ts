import type { StorybookViteConfig } from "@storybook/builder-vite";
import { mergeConfig, loadConfigFromFile } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
const config: StorybookViteConfig = {
	stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],

	core: {
		builder: "@storybook/builder-vite",
	},

	async viteFinal(config) {
		config.plugins!.push(
			tsconfigPaths({
				projects: ["tsconfig.json"],
			})
		);
		return config;
	},
};

export default config;

import type { JestConfigWithTsJest } from "ts-jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { defaults } from "jest-config";
import { compilerOptions } from "./tsconfig.json";
const config: JestConfigWithTsJest = {
	moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
	rootDir: "./",
	verbose: true,
	roots: ["<rootDir>"],
	modulePaths: [compilerOptions.baseUrl],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: "<rootDir>",
	}),
	transform: {
		"^.+(m?[tj]sx?$)": [
			"ts-jest",
			{
				useESM: true,
			},
		],
	},
	collectCoverage: true,
	collectCoverageFrom: [
		"src/Components/**/*.{ts,tsx}",
		"!src/stories/**",
		"!**/node_modules/**",
		"!**/vendor/**",
		"!**/dist/**",
	],
	coverageDirectory: "<rootDir>dist/coverage",
	coveragePathIgnorePatterns: ["/node_modules", "./node", "/jest/"],
	coverageProvider: "v8",
	coverageThreshold: {
		global: {
			branches: 70,
			functions: 80,
			lines: 80,
			statements: -10,
		},
	},
	testMatch: ["**/*.test.tsx"],
	testEnvironment: "jsdom",
	testResultsProcessor: "jest-sonar-reporter",
};

export default config;

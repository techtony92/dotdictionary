import { addDecorator } from "@storybook/react";
import React from "react";
import { GlobalStyle } from "../src/Global/Styles";
import { ThemeProvider } from "styled-components";
import { ThemeStore } from "../src/Theme/Theme";
import { ThemeFactory } from "../src/Components/Theme/ThemeFactory";
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<React.Fragment>
			<GlobalStyle />
			<ThemeProvider theme={ThemeStore.light}>{Story()}</ThemeProvider>
		</React.Fragment>
	),
];

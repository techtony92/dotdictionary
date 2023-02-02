import React, { useState } from "react";
import { ThemeStore } from "@src/Theme/Theme";
import { ThemeProvider } from "styled-components";
type themeProps = {
	children: JSX.Element | Array<JSX.Element>;
};

export const ThemeFactory = ({ children }: themeProps) => {
	const [currentTheme, setCurrentTheme] = useState(ThemeStore.light);
	return (
		<>
			<ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
		</>
	);
};

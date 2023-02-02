export const ThemeStore = {
	name: {
		light: "light",
		dark: "dark",
		custom: "custom",
	},
	light: {
		name: "light",
		background: "#FFFFFF",
		inputBackground: "#F4F4F4",
		inputBorder__default: "none",
		inputOutline__warning: "1px solid #FF5252",
		inputOutline__focused: "1px solid #A445ED",
		inputWidth: "73.6rem",
		inputHeight: "6.4rem",
		inputTextColor: "#2D2D2D",
		inputFontSize: "2rem",

		toggleBackground__off: "#757575",
		toggleBackground__Hover: "#A445ED",
		toggleBackground__on: "#A445ED",
		divider: "#E9E9E9",
	},
	dark: {
		name: "dark",
		background: "#050505",
		inputBackground: "#1F1F1F",
		inputBorder: "transparent",
		inputBorder__Active: "#A445ED",
		inputBorder__Warning: "#FF5252",
		toggleBackground__off: "#757575",
		toggleBackground__on: "#A445ED",
		divider: "#E9E9E9",
	},
	custom: {
		name: "custom_1",
	},
};

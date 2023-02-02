import React from "react";
import { ThemeFactory } from "@Components/Theme/ThemeFactory";
import { TextInput } from "@Components/Primitives/Input/TextInput";
import { ToggleSwitch } from "@src/Components/Primitives/Switch";
export const App = () => {
	return (
		<>
			<ThemeFactory>
				<TextInput placeholder="Hi From Text Input" />
				<ToggleSwitch onToggle={(event) => console.log("Toggle Click")} />
			</ThemeFactory>
		</>
	);
};

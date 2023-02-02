import React, { useState, ChangeEvent } from "react";
import { Switch, Input, ComponentContainer } from "./Swtich.style";
import { ThemeFactory } from "@src/Components/Theme/ThemeFactory";
// import "./toggle.css";
type toggleProps = {
	onToggle?: (...args: any) => void;
	contextClass?: string;
};

export const ToggleSwitch = ({ onToggle, contextClass }: toggleProps) => {
	const [toggled, setToggled] = useState<boolean>(false);
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setToggled(event.target.checked);
		if (onToggle) onToggle();
	};
	return (
		<ThemeFactory>
			<ComponentContainer>
				<Input checked={toggled} type="checkbox" onChange={handleChange} />
				<Switch />
			</ComponentContainer>
		</ThemeFactory>
	);
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ToggleSwitch } from "@src/Components/Primitives/Switch";

export default {
	title: "Components/Primitives/Switch",
	component: ToggleSwitch,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: "fullscreen",
	},
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => (
	<ToggleSwitch {...args} />
);

export const Switch_ = Template.bind({});

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextInput } from "@src/Components/Primitives/Input";

export default {
	title: "Components/Primitives/TextInput",
	component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
	<TextInput {...args} />
);

export const TextInput_ = Template.bind({});
TextInput_.args = {
	placeholder: "Search for anything...",
};

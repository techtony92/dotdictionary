import styled, { css } from "styled-components";

export const SwitchCSS = ({ theme, ...rest }) => css`
	position: relative;
	width: 40px;
	height: 20px;
	background: ${theme.toggleBackground__off}; //#b3b3b3;
	border-radius: 32px;

	transition: 300ms all;

	&:before {
		transition: 300ms all;
		content: "";
		position: absolute;
		width: 14px;
		height: 14px;
		border-radius: 35px;
		top: 50%;
		left: 4px;
		background: white;
		transform: translate(0, -50%);
	}
`;
export const Switch = styled.div([SwitchCSS]);
const InputCSS = ({ theme, ...rest }) => css`
	opacity: 0;
	position: absolute;

	&:checked + ${Switch} {
		background: ${theme.toggleBackground__on};

		&:before {
			transform: translate(1.8rem, -50%);
		}
	}
`;
export const Input = styled.input([InputCSS]);
const ComponentContainerCSS = ({ theme, ...rest }) => css`
	display: flex;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	width: fit-content;
`;

export const ComponentContainer = styled.label([ComponentContainerCSS]);

import styled, { css } from "styled-components";

const TextInputCSS = ({ theme, ...rest }) => css`
	width: ${theme.inputWidth};
	height: ${theme.inputHeight};
	border: ${theme.inputBorder__default};
	border-radius: 1.6rem;
	padding: 2rem 0rem;
	padding-left: 2.4rem;
	background: ${theme.inputBackground};
	color: ${theme.inputTextColor};
	font-size: ${theme.inputFontSize};
	outline: ${theme.inputOutline__default};

	&.error {
		outline: ${theme.inputOutline__warning};
	}

	&::placeholder {
		font-size: 2rem;

		//color: #2d2d2d;
		opacity: 25%;
	}
	&:focus {
		outline: ${theme.inputOutline__focused};
	}
`;

const ComponentContainerCSS = ({ theme, ...rest }) => css`
	position: relative;
	width: 73.6rem;
	height: 6.4rem;
	border: none;
	border-radius: 1.6rem;
`;

export const ComponentContainer = styled.div([ComponentContainerCSS]);
export const TextInputCore = styled.input([TextInputCSS]);

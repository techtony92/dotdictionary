import styled, { css } from "styled-components";

const SearchCSS = ({ theme, ...rest }) => css`
	width: 2rem;
	height: 2rem;
	position: absolute;
	border-width: 1.5px;
	color: #a445ed;
	right: 2.4rem;
	top: 2.4rem;
`;

export const SearchSVGCSS = styled.svg([SearchCSS]);

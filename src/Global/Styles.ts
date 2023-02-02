
import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    padding:0;
    margin:0;
    box-sizing:inherit;
}
html{
    font-size:62.5%;
    box-sizing:border-box;
}
body{
    font-size:1.6rem;
}
`;

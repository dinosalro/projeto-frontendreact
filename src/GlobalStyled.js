import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    background-image: linear-gradient(to top left, #e0b8ff, #ca85ff)
}
`;

export default GlobalStyled;
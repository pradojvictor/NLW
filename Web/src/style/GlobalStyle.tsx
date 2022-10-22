import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #121214;
        background: url('/fundo.png') no-repeat center center fixed;
        background-size: cover;
    }
`;

export default GlobalStyle;
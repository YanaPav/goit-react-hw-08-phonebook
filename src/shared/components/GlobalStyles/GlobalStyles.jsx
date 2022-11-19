import { createGlobalStyle } from 'styled-components';
import bg_image from 'images/bg_image.jpg';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }


    body {
     background: url(${bg_image}) no-repeat center top fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
     background-size: cover;
     background-repeat: no-repeat;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    bo
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

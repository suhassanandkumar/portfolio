// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f8f8f8;
    color: #333;
    line-height: 1.5;
  }

  h1, h2, h3 {
    font-weight: 700;
    color: #2c3e50;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle;
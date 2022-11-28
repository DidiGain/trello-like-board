import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    width: 100vw;
    height: 100vh;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: rgb(177,203,255);
  }

  button,
  a {
    cursor: pointer;
    color: inherit;
  }
  `;

export default GlobalStyles;

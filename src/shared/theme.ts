import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    margin: 0;
  }

  body {
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button,
  a {
    cursor: pointer;
    color: inherit;
  }
  `;

export default GlobalStyles;

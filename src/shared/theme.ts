import { createGlobalStyle } from 'styled-components';

import Nerkone from '../fonts/NerkoneReg.woff2';
import RobotoReg from '../fonts/RobotoReg.woff2';
import RobotoBold from '../fonts/RobotoBold.woff2';

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

  @font-face {
    font-family: "Nerkone";
    src: local("Nerkone"), url(${Nerkone}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: "RobotoReg";
    src: local("RobotoReg"), url(${RobotoReg}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "RobotoBold";
    src: local("RobotoBold"), url(${RobotoBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  `;

export default GlobalStyles;

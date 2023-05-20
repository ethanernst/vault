import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  --white: #FCFCFA;
  --black: #040303;
  --gray: #838182;
  --transparent: #00000055;

  --projects: #816EED;
  --videos: #70BEAF;
  --renders: #FF5D7B;
  --about: #ED7A4F;

  --z-index-home-background: 0;
  --z-index-home-content: 50;
  --z-index-nav: 10;
  --z-index-nav-links: 15;
  --z-index-nav-button: 20;
  --z-index-content: 20;
  }
`;

export default GlobalStyle;

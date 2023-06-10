import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";
import "assets/css/fonts.css";

export const GlobalStyle = createGlobalStyle`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  body {
  
  }
`;

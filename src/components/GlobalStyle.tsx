import { createGlobalStyle } from "styled-components";
import "modern-normalize/modern-normalize.css";
import "assets/css/fonts.css";

interface IProps {
  isSecondaryBg: boolean;
}

export const GlobalStyle = createGlobalStyle<IProps>`
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
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: 500;
    font-size:  ${({ theme }) => theme.fontSizes.common.primary};
    color:  ${({ theme }) => theme.colors.primary};

    background-color:  ${({ theme, isSecondaryBg }) =>
      isSecondaryBg ? theme.colors.secondaryBg : theme.colors.primaryBg}
  }
`;

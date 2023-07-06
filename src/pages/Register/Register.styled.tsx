import styled from "styled-components";

export const Main = styled.main`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.dekstop};
  }
`;

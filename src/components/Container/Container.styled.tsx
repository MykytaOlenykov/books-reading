import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  min-width: 310px;
  max-width: ${({ theme }) => theme.breakpoints.dekstop};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    padding: 0 16px;
  }
`;

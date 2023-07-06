import styled from "styled-components";

export const Section = styled.section`
  padding: 32px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px 0 74px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    padding: 20px 0 0;
  }
`;

export const Container = styled.div`
  height: 290px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.25);

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 340px;
  }
`;

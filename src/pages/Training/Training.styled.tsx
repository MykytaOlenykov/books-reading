import styled from "styled-components";
import { PrimaryContainer } from "components/Common.styled";

export const Main = styled.main`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    padding-top: 40px;
    padding-bottom: 54px;
  }
`;

export const Container = styled(PrimaryContainer)`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    display: flex;
    gap: 32px;
  }
`;

export const Aside = styled.aside`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    flex-shrink: 0;
    width: 288px;
  }
`;

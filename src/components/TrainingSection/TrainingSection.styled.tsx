import styled from "styled-components";
import { PrimaryContainer } from "components/Common.styled";

export const Container = styled(PrimaryContainer)`
  padding-bottom: 128px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    display: flex;
    gap: 32px;
    padding-top: 40px;
    padding-bottom: 54px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 32px;
    padding-bottom: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    padding-top: 0;
    padding-bottom: 40px;
  }
`;

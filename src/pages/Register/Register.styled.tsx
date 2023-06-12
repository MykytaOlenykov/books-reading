import styled from "styled-components";
import { BgImgSection } from "components/Common.styled";

export const Main = styled.main`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoints.dekstop};
  }
`;

export const Section = styled(BgImgSection)`
  padding: 32px 0;
  margin-left: auto;
  margin-right: auto;
  min-width: 310px;
  max-width: ${({ theme }) => theme.breakpoints.tablet};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    flex-grow: 1;
    margin-left: 0;
    margin-right: 0;
    padding: 90px 0;
  }
`;

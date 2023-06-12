import styled from "styled-components";
import { PrimaryContainer } from "components/Common.styled";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;

  padding-top: 1px;
  min-width: 310px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow.header};

  transform: translateY(-1px);
`;

export const Container = styled(PrimaryContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
`;

export const Logo = styled.span`
  display: block;
  /* flex-grow: 1; */

  font-family: ${({ theme }) => theme.fontFamily.logo};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.header.logo};
  line-height: 1.35;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: start;
  }
`;

export const NavBox = styled.div`
  display: flex;
  gap: 22px;
`;

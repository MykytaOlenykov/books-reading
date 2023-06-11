import styled from "styled-components";
import { PrimaryContainer } from "components/Common.styled";

export const Header = styled.header`
  min-width: 310px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow.header};
`;

export const Container = styled(PrimaryContainer)`
  display: flex;
  align-items: center;
  min-height: 60px;
`;

export const Logo = styled.span`
  width: 100%;

  font-family: ${({ theme }) => theme.fontFamily.logo};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.header.logo};
  line-height: 1.35;
  text-align: center;
`;

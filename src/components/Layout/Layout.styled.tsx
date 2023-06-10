import styled from "styled-components";

export const Header = styled.header`
  box-shadow: ${({ theme }) => theme.boxShadow.header};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 60px;
`;

export const Logo = styled.span`
  width: 100%;

  font-family: ${({ theme }) => theme.fontFamily.logo};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.common.logo};
  line-height: 1.35;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

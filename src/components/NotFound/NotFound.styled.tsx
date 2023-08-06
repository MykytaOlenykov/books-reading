import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 48px 0;
`;

export const ErrorMessage = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ErrorCode = styled.p`
  font-size: 36px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary};
`;

export const HomePageLink = styled(Link)`
  display: inline-block;
  padding: 4px 8px;

  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryText};
  transition: color ${({ theme }) => theme.timingFunction.navLink} linear;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Back } from "assets/icons/back.svg";
import { PrimaryContainer } from "components/Common.styled";

export const Section = styled.section`
  padding: 68px 0 110px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 32px 0 20px;
  }
`;

export const Container = styled(PrimaryContainer)`
  position: relative;
`;

export const GoBackLink = styled(Link)`
  position: absolute;
  top: -44px;
  left: 20px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const GoBackIcon = styled(Back)`
  width: 24px;
  height: 12px;

  fill: ${({ theme }) => theme.colors.accent};
`;

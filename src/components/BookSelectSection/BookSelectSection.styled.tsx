import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Back } from "assets/icons/back.svg";
import { PrimaryContainer } from "components/Common.styled";

export const Section = styled.section`
  padding: 68px 0 200px;
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

export const Title = styled.h2`
  padding: 18px 0;
  margin-bottom: 20px;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.training.title};
  line-height: 1.2;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};

  background-color: ${({ theme }) => theme.colors.trainingBg};
  box-shadow: ${({ theme }) => theme.boxShadow.title};
`;

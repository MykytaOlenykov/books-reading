import { Link } from "react-router-dom";
import styled from "styled-components";
import { PrimaryContainer } from "components/Common.styled";
import { ReactComponent as InfoIcon } from "assets/icons/info-arrow.svg";

export const Section = styled.section`
  padding: 32px 0 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px 0 88px;
  }
`;

export const Container = styled(PrimaryContainer)`
  padding: 0 25px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 145px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    padding: 0 127px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 32px;

  font-family: ${({ theme }) => theme.fontFamily.logo};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.info.logo};
  line-height: 1.12;
  text-align: center;
`;

export const Title = styled.h3`
  margin-bottom: 14px;

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.info.title};
  line-height: 1.9;
`;

export const List = styled.ul`
  &.mb--s {
    margin-bottom: 24px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 32px;
    }
  }

  &.mb--b {
    margin-bottom: 60px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 0;
    }
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 12px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Icon = styled(InfoIcon)`
  flex-shrink: 0;

  fill: ${({ theme }) => theme.colors.accent};

  transform: translateY(4px);
`;

export const Text = styled.p`
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const BtnContainer = styled(PrimaryContainer)`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const PrimaryBtn = styled.a`
  display: inline-block;
  padding: 11px 0 12px;
  min-width: 130px;

  line-height: 1.21;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.lightText};

  background-color: ${({ theme }) => theme.colors.accent};

  transition: box-shadow ${({ theme }) => theme.timingFunction.btn} linear;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.btn};
  }
`;

export const SecondaryBtn = styled(Link)`
  display: inline-block;
  padding: 10px 0 11px;
  min-width: 130px;

  line-height: 1.21;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  transition: filter ${({ theme }) => theme.timingFunction.btn} linear;

  &:hover,
  &:focus {
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
  }
`;

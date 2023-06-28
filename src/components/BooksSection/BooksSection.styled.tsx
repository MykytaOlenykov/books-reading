import styled from "styled-components";

export const Section = styled.section`
  padding-top: 20px;

  &.goingToRead {
    padding-bottom: 128px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.booksSection.primary};
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`;

export const Header = styled.ul`
  display: none;
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const HeaderItem = styled.li`
  &:nth-child(1) {
    margin-right: 262px;
  }

  &:nth-child(2) {
    margin-right: 169px;
  }

  &:nth-child(3) {
    margin-right: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    &:nth-child(1) {
      margin-right: 548px;
    }

    &:nth-child(2) {
      margin-right: 344px;
    }

    &:nth-child(3) {
      margin-right: 80px;
    }
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

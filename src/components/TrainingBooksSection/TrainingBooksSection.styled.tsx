import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 0;
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    padding: 12px 0;

    border-top: 1px solid ${({ theme }) => theme.colors.line};
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }
`;

export const HeaderItem = styled.li`
  &:nth-child(1) {
    margin-right: 194px;
  }

  &:nth-child(2) {
    margin-right: 167px;
  }

  &:nth-child(3) {
    margin-right: 69px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    &:nth-child(1) {
      margin-right: 300px;
    }

    &:nth-child(2) {
      margin-right: 185px;
    }

    &:nth-child(3) {
      margin-right: 73px;
    }
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const List = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

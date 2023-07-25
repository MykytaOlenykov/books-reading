import styled from "styled-components";

export const Section = styled.section`
  padding-top: 20px;

  &.currentlyReading,
  &.finishedReading {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding-bottom: 20px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      padding-bottom: 12px;
    }
  }

  &.planning,
  &.training {
    padding-top: 0;
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

export const List = styled.ul`
  .planning &,
  .training & {
    border-top: 1px solid ${({ theme }) => theme.colors.line};
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-height: calc(54px * 4);
      border-top: none;

      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 5px;
        background-color: ${({ theme }) => theme.colors.scrollbar};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.scrollbarThumb};
        border-radius: 0;
      }
    }
  }
`;

export const Item = styled.li`
  .goingToRead &,
  .currentlyReading &,
  .finishedReading & {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  .planning &,
  .training & {
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    }
  }
`;

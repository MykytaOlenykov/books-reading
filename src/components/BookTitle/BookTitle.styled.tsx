import styled from "styled-components";

export const Title = styled.h3`
  margin-bottom: 12px;

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.booksSection.secondary};
  line-height: 1.25;
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
    margin-right: auto;
    max-width: 262px;
    width: 100%;

    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    line-height: 1.21;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    margin-right: auto;

    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    line-height: 1.21;
  }

  &.goingToRead,
  &.currentlyReading {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-width: 262px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      max-width: 500px;
    }
  }

  &.finishedReading {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-width: 135px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      max-width: 260px;
    }
  }

  &.planning,
  &.training {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: -webkit-box;
      max-width: 180px;

      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      max-width: 310px;
      -webkit-line-clamp: 1;
    }
  }
`;

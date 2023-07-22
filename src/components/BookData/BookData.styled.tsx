import styled from "styled-components";

export const List = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 40px;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:not(:last-child) {
      margin-bottom: 0;
    }

    &:nth-child(2) {
      width: 40px;

      text-align: end;
    }

    &:nth-child(3) {
      width: 40px;

      text-align: end;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    &:nth-child(2) {
      width: 48px;
    }

    &:nth-child(3) {
      width: 48px;
    }
  }

  .goingToRead &,
  .currentlyReading &,
  .finishedReading & {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      &:nth-child(1) {
        margin-right: 34px;
        width: 168px;
      }

      &:nth-child(2) {
        margin-right: 34px;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      &:nth-child(1) {
        margin-right: 68px;
        width: 300px;
      }

      &:nth-child(2) {
        margin-right: 64px;
      }
    }
  }

  .planning & {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      &:nth-child(1) {
        margin-right: 54px;
        width: 140px;
      }

      &:nth-child(2) {
        margin-right: 64px;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      &:nth-child(1) {
        margin-right: 72px;
      }

      &:nth-child(2) {
        margin-right: 60px;
      }
    }
  }

  .training & {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      &:nth-child(1) {
        margin-right: 54px;
        width: 120px;
      }

      &:nth-child(2) {
        margin-right: 58px;
      }

      &:nth-child(3) {
        margin-right: 62px;
      }

      &:nth-child(4) {
        width: 40px;

        text-align: end;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      &:nth-child(1) {
        margin-right: 64px;
        width: 140px;
      }

      &:nth-child(2) {
        margin-right: 62px;
      }

      &:nth-child(3) {
        margin-right: 64px;
      }

      &:nth-child(4) {
        width: 40px;

        text-align: end;
      }
    }
  }
`;

export const Title = styled.p`
  max-width: 43px;
  flex-grow: 1;

  font-size: ${({ theme }) => theme.fontSizes.booksSection.secondary};
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.primaryText};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const Descr = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.booksSection.secondary};
  line-height: 1.25;
  overflow-wrap: break-word;
  word-break: break-word;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;

    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    line-height: 1.21;
  }

  .planning &,
  .training & {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      -webkit-line-clamp: 1;
    }
  }
`;

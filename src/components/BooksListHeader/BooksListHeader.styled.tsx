import styled from "styled-components";

export const List = styled.ul`
  display: none;
  margin-bottom: 8px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }

  &.planning,
  &.training {
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 0;
      padding: 12px 0;

      border-top: 1px solid ${({ theme }) => theme.colors.line};
      border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    }
  }
`;

export const Item = styled.li`
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

  .currentlyReading & {
    &:nth-child(2) {
      margin-right: 100px;
    }

    &:nth-child(3) {
      margin-right: 36px;
    }

    &:nth-child(4) {
      margin-right: 32px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      &:nth-child(2) {
        margin-right: 224px;
      }

      &:nth-child(3) {
        margin-right: 80px;
      }

      &:nth-child(4) {
        margin-right: 80px;
      }
    }
  }

  .finishedReading & {
    &:nth-child(1) {
      margin-right: 124px;
    }

    &:nth-child(2) {
      margin-right: 84px;
    }

    &:nth-child(3) {
      margin-right: 36px;
    }

    &:nth-child(4) {
      margin-right: 32px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      &:nth-child(1) {
        margin-right: 269px;
      }

      &:nth-child(2) {
        margin-right: 226px;
      }

      &:nth-child(3) {
        margin-right: 73px;
      }

      &:nth-child(4) {
        margin-right: 110px;
      }
    }
  }

  .planning & {
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
  }

  .training & {
    &:nth-child(1) {
      margin-right: 164px;
    }

    &:nth-child(2) {
      margin-right: 144px;
    }

    &:nth-child(3) {
      margin-right: 66px;
    }

    &:nth-child(4) {
      margin-right: 64px;
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
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primaryText};
`;

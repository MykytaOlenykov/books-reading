import styled from "styled-components";
import { ReactComponent as LibraryIcon } from "assets/icons/library-icon.svg";
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";

export const Card = styled.div`
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
  }

  &.goingToRead,
  &.currentlyReading,
  &.finishedReading {
    padding: 20px 34px 28px 54px;

    background-color: ${({ theme }) => theme.colors.secondaryBg};
    box-shadow: ${({ theme }) => theme.boxShadow.bookCard};

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 14px 36px 14px 20px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      padding: 22px 80px 22px 20px;
    }
  }

  &.training {
    padding: 20px 34px 20px 34px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 14px 74px 14px 0;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      padding: 16px 170px 16px 0;
    }
  }
`;

export const Button = styled.button`
  position: absolute;

  padding: 0;

  color: ${({ theme }) => theme.colors.icon};

  border: none;
  background-color: transparent;

  transition: color ${({ theme }) => theme.timingFunction.btn} linear;
  cursor: pointer;

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    opacity: 0.7;
  }

  .goingToRead &,
  .currentlyReading &,
  .finishedReading & {
    top: 10px;
    right: 10px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      top: 50%;

      transform: translateY(-50%);
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      right: 20px;
    }
  }

  .training & {
    top: 20px;
    right: 0;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      top: 50%;
      right: 16px;

      transform: translateY(-50%);
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      right: 32px;
    }
  }
`;

export const BookIcon = styled(LibraryIcon)`
  position: absolute;
  top: 20px;

  width: 22px;
  height: 17px;

  fill: ${({ theme }) => theme.colors.icon};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;

    flex-shrink: 0;
    margin-right: 18px;
  }

  .goingToRead &,
  .currentlyReading &,
  .finishedReading & {
    left: 20px;
  }

  .training & {
    left: 0;
  }
`;

export const BtnIcon = styled(DeleteIcon)`
  width: 14px;
  height: 18px;

  fill: currentColor;
`;

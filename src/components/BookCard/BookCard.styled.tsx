import styled from "styled-components";
import { Button } from "components/Common.styled";
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
      padding: 14px 36px 14px 60px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      padding: 22px 80px 22px 60px;
    }
  }

  &.finishedReading {
    padding: 20px 34px 92px 54px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 11px 20px 11px 60px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      padding: 11px 80px 11px 60px;
    }
  }

  &.planning {
    padding: 20px 34px 20px 34px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 14px 74px 14px 40px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      padding: 16px 170px 16px 40px;
    }
  }

  &.training {
    padding: 20px 34px 20px 34px;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 14px 28px 14px 40px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      padding: 16px 64px 16px 40px;
    }
  }
`;

export const DeleteButton = styled.button`
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

  .goingToRead & {
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

  .planning & {
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
    top: 50%;

    transform: translateY(-50%);
  }

  .goingToRead &,
  .currentlyReading &,
  .finishedReading & {
    left: 20px;
  }

  .currentlyReading & {
    fill: ${({ theme }) => theme.colors.accent};
  }

  .finishedReading & {
    fill: ${({ theme }) => theme.colors.finishedBook};
  }

  .planning & {
    left: 0;
  }

  .training & {
    display: none;
  }
`;

export const BtnIcon = styled(DeleteIcon)`
  width: 14px;
  height: 18px;

  fill: currentColor;
`;

export const ReviewButton = styled(Button)`
  position: absolute;
  left: 72px;
  bottom: 32px;

  margin-left: 0;
  margin-right: 0;
  padding-top: 11px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  min-width: 127px;

  color: ${({ theme }) => theme.colors.lightText};
  text-align: center;
  line-height: 1.21;

  background-color: ${({ theme }) => theme.colors.finishedBook};
  border: none;

  transition: box-shadow ${({ theme }) => theme.timingFunction.btn} linear;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.btn};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;

    padding-left: 10px;
    padding-right: 10px;
    min-width: 80px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    padding-left: 24px;
    padding-right: 24px;
    min-width: 130px;
  }
`;

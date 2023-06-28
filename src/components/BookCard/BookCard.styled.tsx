import styled from "styled-components";
import { ReactComponent as LibraryIcon } from "assets/icons/library-icon.svg";
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";

export const Card = styled.div`
  position: relative;

  padding: 20px 34px 28px 54px;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow.bookCard};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    padding: 14px 10px 14px 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    display: flex;
    align-items: center;
    padding: 22px 78px 22px 20px;
  }
`;

export const CardTitle = styled.h3`
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
    max-width: 500px;

    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    line-height: 1.21;
  }
`;

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

    &:nth-child(1) {
      margin-right: 32px;
      width: 168px;
    }

    &:nth-child(2) {
      margin-right: 34px;
      width: 40px;

      text-align: end;
    }

    &:nth-child(3) {
      width: 40px;

      text-align: end;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    &:nth-child(1) {
      margin-right: 62px;
      width: 300px;
    }

    &:nth-child(2) {
      margin-right: 68px;
      width: 48px;
    }

    &:nth-child(3) {
      width: 48px;
    }
  }
`;

export const Title = styled.p`
  width: 42px;

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
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;

    margin-left: 10px;
  }
`;

export const BookIcon = styled(LibraryIcon)`
  position: absolute;
  top: 20px;
  left: 20px;

  flex-shrink: 0;
  width: 22px;
  height: 17px;

  fill: ${({ theme }) => theme.colors.icon};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;

    margin-right: 18px;
  }
`;

export const BtnIcon = styled(DeleteIcon)`
  width: 14px;
  height: 18px;

  fill: currentColor;
`;

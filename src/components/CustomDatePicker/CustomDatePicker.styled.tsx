import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";

export const Container = styled.div`
  position: relative;

  color: ${({ theme }) => theme.colors.icon};

  &:focus-within {
    color: ${({ theme }) => theme.colors.accent};
  }

  & .react-datepicker-wrapper {
    display: block;
    width: 100%;
  }

  & .react-datepicker__input-container {
    & input {
      display: block;
      padding: 11px 11px 12px 40px;
      width: 100%;

      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSizes.common.primary};
      line-height: 1.21;
      color: ${({ theme }) => theme.colors.inputText};

      outline: none;

      background-color: ${({ theme }) => theme.colors.primaryBg};
      border: 1px solid ${({ theme }) => theme.colors.inputBorder};
      border-radius: 0;

      &::placeholder {
        font-family: ${({ theme }) => theme.fontFamily.primary};
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSizes.common.primary};
        line-height: 1.21;
        color: ${({ theme }) => theme.colors.placeholder};
      }

      &:focus {
        color: ${({ theme }) => theme.colors.primary};

        background-color: ${({ theme }) => theme.colors.secondaryBg};
        border-color: ${({ theme }) => theme.colors.primaryBg};
        box-shadow: ${({ theme }) => theme.boxShadow.input};
      }
    }
  }

  & .react-datepicker__current-month {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    text-align: center;
    color: ${({ theme }) => theme.colors.lightText};

    &::first-letter {
      text-transform: uppercase;
    }
  }

  & .react-datepicker__month {
    margin: 0;
    padding: 0.4rem;
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }

  & .react-datepicker__day-name {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.calendar.primary};
    text-align: center;
    color: ${({ theme }) => theme.colors.lightText};
    text-transform: uppercase;
  }

  & .react-datepicker__day {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.calendar.primary};
    color: ${({ theme }) => theme.colors.primary};

    &--disabled {
      color: ${({ theme }) => theme.colors.disabledDay};
    }
  }

  & .react-datepicker {
    border-radius: 0;
    border-color: ${({ theme }) => theme.colors.inputBorder};
    box-shadow: ${({ theme }) => theme.boxShadow.select};
  }

  & .react-datepicker-popper {
    z-index: 2;
  }

  & .react-datepicker__header {
    background-color: ${({ theme }) => theme.colors.trainingBg};
    border-radius: 0;
    border-color: ${({ theme }) => theme.colors.inputBorder};
  }

  & .react-datepicker__triangle::after,
  & .react-datepicker__triangle::before {
    display: none;
  }

  & .react-datepicker__navigation-icon::before {
    border-color: ${({ theme }) => theme.colors.primary};

    transition: border-color ${({ theme }) => theme.timingFunction.btn} linear;
  }

  & .react-datepicker__navigation:hover {
    & .react-datepicker__navigation-icon::before {
      border-color: ${({ theme }) => theme.colors.indicatorHover};
    }
  }
`;

export const Icon = styled(CalendarIcon)`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 12px;

  width: 17px;
  height: 17px;

  fill: currentColor;

  transform: translateY(-50%);
`;

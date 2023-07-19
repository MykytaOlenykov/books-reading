import styled from "styled-components";
import { SecondaryButton } from "components/Common.styled";

export const FormContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    flex-grow: 1;
  }
`;

export const DatePickerContainer = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 24px;

    &.startDate {
      margin-right: 40px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    &.startDate {
      margin-left: 170px;
      margin-right: 44px;
    }
  }
`;

export const SelectContainer = styled.div`
  & .select__control {
    min-height: 42px;

    background-color: ${({ theme }) => theme.colors.primaryBg};
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    border-radius: 0;
    cursor: text;

    &--is-focused {
      background-color: ${({ theme }) => theme.colors.secondaryBg};
      border-color: ${({ theme }) => theme.colors.primaryBg};
      box-shadow: ${({ theme }) => theme.boxShadow.input};

      &:hover {
        border-color: ${({ theme }) => theme.colors.primaryBg};
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 483px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
      width: 715px;
    }
  }

  & .select__indicator {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;

    transition: color ${({ theme }) => theme.timingFunction.btn} linear;
  }

  &
    .select__control:not(.select__control--menu-is-open)
    .select__dropdown-indicator:hover {
    color: ${({ theme }) => theme.colors.indicatorHover};
  }

  & .select__clear-indicator:hover {
    color: ${({ theme }) => theme.colors.indicatorHover};
  }

  & .select__indicator-separator {
    background-color: ${({ theme }) => theme.colors.inputBorder};
  }

  & .select__placeholder {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    line-height: 1.21;
    color: ${({ theme }) => theme.colors.placeholder};
  }

  & .select__single-value {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    line-height: 1.21;
    color: ${({ theme }) => theme.colors.inputText};
  }

  & .select__control--is-focused .select__single-value {
    color: ${({ theme }) => theme.colors.primary};
  }

  & .select__menu {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    border: none;
    border-radius: 0;
    box-shadow: ${({ theme }) => theme.boxShadow.select};
  }

  & .select__menu-notice {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    line-height: 1.21;
    color: ${({ theme }) => theme.colors.primary};
  }

  & .select__menu-list {
    &::-webkit-scrollbar {
      width: 5px;
      background-color: ${({ theme }) => theme.colors.scrollbar};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.scrollbarThumb};
      border-radius: 0;
    }
  }

  & .select__option {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    line-height: 1.21;
    color: ${({ theme }) => theme.colors.primary};

    overflow-wrap: break-word;
    white-space: pre-wrap;

    border-top: 1px solid ${({ theme }) => theme.colors.line};
    cursor: pointer;

    &:last-child {
      border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    }

    &--is-selected {
      background-color: ${({ theme }) => theme.colors.selectedOption};
    }

    &--is-focused {
      background-color: ${({ theme }) => theme.colors.focusedOption};
    }
  }
`;

export const ErrorText = styled.span`
  display: block;
  margin-top: 4px;
  padding: 2px 4px;

  font-size: ${({ theme }) => theme.fontSizes.bookForm.errorMessage};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.required};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    text-align: center;
  }
`;

export const Button = styled(SecondaryButton)`
  margin-top: 32px;
  min-width: 172px;
  min-height: 42px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 0 0 auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    width: 181px;
  }
`;

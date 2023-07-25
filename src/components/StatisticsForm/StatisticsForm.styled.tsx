import styled from "styled-components";
import { PrimaryButton, PrimaryInput } from "components/Common.styled";

export const Form = styled.form`
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.dekstop} - 1px)) {
    width: calc(50%);
  }
`;

export const Title = styled.p`
  margin-bottom: 12px;

  font-size: ${({ theme }) => theme.fontSizes.statistics.primary};
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.common.primary};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    font-size: ${({ theme }) => theme.fontSizes.statistics.primary};
  }
`;

export const Text = styled.p`
  margin-bottom: 4px;

  font-size: ${({ theme }) => theme.fontSizes.statistics.secondary};
  line-height: 1.18;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled(PrimaryInput)`
  padding: 11px 11px 12px;

  color: ${({ theme }) => theme.colors.inputText};

  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};

  &:focus {
    color: ${({ theme }) => theme.colors.primary};

    background-color: ${({ theme }) => theme.colors.secondaryBg};
    border: 1px solid ${({ theme }) => theme.colors.primaryBg};
    box-shadow: ${({ theme }) => theme.boxShadow.input};
  }
`;

export const Button = styled(PrimaryButton)`
  margin-top: 28px;
  width: 100%;
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
    z-index: 2;
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

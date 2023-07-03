import Select, { Props as SelectProps } from "react-select";
import styled from "styled-components";
import { IBookOption } from "types";
import { SecondaryButton } from "components/Common.styled";

export const Form = styled.form`
  /* @media screen and (min-width: ${({ theme }) =>
    theme.breakpoints.dekstop}) {
    display: flex;
    gap: 48px;
  } */
`;

export const FormSelect = styled(Select)<SelectProps<IBookOption>>`
  & .select__control {
    min-height: 42px;

    background-color: ${({ theme }) => theme.colors.primaryBg};
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    border-radius: 0;
    cursor: text;

    &--is-focused {
      background-color: ${({ theme }) => theme.colors.secondaryBg};
      border: 1px solid ${({ theme }) => theme.colors.primaryBg};
      box-shadow: ${({ theme }) => theme.boxShadow.input};

      &:hover {
        border-color: ${({ theme }) => theme.colors.primaryBg};
      }
    }
  }

  & .select__indicator {
    cursor: pointer;
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
      background-color: rgba(177, 181, 194, 0.25);
    }

    &::-webkit-scrollbar-thumb {
      background-color: #b1b5c2;
      border-radius: 0;
    }
  }

  & .select__option {
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    line-height: 1.21;
    color: ${({ theme }) => theme.colors.primary};

    overflow-wrap: break-word;
    cursor: pointer;

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

  /* @media screen and (min-width: ${({ theme }) =>
    theme.breakpoints.dekstop}) {
    margin: 0;
    min-width: 181px;
  } */

  /* @media screen and (min-width: ${({ theme }) =>
    theme.breakpoints.dekstop}) {
    align-self: start;
    transform: translateY(25px);
  } */
`;

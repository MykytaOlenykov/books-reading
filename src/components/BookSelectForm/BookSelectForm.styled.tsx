import styled from "styled-components";
import { PrimaryInput, SecondaryButton } from "components/Common.styled";

export const Form = styled.form`
  /* @media screen and (min-width: ${({ theme }) =>
    theme.breakpoints.dekstop}) {
    display: flex;
    gap: 48px;
  } */
`;

export const Input = styled(PrimaryInput)`
  padding: 11px 11px 12px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};

  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    border: 1px solid none;
    box-shadow: ${({ theme }) => theme.boxShadow.input};
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

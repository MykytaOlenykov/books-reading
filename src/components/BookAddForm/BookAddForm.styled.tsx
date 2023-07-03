import styled from "styled-components";
import { PrimaryInput, SecondaryButton } from "components/Common.styled";

export const Form = styled.form`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    display: flex;
    gap: 48px;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    row-gap: 24px;
    column-gap: 32px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    display: inline-grid;
    gap: 16px;
    grid-template-columns: 336px 250px 134px 134px;
    grid-template-rows: 1fr;
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  @media screen and (min-width: calc(${({ theme }) =>
      theme.breakpoints.tablet})) and (max-width: calc(${({ theme }) =>
      theme.breakpoints.dekstop} - 1px)) {
    &:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 5;
    }

    &:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;

export const LabelText = styled.span`
  display: inline-block;
  margin-bottom: 8px;

  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Input = styled(PrimaryInput)`
  padding: 11px 11px 12px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};

  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    border: 1px solid ${({ theme }) => theme.colors.primaryBg};
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    margin: 0;
    min-width: 181px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    align-self: start;
    transform: translateY(25px);
  }
`;

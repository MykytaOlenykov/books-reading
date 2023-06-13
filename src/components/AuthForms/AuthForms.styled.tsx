import { Link } from "react-router-dom";
import styled from "styled-components";
import { PrimaryInput } from "components/Common.styled";

export const Form = styled.form`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 auto;
    padding: 40px;
    max-width: 400px;

    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;

export const LabelText = styled.span`
  display: block;
  margin-bottom: 8px;

  font-weight: 600;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.secondaryBg};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

export const Star = styled.span`
  color: ${({ theme }) => theme.colors.required};
`;

export const Input = styled(PrimaryInput)`
  background-color: ${({ theme }) => theme.colors.inputBg};
  box-shadow: ${({ theme }) => theme.boxShadow.input};
  border: none;

  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    line-height: 1.21;
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const Button = styled.button`
  margin-bottom: 20px;
  padding: 20px 0;
  width: 100%;

  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.authForm.textBtn};
  line-height: 1.25;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};

  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  cursor: pointer;

  transition: box-shadow ${({ theme }) => theme.timingFunction.btn} linear;

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    box-shadow: ${({ theme }) => theme.boxShadow.btn};
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export const FormText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.authForm.primary};
  line-height: 1.23;
  text-align: center;
  color: ${({ theme }) => theme.colors.formText};
`;

export const RedirectLink = styled(Link)`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.accent};
`;

export const ErrorText = styled.span`
  display: block;
  margin-top: 4px;
  padding: 2px 4px;
  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.authForm.primary};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.required};

  background-color: ${({ theme }) => theme.colors.inputBg};
  border-radius: 0;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import { PrimaryInput, PrimaryButton } from "components/Common.styled";

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  max-width: 280px;
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

export const Button = styled(PrimaryButton)`
  margin-bottom: 20px;
  padding: 20px 0;
  width: 100%;

  font-size: ${({ theme }) => theme.fontSizes.authForm.textBtn};
  line-height: 1.25;
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

import styled from "styled-components";
import { PrimaryInput, SecondaryButton } from "components/Common.styled";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
`;

export const Label = styled.label``;

export const LabelText = styled.span`
  display: inline-block;
  margin-bottom: 8px;

  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Input = styled(PrimaryInput)`
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

  font-size: ${({ theme }) => theme.fontSizes.authForm.primary};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.required};
`;

export const Button = styled(SecondaryButton)`
  min-width: 172px;
`;

import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "components/Common.styled";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";

export const Form = styled.form`
  padding: 20px;
  width: 280px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 608px;
  }
`;

export const ErrorText = styled.span`
  display: block;
  margin-top: 4px;
  padding: 2px 4px;

  font-size: ${({ theme }) => theme.fontSizes.bookForm.errorMessage};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.required};
`;

export const Text = styled.span`
  display: inline-block;
  margin-right: 12px;

  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.modal.primary};
  line-height: 1.25;
`;

export const Counter = styled.span<{ $isError: boolean }>`
  display: inline-block;

  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.required : theme.colors.primaryText};
  font-size: ${({ theme }) => theme.fontSizes.feedbackCounter.primary};
  line-height: 1.25;
`;

export const Label = styled.label`
  display: block;
  margin-top: 20px;
`;

export const TextareaContainer = styled.span`
  display: block;
  margin-top: 8px;
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
`;

export const Textarea = styled.textarea`
  display: block;
  padding: 8px;
  width: 100% !important;
  height: 170px !important;

  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  font-weight: 400;
  line-height: 1.21;

  border: none;
  border-radius: 0;
  outline: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputText};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    font-weight: 400;
    line-height: 1.21;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }) => theme.colors.scrollbar};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbarThumb};
    border-radius: 0;
  }
`;

export const Button = styled(SecondaryButton)`
  margin: 0;
  padding-left: 12px;
  padding-right: 12px;
  min-width: 98px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 130px;
  }
`;

export const SubmitButton = styled(PrimaryButton)`
  margin: 0;
  padding-left: 12px;
  padding-right: 12px;
  min-width: 98px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 130px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 28px;
    margin-top: 28px;
  }
`;

export const Rating = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 12px;
  }
`;

export const RatingLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioBtn = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const Icon = styled(StarIcon)<{
  $isActive: boolean;
  $isSelected: boolean;
}>`
  width: 17px;
  height: 17px;

  fill: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.accent : "none"};
  stroke: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.accent : theme.colors.icon};
`;

import styled from "styled-components";
import { SecondaryButton } from "components/Common.styled";
import { ReactComponent as StarIcon } from "assets/icons/star.svg";

export const Container = styled.div`
  padding: 20px;
  width: 280px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 608px;
  }
`;

export const Text = styled.span`
  display: inline-block;

  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.modal.primary};
  line-height: 1.25;
`;

export const Info = styled.p`
  margin-top: 8px;

  font-weight: 400;
  line-height: 1.21;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Feedback = styled.p`
  display: block;
  margin-top: 8px;
  padding: 8px;
  width: 100%;
  max-height: 170px;

  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  font-weight: 400;
  line-height: 1.21;
  overflow-wrap: break-word;

  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  border-radius: 0;
  outline: none;
  resize: none;

  overflow-y: auto;

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
  margin-top: 20px;
  padding-left: 12px;
  padding-right: 12px;
  min-width: 98px;
  min-height: 42px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 28px;
    min-width: 130px;
  }
`;

export const Rating = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 12px;
  }
`;

export const IconThumb = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(StarIcon)<{
  $isSelected: boolean;
}>`
  width: 17px;
  height: 17px;

  fill: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.accent : "none"};
  stroke: ${({ theme }) => theme.colors.accent};
`;

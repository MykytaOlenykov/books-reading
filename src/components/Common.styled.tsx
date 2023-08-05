import styled from "styled-components";

export const PrimaryContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  min-width: 310px;
  max-width: ${({ theme }) => theme.breakpoints.mobile};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 32px;
    max-width: ${({ theme }) => theme.breakpoints.tablet};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.dekstop}) {
    max-width: ${({ theme }) => theme.breakpoints.dekstop};
  }
`;

export const PrimaryInput = styled.input`
  padding: 12px 12px 13px;
  width: 100%;

  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;

  border-radius: 0;
  outline: none;

  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.common.primary};
    line-height: 1.21;
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

export const Button = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;
  text-align: center;

  border-radius: 0;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
  }
`;

export const PrimaryButton = styled(Button)`
  padding: 11px 0 12px;

  color: ${({ theme }) => theme.colors.lightText};

  background-color: ${({ theme }) => theme.colors.accent};
  border: none;

  transition: box-shadow ${({ theme }) => theme.timingFunction.btn} linear;

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    box-shadow: ${({ theme }) => theme.boxShadow.btn};
  }
`;

export const SecondaryButton = styled(Button)`
  padding: 10px 0 11px;

  color: ${({ theme }) => theme.colors.primary};

  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  transition: filter ${({ theme }) => theme.timingFunction.btn} linear;

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    filter: ${({ theme }) => theme.filter.btn};
  }
`;

import styled from "styled-components";

export const Btn = styled.button`
  display: block;
  min-width: 152px;
  padding-left: 11px;
  padding-right: 11px;

  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;
  text-align: center;

  border-radius: 0;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
  }

  &.primary {
    padding-top: 11px;
    padding-bottom: 12px;

    color: ${({ theme }) => theme.colors.lightText};

    background-color: ${({ theme }) => theme.colors.accent};
    border: none;

    transition: box-shadow ${({ theme }) => theme.timingFunction.btn} linear;

    &:not(:disabled):hover,
    &:not(:disabled):focus {
      box-shadow: ${({ theme }) => theme.boxShadow.btn};
    }
  }

  &.secondary {
    padding-top: 10px;
    padding-bottom: 11px;

    color: ${({ theme }) => theme.colors.primary};

    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};

    transition: filter ${({ theme }) => theme.timingFunction.btn} linear;

    &:not(:disabled):hover,
    &:not(:disabled):focus {
      filter: ${({ theme }) => theme.filter.btn};
    }
  }
`;

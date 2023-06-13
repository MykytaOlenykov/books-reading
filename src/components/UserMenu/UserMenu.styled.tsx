import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 14px;
`;

export const LogOutBtn = styled.button`
  position: relative;

  padding: 0;

  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.primary};

  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: color ${({ theme }) => theme.timingFunction.btn} linear;

  &::after {
    content: "";

    position: absolute;
    left: 0;
    top: calc(50% + 7px);

    width: 100%;
    height: 1px;

    background-color: ${({ theme }) => theme.colors.primary};

    transition: background-color ${({ theme }) => theme.timingFunction.btn}
      linear;
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    color: ${({ theme }) => theme.colors.accent};

    &::after {
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }

  &:disabled {
    opacity: 0.7;
  }
`;

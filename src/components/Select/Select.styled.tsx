import styled from "styled-components";
import { PrimaryInput } from "components/Common.styled";
import { ReactComponent as InputIcon } from "assets/icons/input-icon.svg";

export const Container = styled.div`
  position: relative;

  margin-bottom: 32px;
`;

export const InputConainer = styled.div`
  position: relative;
`;

export const Input = styled(PrimaryInput)`
  padding: 12px 11px;

  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.common.primary};
  line-height: 1.21;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow.input};
`;

export const Icon = styled(InputIcon)<{ $active: boolean }>`
  position: absolute;
  top: 50%;
  right: 12px;

  width: 13px;
  height: 7px;

  fill: ${({ theme }) => theme.colors.primary};

  pointer-events: none;

  transform: translateY(-50%)
    rotate(${({ $active }) => ($active ? "180deg" : "0deg")});
`;

export const List = styled.ul`
  position: absolute;
  z-index: 1;

  width: 100%;
  max-height: calc(42px * 5 + 1px);

  overflow-y: auto;

  background-color: ${({ theme }) => theme.colors.secondaryBg};

  &::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(177, 181, 194, 0.25);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b1b5c2;
    border-radius: 0;
  }
`;

export const Item = styled.li`
  padding: 12px 20px;
  min-height: 42px;

  text-overflow: ellipsis;
  white-space: nowrap;

  border-top: 1px solid ${({ theme }) => theme.colors.line};
  border-right: 1px solid ${({ theme }) => theme.colors.line};
  border-left: 1px solid ${({ theme }) => theme.colors.line};

  overflow: hidden;

  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }
`;

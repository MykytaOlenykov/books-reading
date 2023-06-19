import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "assets/icons/plus-icon.svg";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  min-width: 310px;
  width: 100%;
  height: 100%;

  pointer-events: none;
`;

export const Button = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;

  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;

  transform: translateX(-50%);
  pointer-events: visible;
`;

export const ButtonIcon = styled(PlusIcon)`
  width: 16px;
  height: 16px;

  fill: ${({ theme }) => theme.colors.secondaryBg};
`;

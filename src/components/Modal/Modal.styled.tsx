import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  min-width: 310px;
  width: 100vw;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.backdrop};
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  background-color: ${({ theme }) => theme.colors.secondaryBg};
  box-shadow: ${({ theme }) => theme.boxShadow.modal};

  transform: translate(-50%, -50%);

  pointer-events: visible;
`;

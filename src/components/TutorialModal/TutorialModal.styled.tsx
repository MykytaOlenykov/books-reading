import styled from "styled-components";

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  min-width: 310px;
  width: 100vw;
  height: 100%;

  pointer-events: none;
`;

export const Modal = styled.div`
  position: absolute;
  top: 153px;
  left: 50%;

  width: 280px;

  transform: translateX(-50%);

  pointer-events: visible;
`;

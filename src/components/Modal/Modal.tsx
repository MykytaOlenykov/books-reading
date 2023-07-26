import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import * as S from "./Modal.styled";

interface IProps {
  onCloseModal: () => void;
  children: React.ReactNode;
}

const modalRoot = document.getElementById("modal-root")!;

export const Modal: React.FC<IProps> = ({ onCloseModal, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.onscroll = null;
    };
  }, [onCloseModal]);

  return createPortal(
    <S.Backdrop>
      <S.Modal>{children}</S.Modal>
    </S.Backdrop>,
    modalRoot
  );
};

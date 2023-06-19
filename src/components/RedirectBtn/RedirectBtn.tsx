import React from "react";
import * as S from "./RedirectBtn.styled";
import { createPortal } from "react-dom";

interface IProps {
  redirectTo: string;
}

const btnRoot = document.getElementById("btn-root")!;

export const RedirectBtn: React.FC<IProps> = ({ redirectTo }) =>
  createPortal(
    <S.Backdrop>
      <S.Button to={redirectTo}>
        <S.ButtonIcon />
      </S.Button>
    </S.Backdrop>,
    btnRoot
  );

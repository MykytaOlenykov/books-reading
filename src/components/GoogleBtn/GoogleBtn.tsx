import React from "react";
import { ReactComponent as GoogleIcon } from "assets/icons/google-icon.svg";
import * as S from "./GoogleBtn.styled";

export const GoogleBtn: React.FC = () => (
  <S.Button type="button">
    <GoogleIcon />
    Google
  </S.Button>
);

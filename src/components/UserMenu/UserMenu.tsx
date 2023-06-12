import React from "react";
import { UserLabel } from "components/UserLabel";
import * as S from "./UserMenu.styled";

export const UserMenu: React.FC = () => (
  <S.Container>
    <UserLabel />
    <S.LogOutBtn type="button">Вихід</S.LogOutBtn>
  </S.Container>
);

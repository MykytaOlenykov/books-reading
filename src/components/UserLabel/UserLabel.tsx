import React from "react";
import { useUserData } from "hooks";
import * as S from "./UserLabel.styled";

export const UserLabel: React.FC = () => {
  const { user } = useUserData();

  const userTag = user.name![0].toUpperCase();

  return (
    <S.Container>
      <S.Thumb>
        <S.UserIcon>{userTag}</S.UserIcon>
      </S.Thumb>

      <S.UserName>{user.name!}</S.UserName>
    </S.Container>
  );
};

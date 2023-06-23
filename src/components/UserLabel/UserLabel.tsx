import React from "react";
import { useAuth } from "hooks";
import * as S from "./UserLabel.styled";

export const UserLabel: React.FC = () => {
  const { userData } = useAuth();

  // const userTag = userData.name![0].toUpperCase();

  return (
    <S.Container>
      <S.Thumb>{/* <S.UserIcon>{userTag}</S.UserIcon> */}</S.Thumb>

      {/* <S.UserName>{userData.name!}</S.UserName> */}
    </S.Container>
  );
};

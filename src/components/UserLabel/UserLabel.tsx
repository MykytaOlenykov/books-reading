import React from "react";
import * as S from "./UserLabel.styled";

export const UserLabel: React.FC = () => {
  const userTag = "M";

  return (
    <>
      <S.Thumb>
        <S.UserIcon>{userTag}</S.UserIcon>
      </S.Thumb>
    </>
  );
};

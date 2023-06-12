import React from "react";
import { useAuth } from "hooks";
import { Navigation } from "components/Navigation";
import { UserMenu } from "components/UserMenu";
import * as S from "./AppBar.styled";

export const AppBar: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <S.Header>
      <S.Container>
        <S.Logo isLoggedIn={isLoggedIn}>BR</S.Logo>

        {isLoggedIn && (
          <S.NavBox>
            <Navigation />

            <UserMenu />
          </S.NavBox>
        )}
      </S.Container>
    </S.Header>
  );
};

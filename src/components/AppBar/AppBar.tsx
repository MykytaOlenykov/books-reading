import React from "react";
import { Navigation } from "components/Navigation";
import { UserMenu } from "components/UserMenu";
import * as S from "./AppBar.styled";

export const AppBar: React.FC = () => (
  <S.Header>
    <S.Container>
      <S.Logo>BR</S.Logo>

      <S.NavBox>
        <Navigation />

        <UserMenu />
      </S.NavBox>
    </S.Container>
  </S.Header>
);

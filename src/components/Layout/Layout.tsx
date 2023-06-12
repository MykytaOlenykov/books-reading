import React from "react";
import { Outlet } from "react-router-dom";
import { PageLoader } from "components/Loaders";
import * as S from "./Layout.styled";

export const Layout: React.FC = () => (
  <>
    <S.Header>
      <S.Container>
        <S.Logo>BR</S.Logo>
      </S.Container>
    </S.Header>

    <React.Suspense fallback={<PageLoader />}>
      <Outlet />
    </React.Suspense>
  </>
);

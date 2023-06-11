import React, { Suspense } from "react";
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

    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  </>
);
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "components/Container";
import { PageLoader } from "components/Loaders";
import * as S from "./Layout.styled";

export const Layout: React.FC = () => (
  <>
    <S.Header>
      <Container>
        <S.HeaderContainer>
          <S.Logo>BR</S.Logo>
        </S.HeaderContainer>
      </Container>
    </S.Header>

    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  </>
);

import React from "react";
import { useUserData, useResizeScreen } from "hooks";
import { Navigation } from "components/Navigation";
import { UserMenu } from "components/UserMenu";
import * as S from "./AppBar.styled";
import { UserLabel } from "components/UserLabel";

export const AppBar: React.FC = () => {
  const { isLoggedIn } = useUserData();
  const { isMobile, isTablet, isDesktop } = useResizeScreen();

  return (
    <S.Header>
      <S.Container>
        <S.Logo isLoggedIn={isLoggedIn}>BR</S.Logo>

        {isLoggedIn && (
          <>
            {!isMobile && (isTablet || isDesktop) && <UserLabel />}

            <S.NavBox>
              <Navigation />

              <UserMenu />
            </S.NavBox>
          </>
        )}
      </S.Container>
    </S.Header>
  );
};

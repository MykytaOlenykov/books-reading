import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { BookSelectForm } from "components/BookSelectForm";
import { useResizeScreen } from "hooks";
import * as S from "./BookSelectSection.styled";

export const BookSelectSection: React.FC = () => {
  const { pathname } = useLocation();
  const { isMobile } = useResizeScreen();

  // if (!isMobile && pathname === "/select-book") {
  //   return <Navigate to="/training" />;
  // }

  return (
    <S.Section>
      <S.Container>
        {isMobile && (
          <S.GoBackLink to="/training">
            <S.GoBackIcon />
          </S.GoBackLink>
        )}

        <S.Title>Моє тренування</S.Title>

        <BookSelectForm />
      </S.Container>
    </S.Section>
  );
};

import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { TutorialModal } from "components/TutorialModal";
import { Tutorial } from "components/Tutorial";
import { BookAddForm } from "components/BookAddForm";
import { selectIsFirstVisit } from "redux/books/selectors";
import { useResizeScreen, useAppSelector } from "hooks";
import * as S from "./BookAddSection.styled";

export const BookAddSection: React.FC = () => {
  const isFirstVisit = useAppSelector(selectIsFirstVisit);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(isFirstVisit);
  const { pathname } = useLocation();
  const { isMobile } = useResizeScreen();

  const handleCloseModal = (): void => {
    setIsOpenModal(false);
  };

  if (!isMobile && pathname === "/library/add-book") {
    return <Navigate to="/library" />;
  }

  return (
    <S.Section>
      <S.Container>
        {isMobile && (
          <S.GoBackLink to="/library">
            <S.GoBackIcon />
          </S.GoBackLink>
        )}

        <BookAddForm />

        {isMobile && isOpenModal && (
          <TutorialModal onCloseModal={handleCloseModal} />
        )}

        {!isMobile && isFirstVisit && <Tutorial />}
      </S.Container>
    </S.Section>
  );
};

import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { TutorialModal } from "components/TutorialModal";
import { Tutorial } from "components/Tutorial";
import { BookAddForm } from "components/BookAddForm";
import { useResizeScreen, useBooks } from "hooks";
import * as S from "./BookAddSection.styled";

export const BookAddSection: React.FC = () => {
  const { goingToRead, currentlyReading, finishedReading } = useBooks();
  const isFirstVisit =
    !goingToRead.length && !currentlyReading.length && !finishedReading.length;
  const [isOpenModal, setIsOpenModal] = useState(isFirstVisit);
  const { pathname } = useLocation();
  const { isMobile } = useResizeScreen();

  const handleCloseModal = (): void => {
    setIsOpenModal(false);
  };

  if (!isMobile && pathname === "/add-book") {
    return <Navigate to="/" />;
  }

  return (
    <S.Section>
      <S.Container>
        {isMobile && (
          <S.GoBackLink to="/">
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

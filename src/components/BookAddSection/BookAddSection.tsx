import React, { useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { TutorialModal } from "components/TutorialModal";
import { Tutorial } from "components/Tutorial";
import { BookAddForm } from "components/BookAddForm";
import { useResizeScreen, useUserData } from "hooks";
import * as S from "./BookAddSection.styled";

export const BookAddSection: React.FC = () => {
  const { userData } = useUserData();
  const [isOpenModal, setIsOpenModal] = useState(
    () =>
      !userData.goingToRead.length &&
      !userData.currentlyReading.length &&
      !userData.finishedReading.length
  );
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

        {!isMobile && <Tutorial />}
      </S.Container>
    </S.Section>
  );
};

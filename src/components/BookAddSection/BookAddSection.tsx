import React, { useState } from "react";
import { TutorialModal } from "components/TutorialModal";
import { BookAddForm } from "components/BookAddForm";
import { useUserData } from "hooks";
import * as S from "./BookAddSection.styled";

export const BookAddSection: React.FC = () => {
  const { userData } = useUserData();
  const [isOpenModal, setIsOpenModal] = useState((): boolean => {
    const isFirstVisit: boolean =
      !userData.goingToRead.length &&
      !userData.currentlyReading.length &&
      !userData.finishedReading.length;

    return isFirstVisit;
  });

  const handleCloseModal = (): void => {
    setIsOpenModal(false);
  };

  return (
    <S.Section>
      <S.Container>
        <S.GoBackLink to="/">
          <S.GoBackIcon />
        </S.GoBackLink>

        <BookAddForm />

        {isOpenModal && <TutorialModal onCloseModal={handleCloseModal} />}
      </S.Container>
    </S.Section>
  );
};

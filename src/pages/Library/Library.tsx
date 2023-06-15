import React, { useState } from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { TutorialModal } from "components/TutorialModal";
import { PrimaryContainer } from "components/Common.styled";
import { useUserData } from "hooks";

const Library: React.FC = () => {
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
    <main>
      <PrimaryContainer>
        <HiddenComponent>
          <h1>Бібліотека книг</h1>
        </HiddenComponent>

        {isOpenModal && <TutorialModal onCloseModal={handleCloseModal} />}
      </PrimaryContainer>
    </main>
  );
};

export default Library;

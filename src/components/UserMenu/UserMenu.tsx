import React, { useState } from "react";
import { Modal } from "components/Modal";
import { UserLabel } from "components/UserLabel";
import { LogOut } from "components/LogOut";
import { useAuth, useResizeScreen } from "hooks";
import * as S from "./UserMenu.styled";

export const UserMenu: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const {
    isLoading: { logOut: isDisabled },
  } = useAuth();
  const { isMobile } = useResizeScreen();

  const handleOpenModal = (): void => {
    setIsOpenModal(true);
  };

  const handleCloseModal = (): void => {
    setIsOpenModal(false);
  };

  return (
    <S.Container>
      {isMobile && <UserLabel />}
      <S.LogOutBtn
        onClick={handleOpenModal}
        type="button"
        disabled={isDisabled}
      >
        Вихід
      </S.LogOutBtn>
      {isOpenModal && (
        <Modal onCloseModal={handleCloseModal}>
          <LogOut onCloseModal={handleCloseModal} />
        </Modal>
      )}
    </S.Container>
  );
};

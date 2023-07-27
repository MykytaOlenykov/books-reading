import React from "react";
import { ModalText } from "components/ModalText";
import { logOut } from "redux/auth/operations";
import { useAppDispatch } from "hooks";
import * as S from "./LogOut.styled";

interface IProps {
  onCloseModal: () => void;
}

export const LogOut: React.FC<IProps> = ({ onCloseModal }) => {
  const dispatch = useAppDispatch();

  const handleLogOut = (): void => {
    onCloseModal();
    dispatch(logOut());
  };

  return (
    <S.Container>
      <ModalText text="Якщо Ви вийдете з програми незбережені дані будуть втрачені" />
      <S.BtnContainer>
        <S.CancelButton onClick={onCloseModal} type="button">
          Відміна
        </S.CancelButton>
        <S.AgreButton onClick={handleLogOut} type="button">
          Вийти
        </S.AgreButton>
      </S.BtnContainer>
    </S.Container>
  );
};

import React from "react";
import { ModalText } from "components/ModalText";
import { logOut } from "redux/auth/operations";
import { clearData as clearBooksData } from "redux/books/slice";
import { clearData as clearPlanningData } from "redux/planning/slice";
import { useAppDispatch } from "hooks";
import * as S from "./LogOut.styled";

interface IProps {
  onCloseModal: () => void;
}

export const LogOut: React.FC<IProps> = ({ onCloseModal }) => {
  const dispatch = useAppDispatch();

  const handleLogOut = async (): Promise<void> => {
    onCloseModal();
    await dispatch(logOut());
    dispatch(clearBooksData());
    dispatch(clearPlanningData());
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

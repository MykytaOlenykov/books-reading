import React from "react";
import * as S from "./FinishedBookInfo.styled";
import { ModalText } from "components/ModalText";

interface IProps {
  onCloseModal: () => void;
}

export const FinishedBookInfo: React.FC<IProps> = ({ onCloseModal }) => (
  <S.Conatiner>
    <S.Icon />
    <ModalText text="Вітаю! Ще одна книга прочитана." />
    <S.Button type="button" onClick={onCloseModal}>
      Готово
    </S.Button>
  </S.Conatiner>
);

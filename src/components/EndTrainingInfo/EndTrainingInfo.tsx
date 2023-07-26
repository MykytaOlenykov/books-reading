import React from "react";
import { ModalText } from "components/ModalText";
import { FinishTrainingButton } from "components/FinishTrainingButton";
import * as S from "./EndTrainingInfo.styled";

interface IProps {
  text: string;
  isAccentIcon?: boolean;
  onCloseModal: () => void;
}

export const EndTrainingInfo: React.FC<IProps> = ({
  onCloseModal,
  text,
  isAccentIcon = false,
}) => (
  <S.Conatiner>
    <S.Icon $isAccent={isAccentIcon} />
    <ModalText text={text} />
    <S.BtnContainer>
      <FinishTrainingButton styleType="primary" text="Нове тренування" />

      <S.Button type="button" onClick={onCloseModal}>
        Назад
      </S.Button>
    </S.BtnContainer>
  </S.Conatiner>
);

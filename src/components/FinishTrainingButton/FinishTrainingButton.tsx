import React from "react";
import { finishTraining } from "redux/planning/operations";
import { selectIsLoading } from "redux/planning/selectors";
import { useAppDispatch, useAppSelector } from "hooks";
import * as S from "./FinishTrainingButton.styled";

interface IProps {
  text: string;
  styleType: "primary" | "secondary";
}

export const FinishTrainingButton: React.FC<IProps> = ({ text, styleType }) => {
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  const handleCancelTraining = (): void => {
    dispatch(finishTraining());
  };

  return (
    <S.Btn
      className={styleType}
      type="button"
      onClick={handleCancelTraining}
      disabled={isLoading}
    >
      {text}
    </S.Btn>
  );
};

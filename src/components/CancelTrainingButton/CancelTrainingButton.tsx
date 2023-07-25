import React from "react";
import { cancelTraining } from "redux/planning/operations";
import { selectIsLoading } from "redux/planning/selectors";
import { useAppDispatch, useAppSelector } from "hooks";
import * as S from "./CancelTrainingButton.styled";

export const CancelTrainingButton: React.FC = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  const handleCancelTraining = (): void => {
    dispatch(cancelTraining());
  };

  return (
    <S.Button type="button" onClick={handleCancelTraining} disabled={isLoading}>
      Скасувати тренування
    </S.Button>
  );
};

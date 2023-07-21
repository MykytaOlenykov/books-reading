import React from "react";
import { toast } from "react-hot-toast";
import { useAppDispatch, usePlanning } from "hooks";
import { trainingSchema } from "schemas";
import { errorAPIMessages } from "constants/";
import { formatDate } from "utils";
import * as S from "./StartTrainingButton.styled";
import { addPlan } from "redux/planning/operations";

export const StartTrainingButton: React.FC = () => {
  const { startDate, endDate, books, isAdding } = usePlanning();
  const dispatch = useAppDispatch();

  const handleStartTraining = async () => {
    try {
      const data = await trainingSchema.validate({
        books,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      dispatch(addPlan({ ...data, timezone }));
    } catch (error) {
      const message =
        error instanceof Error ? error.message : errorAPIMessages.common;

      toast.error(message);
    }
  };

  return (
    <S.Button type="button" onClick={handleStartTraining} disabled={isAdding}>
      Почати тренування
    </S.Button>
  );
};

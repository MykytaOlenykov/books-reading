import React from "react";
import { toast } from "react-hot-toast";
import { usePlanning } from "hooks";
import { trainingSchema } from "schemas";
import { errorAPIMessages } from "constants/";
import { formatDate } from "utils";
import * as S from "./StartTrainingButton.styled";

export const StartTrainingButton: React.FC = () => {
  const { startDate, endDate, books } = usePlanning();

  const handleStartTraining = async () => {
    try {
      const data = await trainingSchema.validate({
        books,
        startDate: formatDate(startDate),
        endDate: formatDate(endDate),
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      console.log({ ...data, timezone });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : errorAPIMessages.common;

      toast.error(message);
    }
  };

  return (
    <S.Button type="button" onClick={handleStartTraining}>
      Почати тренування
    </S.Button>
  );
};

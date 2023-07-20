import React from "react";
import { usePlanning } from "hooks";
import * as S from "./StartTrainingButton.styled";

export const StartTrainingButton: React.FC = () => {
  const { startDate, endDate, books } = usePlanning();

  const handleStartTraining = () => {
    if (!startDate || !endDate || !books.length) {
      return console.log("invalid data");
    }

    console.log(startDate);
    console.log(endDate);
    console.log(books);
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
  };

  return (
    <S.Button type="button" onClick={handleStartTraining}>
      Почати тренування
    </S.Button>
  );
};

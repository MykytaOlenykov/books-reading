import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { Timer } from "components/Timer";
import { usePlanning } from "hooks";
import { calcStartOfNextYear } from "utils";
import * as S from "./TimeSection.styled";

export const TimeSection: React.FC = () => {
  const { endDate } = usePlanning();

  const normalizedDate = new Date(`${endDate}T00:00:00`);

  const startOfNextYear = calcStartOfNextYear();

  return (
    <S.Container>
      <HiddenComponent>
        <h2>Секція відліку часу</h2>
      </HiddenComponent>

      <Timer endDate={startOfNextYear} title="До закінчення року залишилось" />

      {endDate && (
        <Timer endDate={normalizedDate} title="До досягнення мети залишилось" />
      )}
    </S.Container>
  );
};

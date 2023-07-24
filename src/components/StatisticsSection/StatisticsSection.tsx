import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { StatisticsForm } from "components/StatisticsForm";
import { StatisticsList } from "components/StatisticsList";
import * as S from "./StatisticsSection.styled";

export const StatisticsSection: React.FC = () => (
  <S.Container>
    <HiddenComponent>
      <h2>Розділ статистики</h2>
    </HiddenComponent>

    <StatisticsForm />
    <StatisticsList />
  </S.Container>
);

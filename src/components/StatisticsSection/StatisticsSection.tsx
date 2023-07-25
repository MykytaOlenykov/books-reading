import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { StatisticsForm } from "components/StatisticsForm";
import { StatisticsList } from "components/StatisticsList";
import { useAppSelector } from "hooks";
import { selectStatus } from "redux/planning/selectors";
import { planningStatuses } from "constants/";
import * as S from "./StatisticsSection.styled";

export const StatisticsSection: React.FC = () => {
  const status = useAppSelector(selectStatus);

  const isShowFrom = status === planningStatuses.active;

  return (
    <S.Container>
      <HiddenComponent>
        <h2>Розділ статистики</h2>
      </HiddenComponent>

      {isShowFrom && <StatisticsForm />}

      <StatisticsList />
    </S.Container>
  );
};

import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";
import { selectPagesPerDay } from "redux/planning/selectors";
import { selectStats } from "redux/statistics/selectors";
import { useAppSelector, useResizeScreen } from "hooks";
import { theme } from "constants/";
import * as S from "./StatisticsChart.styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface IChartData {
  pagesPerDay: number[];
  totalPages: number[];
  labels: string[];
}

export const StatisticsChart: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useResizeScreen();
  const stats = useAppSelector(selectStats);
  const defaultPagesPerDay = useAppSelector(selectPagesPerDay) ?? 0;

  const numberOfVisibleValues = Number(
    (isMobile && 3) || (isTablet && 6) || (isDesktop && 7)
  );

  const defaultData = {
    labels: [format(new Date(), "dd.MM")],
    pagesPerDay: [defaultPagesPerDay],
    totalPages: [0],
  };

  const chartData = useMemo<IChartData>(() => {
    const { pagesPerDay, totalPages, labels } = stats.reduce(
      (acc, { date, pagesPerDay, currentDateStats }) => {
        const formatedDate = format(new Date(date), "dd.MM");
        acc.labels.push(formatedDate);
        acc.pagesPerDay.push(pagesPerDay);
        const totalPages = currentDateStats.reduce(
          (acc, { pagesRead }) => (acc += pagesRead),
          0
        );
        acc.totalPages.push(totalPages);

        return acc;
      },
      {
        pagesPerDay: [],
        totalPages: [],
        labels: [],
      } as IChartData
    );

    const currentDate = format(new Date(), "dd.MM");

    if (currentDate !== labels[labels.length - 1]) {
      labels.push(currentDate);
      pagesPerDay.push(defaultPagesPerDay);
      totalPages.push(0);
    }

    return { pagesPerDay, totalPages, labels };
  }, [stats, defaultPagesPerDay]);

  const { pagesPerDay, totalPages, labels } = stats.length
    ? chartData
    : defaultData;

  const defaultLabels = ["", "", "", "", "", "", ""];

  const visibledLabels =
    labels.length < numberOfVisibleValues
      ? [
          ...labels,
          ...defaultLabels.filter(
            (_, idx) =>
              idx + 1 > labels.length && idx + 1 <= numberOfVisibleValues
          ),
        ]
      : labels;

  const options: ChartOptions<"line"> = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: true,
        labels: {
          color: theme.colors.primary,
        },
      },
    },
    scales: {
      x: {
        display: true,
        min: visibledLabels.length - numberOfVisibleValues,
        max: visibledLabels.length,
        ticks: {
          display: true,
          autoSkip: true,
          maxRotation: 0,
          color: theme.colors.primary,
        },
        border: {
          color: theme.colors.trainingBg,
        },
        grid: {
          color: theme.colors.trainingBg,
        },
      },
      y: {
        display: true,
        min: 0,
        ticks: {
          autoSkip: true,
          maxRotation: 0,
          color: theme.colors.primary,
        },
        border: {
          color: theme.colors.trainingBg,
        },
        grid: {
          color: "transparent",
        },
      },
    },
    maintainAspectRatio: false,
  };

  const data = {
    labels: visibledLabels,
    datasets: [
      {
        label: "План",
        data: pagesPerDay,
        borderColor: theme.colors.chartLine,
        backgroundColor: theme.colors.chartLine,
        tension: 0.5,
      },
      {
        label: "Факт",
        data: totalPages,
        borderColor: theme.colors.accent,
        backgroundColor: theme.colors.accent,
        tension: 0.5,
      },
    ],
  };

  return (
    <S.Section>
      <S.Container>
        <S.Counter>
          <S.Text>Кількість сторінок / день</S.Text>
          <S.Count>{defaultPagesPerDay}</S.Count>
        </S.Counter>

        <S.Chart>
          <Line options={options} data={data} />
        </S.Chart>
      </S.Container>
    </S.Section>
  );
};

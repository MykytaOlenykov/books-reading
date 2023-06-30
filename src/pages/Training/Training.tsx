import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { Scoreboard } from "components/Scoreboard";
import { TrainingBooksSection } from "components/TrainingBooksSection";
import { StatisticsChart } from "components/StatisticsChart";
import { RedirectBtn } from "components/RedirectBtn";
import { useResizeScreen } from "hooks";

const Training: React.FC = () => {
  const { isMobile } = useResizeScreen();

  return (
    <main>
      <section>
        <HiddenComponent>
          <h1>Сторінка тренування</h1>
        </HiddenComponent>
      </section>

      <Scoreboard />

      <TrainingBooksSection />

      <StatisticsChart />

      {isMobile ? <RedirectBtn redirectTo="select-book" /> : null}
    </main>
  );
};

export default Training;

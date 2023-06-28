import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { Scoreboard } from "components/Scoreboard";
import { TrainingBooksSection } from "components/TrainingBooksSection";
import { StatisticsGraph } from "components/StatisticsGraph";

const Training: React.FC = () => (
  <main>
    <section>
      <HiddenComponent>
        <h1>Сторінка тренування</h1>
      </HiddenComponent>
    </section>

    <Scoreboard />

    <TrainingBooksSection />

    <StatisticsGraph />
  </main>
);

export default Training;

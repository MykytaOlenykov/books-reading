import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { Scoreboard } from "components/Scoreboard";

const Training: React.FC = () => (
  <main>
    <section>
      <HiddenComponent>
        <h1>Сторінка тренування</h1>
      </HiddenComponent>
    </section>

    <Scoreboard />
  </main>
);

export default Training;

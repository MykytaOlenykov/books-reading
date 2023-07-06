import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { Scoreboard } from "components/Scoreboard";
import { TrainingBooksSection } from "components/TrainingBooksSection";
import { StatisticsChart } from "components/StatisticsChart";
import { RedirectBtn } from "components/RedirectBtn";
import { BookSelectSection } from "components/BookSelectSection";
import { useResizeScreen } from "hooks";
import * as S from "./Training.styled";

const Training: React.FC = () => {
  const { isMobile, isDesktop } = useResizeScreen();

  return (
    <S.Main>
      <S.Container>
        <div>
          <section>
            <HiddenComponent>
              <h1>Сторінка тренування</h1>
            </HiddenComponent>
          </section>

          {!isDesktop && <Scoreboard />}

          {isMobile ? (
            <RedirectBtn redirectTo="select-book" />
          ) : (
            <BookSelectSection />
          )}

          <TrainingBooksSection />

          <StatisticsChart />
        </div>

        {isDesktop && (
          <S.Aside>
            <Scoreboard />
          </S.Aside>
        )}
      </S.Container>
    </S.Main>
  );
};

export default Training;

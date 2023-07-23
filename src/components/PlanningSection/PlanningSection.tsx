import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { Sidebar } from "components/Sidebar";
import { Scoreboard } from "components/Scoreboard";
import { BooksList } from "components/BooksList";
import { StatisticsChart } from "components/StatisticsChart";
import { RedirectBtn } from "components/RedirectBtn";
import { BookSelectSection } from "components/BookSelectSection";
import { StartTrainingButton } from "components/StartTrainingButton";
import { deleteBook } from "redux/planning/slice";
import { selectBooks } from "redux/planning/selectors";
import { useAppDispatch, useResizeScreen, useAppSelector } from "hooks";
import { bookStatuses } from "constants/";
import * as S from "./PlanningSection.styled";

export const PlanningSection: React.FC = () => {
  const { isMobile, isDesktop } = useResizeScreen();
  const books = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();

  const handleDeleteBook = (bookId: string): void => {
    dispatch(deleteBook(bookId));
  };

  return (
    <S.Container>
      <div style={{ width: "100%" }}>
        <HiddenComponent>
          <h1>Сторінка планування тренування</h1>
        </HiddenComponent>

        {!isDesktop && <Scoreboard />}

        {isMobile ? (
          <RedirectBtn redirectTo="select-book" />
        ) : (
          <BookSelectSection />
        )}

        <BooksList
          status={bookStatuses.planning}
          books={books}
          isPlaceholder
          onDeleteBook={handleDeleteBook}
        />

        {!!books.length && <StartTrainingButton />}

        <StatisticsChart />
      </div>

      {isDesktop && (
        <Sidebar>
          <Scoreboard />
        </Sidebar>
      )}
    </S.Container>
  );
};

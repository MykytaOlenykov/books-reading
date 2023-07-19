import React, { useMemo } from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { TrainingSidebar } from "components/TrainingSidebar";
import { Scoreboard } from "components/Scoreboard";
import { BooksList } from "components/BooksList";
import { StatisticsChart } from "components/StatisticsChart";
import { RedirectBtn } from "components/RedirectBtn";
import { BookSelectSection } from "components/BookSelectSection";
import { StartTrainingButton } from "components/StartTrainingButton";
import { deleteBook } from "redux/planning/slice";
import { useAppDispatch, useBooks, usePlanning, useResizeScreen } from "hooks";
import { IBook } from "types";
import * as S from "./Training.styled";

const Training: React.FC = () => {
  const { isMobile, isDesktop } = useResizeScreen();
  const { goingToRead, currentlyReading } = useBooks();
  const { books } = usePlanning();
  const dispatch = useAppDispatch();

  const visibledBooks = useMemo<IBook[]>(
    () =>
      [...goingToRead, ...currentlyReading].filter((book) =>
        books.includes(book._id)
      ),
    [goingToRead, currentlyReading, books]
  );

  const handleDeleteBook = (bookId: string): void => {
    dispatch(deleteBook(bookId));
  };

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

          <BooksList
            status="training"
            books={visibledBooks}
            isPlaceholder
            onDeleteBook={handleDeleteBook}
          />

          {visibledBooks.length !== 0 && <StartTrainingButton />}

          <StatisticsChart />
        </div>

        {isDesktop && <TrainingSidebar />}
      </S.Container>
    </S.Main>
  );
};

export default Training;

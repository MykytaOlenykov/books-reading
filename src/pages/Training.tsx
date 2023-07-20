import React, { useMemo } from "react";
import { TrainingContainer } from "components/TrainingContainer";
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
    <TrainingContainer>
      <div>
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

        {!!visibledBooks.length && <StartTrainingButton />}

        <StatisticsChart />
      </div>

      {isDesktop && <TrainingSidebar />}
    </TrainingContainer>
  );
};

export default Training;

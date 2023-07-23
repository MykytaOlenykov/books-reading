import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { PrimaryContainer } from "components/Common.styled";
import { BookAddSection } from "components/BookAddSection";
import { BooksList } from "components/BooksList";
import { RedirectBtn } from "components/RedirectBtn";
import { EmptyBooksNotification } from "components/EmptyBooksNotification";
import { deleteBook } from "redux/books/operations";
import {
  selectCurrentlyReading,
  selectFinishedReading,
  selectGoingToRead,
  selectIsDeleting,
  selectIsFirstVisit,
} from "redux/books/selectors";
import { useResizeScreen, useAppDispatch, useAppSelector } from "hooks";
import { bookStatuses } from "constants/";

const Library: React.FC = () => {
  const { isMobile } = useResizeScreen();
  const goingToRead = useAppSelector(selectGoingToRead);
  const currentlyReading = useAppSelector(selectCurrentlyReading);
  const finishedReading = useAppSelector(selectFinishedReading);
  const isFirstVisit = useAppSelector(selectIsFirstVisit);
  const isDeleting = useAppSelector(selectIsDeleting);
  const dispatch = useAppDispatch();

  const handleDeleteBook = (bookId: string): void => {
    dispatch(deleteBook(bookId));
  };

  return (
    <PrimaryContainer>
      <HiddenComponent>
        <h1>Бібліотека книг</h1>
      </HiddenComponent>

      {isMobile && isFirstVisit && <EmptyBooksNotification />}

      {isMobile ? <RedirectBtn redirectTo="add-book" /> : <BookAddSection />}

      {!!finishedReading.length && (
        <BooksList
          title="Прочитано"
          status={bookStatuses.finishedReading}
          books={finishedReading}
        />
      )}

      {!!currentlyReading.length && (
        <BooksList
          title="Читаю"
          status={bookStatuses.currentlyReading}
          books={currentlyReading}
        />
      )}

      {!!goingToRead.length && (
        <BooksList
          title="Маю намір прочитати"
          status={bookStatuses.goingToRead}
          books={goingToRead}
          onDeleteBook={handleDeleteBook}
          isDeleting={isDeleting}
        />
      )}
    </PrimaryContainer>
  );
};

export default Library;

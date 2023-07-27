import React, { useState } from "react";
import { Checkbox } from "components/Checkbox";
import { BookTitle } from "components/BookTitle";
import { BookData } from "components/BookData";
import { selectBooks, selectFinishedBooks } from "redux/planning/selectors";
import { useAppSelector } from "hooks";
import { bookStatuses } from "constants/";
import { IBook, IBookStatus } from "types";
import * as S from "./BookCard.styled";
import { Modal } from "components/Modal";
import { BookReviewForm } from "components/BookReviewForm";
import { BookReview } from "components/BookReview";

interface IProps {
  book: IBook;
  status: IBookStatus;
  isDeleting?: string[] | undefined;
  onDeleteBook?: (bookId: string) => void;
}

export const BookCard: React.FC<IProps> = ({
  book,
  status,
  isDeleting = [],
  onDeleteBook,
}) => {
  const {
    _id,
    title,
    author,
    publishYear,
    pagesTotal,
    pagesFinished,
    rating,
    feedback,
  } = book;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const books = useAppSelector(selectBooks);
  const finishedBooks = useAppSelector(selectFinishedBooks);

  const isShowDeleteBtn =
    status === bookStatuses.goingToRead
      ? !books.some((book) => book._id === _id)
      : status === bookStatuses.planning;

  const isDisabled = isDeleting.includes(_id);

  const bookHasReview =
    typeof rating === "number" && typeof feedback === "string";

  const handleDeleteBook = (): void => {
    onDeleteBook?.(_id);
  };

  const handleCloseModal = (): void => {
    setIsOpenModal(false);
  };

  const handleShowModal = (): void => {
    setIsOpenModal(true);
  };

  return (
    <S.Card className={status}>
      <S.BookIcon />

      {status === bookStatuses.training && (
        <Checkbox checked={finishedBooks.includes(_id)} />
      )}

      <BookTitle status={status} title={title} />

      <BookData
        status={status}
        author={author}
        publishYear={publishYear}
        pagesTotal={pagesTotal}
        pagesFinished={pagesFinished}
        rating={rating}
      />

      {isShowDeleteBtn && (
        <S.DeleteButton
          type="button"
          onClick={handleDeleteBook}
          disabled={isDisabled}
        >
          <S.BtnIcon />
        </S.DeleteButton>
      )}

      {status === bookStatuses.finishedReading && (
        <S.ReviewButton type="button" onClick={handleShowModal}>
          Резюме
        </S.ReviewButton>
      )}

      {isOpenModal && (
        <Modal onCloseModal={handleCloseModal}>
          {bookHasReview ? (
            <BookReview
              rating={rating}
              feedback={feedback}
              onCloseModal={handleCloseModal}
            />
          ) : (
            <BookReviewForm bookId={_id} onCloseModal={handleCloseModal} />
          )}
        </Modal>
      )}
    </S.Card>
  );
};

import React from "react";
import * as S from "./BookReview.styled";

interface IProps {
  rating: number;
  feedback: string;
  onCloseModal: () => void;
}

const message = "Ви не залишили резюме до цієї книги.";

export const BookReview: React.FC<IProps> = ({
  rating,
  feedback,
  onCloseModal,
}) => (
  <S.Container>
    <S.Text>Обрати рейтинг книги</S.Text>

    <S.Rating>
      {[1, 2, 3, 4, 5].map((idx) => (
        <S.IconThumb key={idx}>
          <S.Icon $isSelected={rating >= idx} />
        </S.IconThumb>
      ))}
    </S.Rating>

    <S.Text>Резюме</S.Text>

    {feedback.length ? (
      <S.Feedback>{feedback}</S.Feedback>
    ) : (
      <S.Info>{message}</S.Info>
    )}

    <S.Button type="button" onClick={onCloseModal}>
      Назад
    </S.Button>
  </S.Container>
);

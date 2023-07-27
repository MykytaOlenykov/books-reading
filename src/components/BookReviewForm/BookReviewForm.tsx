import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookReviewSchema } from "schemas";
import { useAppDispatch } from "hooks";
import * as S from "./BookReviewForm.styled";
import { addBookReview } from "redux/books/operations";

interface IProps {
  bookId: string;
  onCloseModal: () => void;
}

const initialValues = {
  rating: undefined,
  feedback: "",
};

type FormData = {
  rating: number;
  feedback: string;
};

export const BookReviewForm: React.FC<IProps> = ({ bookId, onCloseModal }) => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(bookReviewSchema),
  });
  const [isAdding, setIsAdding] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsAdding(true);
    await dispatch(addBookReview({ ...data, bookId }));
    setIsAdding(false);
  };

  return (
    <S.Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <S.Text>Обрати рейтинг книги</S.Text>

      <S.Rating>
        {[1, 2, 3, 4, 5].map((idx) => (
          <li key={idx}>
            <S.RatingLabel>
              <S.RadioBtn {...register("rating")} type="radio" value={idx} />
              <S.Icon
                $isActive={!!watch("rating")}
                $isSelected={watch("rating") >= idx}
              />
            </S.RatingLabel>
          </li>
        ))}
      </S.Rating>
      {errors.rating && <S.ErrorText>{errors.rating?.message}</S.ErrorText>}

      <S.Label>
        <S.Text>Резюме</S.Text>
        <S.Counter $isError={watch("feedback").trim().length > 3000}>
          {watch("feedback").trim().length}/3000
        </S.Counter>

        <S.TextareaContainer>
          <S.Textarea {...register("feedback")} placeholder="..." />
        </S.TextareaContainer>

        {errors.feedback && (
          <S.ErrorText>{errors.feedback?.message}</S.ErrorText>
        )}
      </S.Label>

      <S.BtnContainer>
        <S.Button type="button" onClick={onCloseModal}>
          Назад
        </S.Button>
        <S.SubmitButton type="submit" disabled={isAdding}>
          Зберегти
        </S.SubmitButton>
      </S.BtnContainer>
    </S.Form>
  );
};

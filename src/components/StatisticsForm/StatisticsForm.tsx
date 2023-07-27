import React, { useMemo } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerLocale } from "react-datepicker";
import Select from "react-select";
import { selectBooks } from "redux/planning/selectors";
import { addStatistic } from "redux/statistics/operations";
import { selectIsAdding } from "redux/statistics/selectors";
import { useAppDispatch, useAppSelector } from "hooks";
import { statisticsSchema } from "schemas";
import { IBookOption } from "types";
import * as S from "./StatisticsForm.styled";
import uk from "date-fns/locale/uk";

registerLocale("uk", uk);

const initialValues = {
  book: "",
  pages: undefined,
};

type FormData = {
  book: string;
  pages: number;
};

export const StatisticsForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    watch,
    register,
    setError,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(statisticsSchema),
  });
  const books = useAppSelector(selectBooks);
  const isAdding = useAppSelector(selectIsAdding);
  const dispatch = useAppDispatch();

  const options = useMemo<IBookOption[]>(
    () =>
      books
        .filter(({ pagesTotal, pagesFinished }) => pagesTotal !== pagesFinished)
        .map((book) => ({
          value: book._id,
          label: `Назва книги: ${book.title}\nАвтор: ${book.author}`,
        })),
    [books]
  );

  const selectedOption: IBookOption | null = (() => {
    const value = watch("book");

    const option = options.find((option) => {
      return option.value === value;
    });

    const normalizedLabel =
      option?.label.replace("Назва книги: ", "").split("\n")[0] ?? "";

    const newOption: IBookOption = {
      label: normalizedLabel,
      value: option?.value ?? "",
    };

    return option ? newOption : null;
  })();

  const onSubmit: SubmitHandler<FormData> = ({ book: bookId, pages }) => {
    const book = books.find(({ _id }) => _id === bookId);

    const pagesFinished = book?.pagesFinished ?? 0;
    const pagesTotal = book?.pagesTotal ?? 0;

    if (pagesFinished + pages > pagesTotal) {
      setError("pages", {
        message: `Максимальна кількість сторінок, яку ви можете обрати для даної книги ${
          pagesTotal - pagesFinished
        }`,
      });
      return;
    }

    const data = {
      book: bookId,
      pagesRead: pages,
    };

    dispatch(addStatistic(data));
    reset();
  };

  return (
    <S.Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <S.Title>Результати</S.Title>

      <S.InputContainer>
        <S.Text>Кількість сторінок</S.Text>

        <S.Input {...register("pages")} type="number" placeholder="..." />

        {errors.pages && <S.ErrorText>{errors.pages?.message}</S.ErrorText>}
      </S.InputContainer>

      <Controller
        control={control}
        name="book"
        render={({ field: { onChange, ref } }) => (
          <S.SelectContainer>
            <S.Text>Книга</S.Text>

            <Select
              ref={ref}
              classNamePrefix="select"
              onChange={(selectedOption) => onChange(selectedOption?.value)}
              options={options}
              value={selectedOption}
              isClearable
              placeholder="..."
              noOptionsMessage={() => "Немає доступних книг"}
            />

            {errors.book && <S.ErrorText>{errors.book?.message}</S.ErrorText>}
          </S.SelectContainer>
        )}
      />

      <S.Button type="submit" disabled={isAdding}>
        Додати результат
      </S.Button>
    </S.Form>
  );
};

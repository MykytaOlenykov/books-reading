import React, { useMemo } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useBooks } from "hooks";
import { selectBookSchema } from "schemas";
import { IBookOption } from "types";
import * as S from "./BookSelectForm.styled";

const initialValues = {
  book: "",
};

type FormData = {
  book: string;
};

export const BookSelectForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(selectBookSchema),
  });
  const { goingToRead } = useBooks();

  const options = useMemo<IBookOption[]>(
    () =>
      goingToRead.map((book) => ({
        value: book._id,
        label: book.title,
      })),
    [goingToRead]
  );

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <S.Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="book"
        render={({ field: { onChange, value, ref } }) => (
          <>
            <S.FormSelect
              ref={ref}
              classNamePrefix="select"
              onChange={onChange}
              options={options}
              value={options.find((c) => c.value === value)}
              isClearable
              placeholder="Обрати книги з бібліотеки"
              noOptionsMessage={() => "Немає доступних книг"}
            />

            {errors.book && <S.ErrorText>{errors.book?.message}</S.ErrorText>}
          </>
        )}
      />

      <S.Button type="submit" disabled={false}>
        Додати
      </S.Button>
    </S.Form>
  );
};

import React, { useMemo } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerLocale } from "react-datepicker";
import { CustomDatePicker } from "components/CustomDatePicker";
import { useBooks } from "hooks";
import { selectBookSchema } from "schemas";
import { IBookOption } from "types";
import * as S from "./BookSelectForm.styled";
import uk from "date-fns/locale/uk";

registerLocale("uk", uk);

const initialValues = {
  book: "",
  startDate: undefined,
  endDate: undefined,
};

type FormData = {
  book: string;
  startDate: Date;
  endDate: Date;
};

export const BookSelectForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    watch,
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
        name="startDate"
        render={({ field: { onChange, value } }) => (
          <S.InputContainer>
            <CustomDatePicker
              locale="uk"
              dateFormat="dd.MM.yyyy"
              onChange={onChange}
              selected={value}
              startDate={watch("startDate")}
              endDate={watch("endDate")}
              minDate={new Date()}
              selectsStart
              placeholderText="Початок"
            />

            {errors.startDate && (
              <S.ErrorText>{errors.startDate?.message}</S.ErrorText>
            )}
          </S.InputContainer>
        )}
      />
      <Controller
        control={control}
        name="endDate"
        render={({ field: { onChange, value } }) => (
          <S.InputContainer>
            <CustomDatePicker
              locale="uk"
              dateFormat="dd.MM.yyyy"
              onChange={onChange}
              selected={value}
              startDate={watch("startDate")}
              endDate={watch("endDate")}
              minDate={watch("startDate")}
              selectsEnd
              placeholderText="Завершення"
            />

            {errors.startDate && (
              <S.ErrorText>{errors.startDate?.message}</S.ErrorText>
            )}
          </S.InputContainer>
        )}
      />

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

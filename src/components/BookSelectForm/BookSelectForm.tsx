import React, { useMemo } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerLocale } from "react-datepicker";
import { CustomDatePicker } from "components/CustomDatePicker";
import { changeStartDate, changeEndDate, addBook } from "redux/planning/slice";
import { useBooks, usePlanning, useAppDispatch } from "hooks";
import { selectBookSchema } from "schemas";
import { MAX_DATE } from "constants/";
import { IBookOption } from "types";
import * as S from "./BookSelectForm.styled";
import uk from "date-fns/locale/uk";

registerLocale("uk", uk);

const initialValues = {
  book: "",
};

type FormData = {
  book: string;
};

export const BookSelectForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: initialValues,
    resolver: yupResolver(selectBookSchema),
  });
  const { goingToRead, currentlyReading } = useBooks();
  const { startDate, endDate, books } = usePlanning();
  const dispatch = useAppDispatch();

  const parsedStartDate = startDate ? new Date(startDate) : null;
  const parsedEndDate = endDate ? new Date(endDate) : null;
  const minDate = new Date();

  const options = useMemo<IBookOption[]>(
    () =>
      [...goingToRead, ...currentlyReading]
        .map((book) => ({
          value: book._id,
          label: `Назва книги: ${book.title}\nАвтор: ${book.author}`,
        }))
        .filter((option) => !books.includes(option.value)),
    [goingToRead, currentlyReading, books]
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

  const onSubmit: SubmitHandler<FormData> = ({ book }) => {
    dispatch(addBook(book));
    reset();
  };

  const handleChangeStartDate = (date: Date | null): void => {
    if (date && parsedEndDate && date > parsedEndDate) {
      dispatch(changeEndDate(null));
    }

    dispatch(changeStartDate(date?.toString() ?? null));
  };

  const handleChangeEndDate = (date: Date | null): void => {
    dispatch(changeEndDate(date?.toString() ?? null));
  };

  return (
    <S.FormContainer>
      <S.DatePickerContainer className="startDate">
        <CustomDatePicker
          locale="uk"
          dateFormat="dd.MM.yyyy"
          onChange={handleChangeStartDate}
          selected={parsedStartDate}
          startDate={parsedStartDate}
          endDate={parsedEndDate}
          minDate={minDate}
          maxDate={MAX_DATE}
          selectsStart
          placeholderText="Початок"
        />
      </S.DatePickerContainer>

      <S.DatePickerContainer>
        <CustomDatePicker
          locale="uk"
          dateFormat="dd.MM.yyyy"
          onChange={handleChangeEndDate}
          selected={parsedEndDate}
          startDate={parsedStartDate}
          endDate={parsedEndDate}
          minDate={parsedStartDate ?? minDate}
          maxDate={MAX_DATE}
          selectsEnd
          placeholderText="Завершення"
        />
      </S.DatePickerContainer>

      <S.Form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="book"
          render={({ field: { onChange, ref } }) => (
            <S.SelectContainer>
              <Select
                ref={ref}
                classNamePrefix="select"
                onChange={(selectedOption) => onChange(selectedOption?.value)}
                options={options}
                value={selectedOption}
                isClearable
                placeholder="Обрати книги з бібліотеки"
                noOptionsMessage={() => "Немає доступних книг"}
              />

              {errors.book && <S.ErrorText>{errors.book?.message}</S.ErrorText>}
            </S.SelectContainer>
          )}
        />

        <S.Button type="submit">Додати</S.Button>
      </S.Form>
    </S.FormContainer>
  );
};

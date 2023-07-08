import React from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import * as S from "./CustomDatePicker.styled";

export const CustomDatePicker: React.FC<ReactDatePickerProps> = (props) => {
  return (
    <S.Container>
      <S.Icon />
      <DatePicker {...props} />
    </S.Container>
  );
};

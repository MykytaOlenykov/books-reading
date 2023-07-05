import React from "react";
import DatePicker from "react-datepicker";
import * as S from "./CustomDatePicker.styled";

export const CustomDatePicker: React.FC<any> = (props) => {
  return (
    <S.Container>
      <S.Icon />
      <DatePicker {...props} />
    </S.Container>
  );
};

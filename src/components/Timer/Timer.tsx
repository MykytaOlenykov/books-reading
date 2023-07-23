import React from "react";
import { useResizeScreen } from "hooks";
import { ITime } from "types";
import * as S from "./Timer.styled";

interface IProps {
  time: ITime;
  title?: string;
}

export const Timer: React.FC<IProps> = ({ time, title }) => {
  const { isMobile } = useResizeScreen();

  const { days, hours, minutes, seconds } = time;

  const isLongValue = isMobile && days.toString().split("").length > 5;

  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}
      <S.TimeContainer>
        {isLongValue && (
          <div>
            <S.Value>{days}</S.Value>
            <S.Descr>дн</S.Descr>
          </div>
        )}

        <S.List>
          {!isLongValue && (
            <>
              <div>
                <S.Value>{days}</S.Value>
                <S.Descr>дн</S.Descr>
              </div>

              <S.Separator>:</S.Separator>
            </>
          )}

          <div>
            <S.Value>{hours}</S.Value>
            <S.Descr>год</S.Descr>
          </div>

          <S.Separator>:</S.Separator>

          <div>
            <S.Value>{minutes}</S.Value>
            <S.Descr>хв</S.Descr>
          </div>

          <S.Separator>:</S.Separator>

          <div>
            <S.Value>{seconds}</S.Value>
            <S.Descr>сек</S.Descr>
          </div>
        </S.List>
      </S.TimeContainer>
    </S.Container>
  );
};

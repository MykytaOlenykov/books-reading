import React from "react";
import * as S from "./Tutorial.styled";

interface IProps {
  onCloseModal?: () => void;
}

export const Tutorial: React.FC<IProps> = ({ onCloseModal }) => (
  <S.Container>
    <S.List>
      <S.Item>
        <S.PrimaryTitle>Крок 1.</S.PrimaryTitle>

        <S.Thumb>
          <S.BookIcon />

          <S.TextBox>
            <S.Title>Створіть особисту бібліотеку</S.Title>

            <S.Thumb className="sg">
              <S.ArrowIcon />

              <S.Text>Додайте до неї книжки, які маєте намір прочитати.</S.Text>
            </S.Thumb>
          </S.TextBox>
        </S.Thumb>
      </S.Item>

      <S.Item>
        <S.PrimaryTitle>Крок 2.</S.PrimaryTitle>

        <S.Thumb>
          <S.FlagIcon />

          <S.TextBox>
            <S.Title>Сформуйте своє перше тренування</S.Title>

            <S.Thumb className="sg">
              <S.ArrowIcon />

              <S.Text>
                Визначте ціль, оберіть період, розпочинайте тренування.
              </S.Text>
            </S.Thumb>
          </S.TextBox>
        </S.Thumb>
      </S.Item>
    </S.List>

    <S.Button onClick={onCloseModal} type="button">
      Ok
    </S.Button>
  </S.Container>
);

import React from "react";
import * as S from "./InfoSection.styled";

export const InfoSection: React.FC = () => (
  <S.Section>
    <S.Container>
      <S.SectionTitle>Books Reading</S.SectionTitle>

      <S.Title>Допоможе вам</S.Title>

      <S.List className="mb--s">
        <S.Item>
          <S.Icon />
          <S.Text>Швидше сформулювати свою ціль і розпочати читати</S.Text>
        </S.Item>
        <S.Item>
          <S.Icon />
          <S.Text>Пропорційно розподілити навантаження на кожний день</S.Text>
        </S.Item>
        <S.Item>
          <S.Icon />
          <S.Text>Відстежувати особистий успіх</S.Text>
        </S.Item>
      </S.List>

      <S.Title>Також ви зможете</S.Title>

      <S.List className="mb--b">
        <S.Item>
          <S.Icon />
          <S.Text>Формувати особисту думку незалежну від інших</S.Text>
        </S.Item>
        <S.Item>
          <S.Icon />
          <S.Text>
            Підвищити свої професійні якості опираючись на нові знання
          </S.Text>
        </S.Item>
        <S.Item>
          <S.Icon />
          <S.Text>Стати цікавим співрозмовником</S.Text>
        </S.Item>
      </S.List>
    </S.Container>

    <S.BtnContainer>
      <S.SecondaryBtn to="/login">Увійти</S.SecondaryBtn>
      <S.PrimaryBtn href="#">Реєстрація</S.PrimaryBtn>
    </S.BtnContainer>
  </S.Section>
);

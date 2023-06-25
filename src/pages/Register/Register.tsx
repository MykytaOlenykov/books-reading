import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { RegisterForm } from "components/AuthForms";
import { InfoSection } from "components/InfoSection";
import * as S from "./Register.styled";

const Register: React.FC = () => (
  <S.Main>
    <S.Section>
      <S.Container>
        <HiddenComponent>
          <h1>Сторінка реєстрації</h1>
        </HiddenComponent>

        <RegisterForm />
      </S.Container>
    </S.Section>

    <InfoSection />
  </S.Main>
);

export default Register;

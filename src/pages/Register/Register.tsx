import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { RegisterForm } from "components/AuthForms";
import * as S from "./Register.styled";

const Register: React.FC = () => (
  <main>
    <S.Section>
      <S.Container>
        <HiddenComponent>
          <h1>Сторінка реєстрації</h1>
        </HiddenComponent>

        <RegisterForm />
      </S.Container>
    </S.Section>
  </main>
);

export default Register;

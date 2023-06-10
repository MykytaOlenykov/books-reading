import React from "react";
import { Container } from "components/Container";
import { HiddenComponent } from "components/HiddenComponent";
import { RegisterForm } from "components/RegisterForm";
import * as S from "./Register.styled";

const Register: React.FC = () => (
  <main>
    <S.Section>
      <Container>
        <HiddenComponent>
          <h1>Сторінка реєстрації</h1>
        </HiddenComponent>

        <RegisterForm />
      </Container>
    </S.Section>
  </main>
);

export default Register;

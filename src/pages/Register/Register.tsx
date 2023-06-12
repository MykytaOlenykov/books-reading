import React from "react";
import { HiddenComponent } from "components/HiddenComponent";
import { RegisterForm } from "components/AuthForms";
import { InfoSection } from "components/InfoSection";
import { PrimaryContainer } from "components/Common.styled";
import * as S from "./Register.styled";

const Register: React.FC = () => (
  <S.Main>
    <S.Section>
      <PrimaryContainer>
        <HiddenComponent>
          <h1>Сторінка реєстрації</h1>
        </HiddenComponent>

        <RegisterForm />
      </PrimaryContainer>
    </S.Section>

    <InfoSection />
  </S.Main>
);

export default Register;

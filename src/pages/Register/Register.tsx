import React from "react";
import { AuthSection } from "components/AuthSection";
import { RegisterForm } from "components/AuthForms";
import { InfoSection } from "components/InfoSection";
import * as S from "./Register.styled";

const Register: React.FC = () => (
  <S.Main>
    <AuthSection title="Сторінка реєстрації">
      <RegisterForm />
    </AuthSection>

    <InfoSection />
  </S.Main>
);

export default Register;

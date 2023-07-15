import React from "react";
import { AuthSection } from "components/AuthSection";
import { RegisterForm } from "components/AuthForms";
import { InfoSection } from "components/InfoSection";

const Register: React.FC = () => (
  <main>
    <AuthSection form={RegisterForm} title="Сторінка реєстрації">
      <InfoSection />
    </AuthSection>
  </main>
);

export default Register;

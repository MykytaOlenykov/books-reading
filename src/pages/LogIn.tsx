import React from "react";
import { AuthSection } from "components/AuthSection";
import { LogInForm } from "components/AuthForms";
import { QuoteCard } from "components/QuoteCard";

const LogIn: React.FC = () => (
  <main>
    <AuthSection form={LogInForm} title="Сторінка входу до профілю">
      <QuoteCard />
    </AuthSection>
  </main>
);

export default LogIn;

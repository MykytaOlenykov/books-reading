import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";

const HomePage = React.lazy(() => import("pages/Home"));

const RegisterPage = React.lazy(() => import("pages/Register/Register"));

const LogInPage = React.lazy(() => import("pages/LogIn/LogIn"));

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LogInPage />} />
      </Route>
    </Routes>
  );
};

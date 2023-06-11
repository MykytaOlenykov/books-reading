import React, { lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "components/Layout";

const RegisterPage = lazy(() => import("pages/Register/Register"));
const LogInPage = lazy(() => import("pages/LogIn/LogIn"));

const HomePage = () => (
  <div>
    Home Page <Link to="/register">register</Link>
  </div>
);

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

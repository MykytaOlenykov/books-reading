import React, { lazy } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "components/Layout";

const RegisterPage = lazy(() => import("pages/Register/Register"));
const LogInPage = lazy(() => import("pages/LogIn/LogIn"));

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Link to="/register">register</Link>} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LogInPage />} />
      </Route>
    </Routes>
  );
};

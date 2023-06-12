import React, { lazy } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Layout } from "components/Layout";

// const RegisterPage = lazy(() => import("pages/Register/Register"));
// const LogInPage = lazy(() => import("pages/LogIn/LogIn"));

const HomePage = () => (
  <div>
    <div>Home page</div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/register">register</Link>
      <Link to="/login">login</Link>
    </header>
  </div>
);

const RegisterPage = () => <div>Register page</div>;

const LogInPage = () => <div>LogIn page</div>;

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

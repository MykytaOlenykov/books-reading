import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "components/Layout";
import Register from "pages/Register/Register";
import LogIn from "pages/LogIn/LogIn";

// const RegisterPage = lazy(() => import("pages/Register/Register"));
// const LogInPage = lazy(() => import("pages/LogIn/LogIn"));

const HomePage = () => (
  <div>
    <div>Home page</div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </header>
  </div>
);

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LogIn />} />
      </Route>
    </Routes>
  );
};

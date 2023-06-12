import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";
import Home from "pages/Home";
import Register from "pages/Register/Register";
import LogIn from "pages/LogIn/LogIn";

// const HomePage = React.lazy(() => import("pages/Home"));

// const RegisterPage = React.lazy(() => import("pages/Register/Register"));

// const LogInPage = React.lazy(() => import("pages/LogIn/LogIn"));

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<LogIn />} />
      </Route>
    </Routes>
  );
};

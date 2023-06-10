import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";

const RegisterPage = lazy(() => import("pages/Register/Register"));

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home page</p>} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

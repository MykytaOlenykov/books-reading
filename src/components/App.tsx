import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";
import { PrivateRoute } from "components/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute";

const RegisterPage = React.lazy(() => import("pages/Register/Register"));

const LogInPage = React.lazy(() => import("pages/LogIn/LogIn"));

const LibraryPage = React.lazy(() => import("pages/Library/Library"));

const TrainingPage = React.lazy(() => import("pages/Training/Training"));

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute component={LibraryPage} redirectTo="/register" />
          }
        />
        <Route
          path="training"
          element={
            <PrivateRoute component={TrainingPage} redirectTo="/register" />
          }
        />
        <Route
          path="register"
          element={<RestrictedRoute component={RegisterPage} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={LogInPage} />}
        />
      </Route>
    </Routes>
  );
};

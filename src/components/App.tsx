import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "components/Layout";
import { PrivateRoute } from "components/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute";
import { BookAddSection } from "components/BookAddSection";
import { BookSelectSection } from "components/BookSelectSection";
import { PageLoader } from "components/Loaders";
import { NotFound } from "./NotFound";
import { useAppDispatch, useAuth } from "hooks";
import { refreshUser } from "redux/auth/operations";

const RegisterPage = React.lazy(() => import("pages/Register"));

const LogInPage = React.lazy(() => import("pages/LogIn"));

const LibraryPage = React.lazy(() => import("pages/Library"));

const TrainingPage = React.lazy(() => import("pages/Training"));

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/library" />} />
        <Route
          path="library"
          element={
            <PrivateRoute component={LibraryPage} redirectTo="/register" />
          }
        />
        <Route
          path="library/add-book"
          element={
            <PrivateRoute component={BookAddSection} redirectTo="/register" />
          }
        />
        <Route
          path="training"
          element={
            <PrivateRoute component={TrainingPage} redirectTo="/register" />
          }
        />
        <Route
          path="training/select-book"
          element={
            <PrivateRoute
              component={BookSelectSection}
              redirectTo="/register"
            />
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  ) : (
    <PageLoader />
  );
};

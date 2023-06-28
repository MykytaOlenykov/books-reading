import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth, useBooks } from "hooks";

interface IProps {
  component: React.LazyExoticComponent<React.FC>;
  redirectTo?: string;
}

export const RestrictedRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedIn } = useAuth();
  const { isFirstVisit } = useBooks();

  if (isFirstVisit) {
    redirectTo = "/library/add-book";
  }

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

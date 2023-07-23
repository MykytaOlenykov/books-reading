import React from "react";
import { Navigate } from "react-router-dom";
import { selectIsFirstVisit } from "redux/books/selectors";
import { useAuth, useAppSelector } from "hooks";

interface IProps {
  component: React.LazyExoticComponent<React.FC>;
  redirectTo?: string;
}

export const RestrictedRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedIn } = useAuth();
  const isFirstVisit = useAppSelector(selectIsFirstVisit);

  if (isFirstVisit) {
    redirectTo = "/library/add-book";
  }

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

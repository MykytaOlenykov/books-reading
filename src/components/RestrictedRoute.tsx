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
  const { goingToRead, currentlyReading, finishedReading } = useBooks();
  const isFirstVisit =
    !goingToRead.length && !currentlyReading.length && !finishedReading.length;

  if (isFirstVisit) {
    redirectTo = "/add-book";
  }

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

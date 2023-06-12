import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

interface IProps {
  component: React.LazyExoticComponent<React.FC>;
  redirectTo?: string;
}

export const RestrictedRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = "/register",
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

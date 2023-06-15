import React from "react";
import { Navigate } from "react-router-dom";
import { useUserData } from "hooks";

interface IProps {
  component: React.LazyExoticComponent<React.FC>;
  redirectTo?: string;
}

export const RestrictedRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const { isLoggedIn } = useUserData();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

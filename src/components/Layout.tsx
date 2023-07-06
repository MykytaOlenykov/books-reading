import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppBar } from "components/AppBar";
import { PageLoader } from "components/Loaders";
import { GlobalStyle } from "components/GlobalStyle";

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  const isSecondaryBg = pathname === "/register" || pathname === "/login";

  return (
    <>
      <GlobalStyle isSecondaryBg={isSecondaryBg} />

      <Toaster position="top-center" reverseOrder={false} />

      <AppBar />

      <React.Suspense fallback={<PageLoader />}>
        <Outlet />
      </React.Suspense>
    </>
  );
};

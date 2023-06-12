import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppBar } from "components/AppBar";
import { PageLoader } from "components/Loaders";

export const Layout: React.FC = () => (
  <>
    <AppBar />

    <React.Suspense fallback={<PageLoader />}>
      <Outlet />
    </React.Suspense>

    <Toaster position="top-center" reverseOrder={false} />
  </>
);

import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppBar } from "components/AppBar";
import { PageLoader } from "components/Loaders";
import { HttpErrorCatcher } from "components/HttpErrorCatcher";
import { GlobalStyle } from "components/GlobalStyle";
import { clearIsRegistered } from "redux/auth/slice";
import { useAppDispatch, useAuth } from "hooks";

export const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const { userData, isRegistered } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isSecondaryBg = pathname === "/register" || pathname === "/login";

  useEffect(() => {
    if (isRegistered) {
      dispatch(clearIsRegistered());

      if (pathname === "/register") {
        navigate("/login", { state: { email: userData.email } });
      }
    }
  }, [userData, isRegistered, pathname, navigate, dispatch]);

  return (
    <>
      <GlobalStyle isSecondaryBg={isSecondaryBg} />

      <Toaster position="top-center" reverseOrder={false} />

      <HttpErrorCatcher />

      <AppBar />

      <main>
        <React.Suspense fallback={<PageLoader />}>
          <Outlet />
        </React.Suspense>
      </main>
    </>
  );
};

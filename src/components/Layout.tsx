import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppBar } from "components/AppBar";
import { PageLoader } from "components/Loaders";
import { HttpErrorCatcher } from "components/HttpErrorCatcher";
import { TimeoverNotification } from "./TimeoverNotification";
import { TrainingStartNotification } from "./TrainingStartNotification";
import { GlobalStyle } from "components/GlobalStyle";
import { selectUpdatedBook } from "redux/books/selectors";
import { clearIsRegistered } from "redux/auth/slice";
import { clearUpdatedBook } from "redux/books/slice";
import { useAppSelector, useAppDispatch, useAuth } from "hooks";

export const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const { userData, isRegistered } = useAuth();
  const updatedBook = useAppSelector(selectUpdatedBook);
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

  useEffect(() => {
    if (!updatedBook || pathname === "/training") {
      return;
    }

    dispatch(clearUpdatedBook());
  }, [updatedBook, dispatch, pathname]);

  return (
    <>
      <GlobalStyle isSecondaryBg={isSecondaryBg} />

      <Toaster position="top-center" reverseOrder={false} />

      <HttpErrorCatcher />

      <TimeoverNotification />
      <TrainingStartNotification />

      <AppBar />

      <main>
        <React.Suspense fallback={<PageLoader />}>
          <Outlet />
        </React.Suspense>
      </main>
    </>
  );
};

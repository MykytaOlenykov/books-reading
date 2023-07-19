import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { clearError as clearAuthError, endSession } from "redux/auth/slice";
import {
  clearError as clearBooksError,
  clearData as clearBooksData,
} from "redux/books/slice";
import { clearData as clearPlanningData } from "redux/planning/slice";
import { useAuth, useBooks, useAppDispatch } from "hooks";
import { onRemoveTokens } from "utils";
import { errorTypes } from "constants/";

export const HttpErrorCatcher: React.FC = () => {
  const { isError: isAuthError, error: authError } = useAuth();
  const { isError: isBooksError, error: booksError } = useBooks();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthError && authError.type !== errorTypes.refresh) {
      if (authError.type === errorTypes.endOfSession) {
        dispatch(endSession());
        onRemoveTokens();
      }

      toast.error(authError.message);
      dispatch(clearAuthError());
    }
  }, [dispatch, isAuthError, authError]);

  useEffect(() => {
    if (isBooksError) {
      if (booksError.type === errorTypes.endOfSession) {
        dispatch(endSession());
        dispatch(clearBooksData());
        dispatch(clearPlanningData());
        onRemoveTokens();
      }

      toast.error(booksError.message);
      dispatch(clearBooksError());
    }
  }, [dispatch, isBooksError, booksError]);

  return null;
};

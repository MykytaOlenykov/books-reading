import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { clearError as clearAuthError, endSession } from "redux/auth/slice";
import {
  clearError as clearBooksError,
  clearData as clearBooksData,
} from "redux/books/slice";
import { clearData as clearPlanningData } from "redux/planning/slice";
import { selectError, selectIsError } from "redux/books/selectors";
import { useAuth, useAppDispatch, useAppSelector } from "hooks";
import { onRemoveTokens } from "utils";
import { errorTypes } from "constants/";

export const HttpErrorCatcher: React.FC = () => {
  const { isError: isAuthError, error: authError } = useAuth();
  const isBooksError = useAppSelector(selectIsError);
  const booksError = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthError && authError && authError.type !== errorTypes.refresh) {
      if (authError.type === errorTypes.endOfSession) {
        dispatch(endSession());
        onRemoveTokens();
      }

      toast.error(authError.message);
      dispatch(clearAuthError());
    }
  }, [dispatch, isAuthError, authError]);

  useEffect(() => {
    if (isBooksError && booksError) {
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

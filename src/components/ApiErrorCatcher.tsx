import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { clearError as clearAuthError, endSession } from "redux/auth/slice";
import { clearError as clearBooksError } from "redux/books/slice";
import { useAuth, useBooks, useAppDispatch } from "hooks";
import { onRemoveTokens } from "utils";
import { errorAPIMessages, errorTypes } from "constants/";

export const ApiErrorCatcher: React.FC = () => {
  const { isError: isAuthError, error: authError } = useAuth();
  const { isError: isBooksError, error: booksError } = useBooks();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthError) {
      if (authError.type === errorTypes.endOfSession) {
        toast.error(errorAPIMessages.endOfSession);
        dispatch(clearBooksError());
        dispatch(endSession());
        onRemoveTokens();
        return;
      }

      if (authError.status === 409) {
        toast.error(errorAPIMessages[authError.status]);
        dispatch(clearAuthError());
        return;
      }

      if (authError.status === 403) {
        toast.error(errorAPIMessages[authError.status]);
        dispatch(clearAuthError());
        return;
      }

      toast.error(errorAPIMessages.common);
      dispatch(clearAuthError());
    }
  }, [dispatch, isAuthError, authError]);

  useEffect(() => {
    if (isBooksError) {
      if (booksError.type === errorTypes.endOfSession) {
        toast.error(errorAPIMessages.endOfSession);
        dispatch(clearBooksError());
        dispatch(endSession());
        onRemoveTokens();
        return;
      }

      if (booksError.type === errorTypes.addBook && booksError.status === 409) {
        toast.error(errorAPIMessages.books_409);
        dispatch(clearBooksError());
        return;
      }

      if (
        booksError.type === errorTypes.addBook ||
        booksError.type === errorTypes.deleteBook ||
        booksError.type === errorTypes.common
      ) {
        toast.error(errorAPIMessages.common);
        dispatch(clearBooksError());
        return;
      }
    }
  }, [dispatch, isBooksError, booksError]);

  return null;
};

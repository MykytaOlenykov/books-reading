import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { changeStatus } from "redux/planning/operations";
import { clearError as clearAuthError } from "redux/auth/slice";
import { clearError as clearBooksError } from "redux/books/slice";
import { clearError as clearPlanningError } from "redux/planning/slice";
import { clearError as clearStatisticsError } from "redux/statistics/slice";
import {
  selectError as selectBooksError,
  selectIsError as selectBooksIsError,
} from "redux/books/selectors";
import {
  selectError as selectPlanningError,
  selectIsError as selectPlanningIsError,
} from "redux/planning/selectors";
import {
  selectError as selectStatisticsError,
  selectIsError as selectStatisticsIsError,
} from "redux/statistics/selectors";
import { useAuth, useAppDispatch, useAppSelector } from "hooks";
import { onRemoveTokens } from "utils";
import { errorTypes, planningStatuses } from "constants/";

export const HttpErrorCatcher: React.FC = () => {
  const { isError: isAuthError, error: authError } = useAuth();
  const isBooksError = useAppSelector(selectBooksIsError);
  const booksError = useAppSelector(selectBooksError);
  const isPlanningError = useAppSelector(selectPlanningIsError);
  const planningError = useAppSelector(selectPlanningError);
  const isStatisticsError = useAppSelector(selectStatisticsIsError);
  const statisticsError = useAppSelector(selectStatisticsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthError && authError && authError.type !== errorTypes.refresh) {
      if (authError.type === errorTypes.endOfSession) {
        onRemoveTokens();
      }

      toast.error(authError.message);
      dispatch(clearAuthError());
    }
  }, [dispatch, isAuthError, authError]);

  useEffect(() => {
    if (isBooksError && booksError) {
      if (booksError.type === errorTypes.endOfSession) {
        onRemoveTokens();
      }

      toast.error(booksError.message);
      dispatch(clearBooksError());
    }
  }, [dispatch, isBooksError, booksError]);

  useEffect(() => {
    if (isPlanningError && planningError) {
      if (planningError.type === errorTypes.endOfSession) {
        onRemoveTokens();
      }

      toast.error(planningError.message);
      dispatch(clearPlanningError());
    }
  }, [dispatch, isPlanningError, planningError]);

  useEffect(() => {
    if (isStatisticsError && statisticsError) {
      if (statisticsError.type === errorTypes.endOfSession) {
        onRemoveTokens();
      }

      if (statisticsError.status === 409) {
        dispatch(changeStatus(planningStatuses.timeover));
      }

      if (statisticsError.status !== 409) {
        toast.error(statisticsError.message);
      }

      dispatch(clearStatisticsError());
    }
  }, [dispatch, isStatisticsError, statisticsError]);

  return null;
};

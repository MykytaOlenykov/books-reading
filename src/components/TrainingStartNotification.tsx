import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { differenceInSeconds } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import { changeStatus } from "redux/planning/operations";
import { selectStartDate, selectStatus } from "redux/planning/selectors";
import { useAppDispatch, useAppSelector } from "hooks";
import { planningStatuses } from "constants/";

const message = "Тренування почалося.";

export const TrainingStartNotification: React.FC = () => {
  const StartDate = useAppSelector(selectStartDate);
  const status = useAppSelector(selectStatus);
  const [isStopped, setIsStopped] = useState<boolean>(
    () => status !== planningStatuses.idle
  );
  const dispatch = useAppDispatch();

  const intervalId = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (!status || status !== planningStatuses.idle) {
      setIsStopped(true);
    }

    if (status === planningStatuses.idle) {
      setIsStopped(false);
    }
  }, [status]);

  useEffect(() => {
    if (isStopped) {
      return;
    }

    intervalId.current = setInterval(() => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const currentDateUtc = zonedTimeToUtc(new Date(), timeZone);
      const startDateUtc = zonedTimeToUtc(
        new Date(`${StartDate}T00:00:00`),
        timeZone
      );

      const difference = differenceInSeconds(startDateUtc, currentDateUtc);

      if (difference <= 0) {
        toast.success(message);
        dispatch(changeStatus(planningStatuses.active));
        setIsStopped(true);
        clearInterval(intervalId.current);
      }
    }, 30000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [StartDate, isStopped, dispatch]);

  return null;
};

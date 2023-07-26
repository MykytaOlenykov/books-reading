import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import { differenceInSeconds } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
import { changeStatus } from "redux/planning/operations";
import { selectEndDate, selectStatus } from "redux/planning/selectors";
import { useAppDispatch, useAppSelector } from "hooks";
import { planningStatuses } from "constants/";

const message = "Час тренування завершився.";

export const TimeoverNotification: React.FC = () => {
  const endDate = useAppSelector(selectEndDate);
  const status = useAppSelector(selectStatus);
  const [isStopped, setIsStopped] = useState<boolean>(
    () => status !== planningStatuses.active
  );
  const dispatch = useAppDispatch();

  const intervalId = useRef<NodeJS.Timer>();

  useEffect(() => {
    if (!status) {
      setIsStopped(true);
    }

    if (status === planningStatuses.active) {
      setIsStopped(false);
    }
  }, [status]);

  useEffect(() => {
    if (isStopped) {
      return;
    }

    intervalId.current = setInterval(() => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const startDateUtc = zonedTimeToUtc(new Date(), timeZone);
      const endDateUtc = zonedTimeToUtc(
        new Date(`${endDate}T00:00:00`),
        timeZone
      );

      const difference = differenceInSeconds(endDateUtc, startDateUtc);

      if (difference <= 0) {
        toast.success(message);
        dispatch(changeStatus(planningStatuses.timeover));
        setIsStopped(true);
        clearInterval(intervalId.current);
      }
    }, 30000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [endDate, isStopped, dispatch]);

  return null;
};

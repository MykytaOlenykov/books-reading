import React, { useEffect } from "react";
import { PlanningSection } from "components/PlanningSection";
import { PageLoader } from "components/Loaders";
import { getPlan } from "redux/planning/operations";
import { useAppDispatch, usePlanning } from "hooks";
import { TrainingSection } from "components/TrainingSection";

const Training: React.FC = () => {
  const { isLoading, isActive, isLoaded } = usePlanning();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoaded) {
      dispatch(getPlan());
    }
  }, [dispatch, isLoaded]);

  if (isLoading) {
    return <PageLoader />;
  }

  return isActive ? <TrainingSection /> : <PlanningSection />;
};

export default Training;

import React from "react";
import { PlanningSection } from "components/PlanningSection";
import { TrainingSection } from "components/TrainingSection";
import { selectIsActive } from "redux/planning/selectors";
import { useAppSelector } from "hooks";

const Training: React.FC = () => {
  const isActive = useAppSelector(selectIsActive);

  return isActive ? <TrainingSection /> : <PlanningSection />;
};

export default Training;

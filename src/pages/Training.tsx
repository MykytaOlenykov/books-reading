import React from "react";
import { PlanningSection } from "components/PlanningSection";
import { usePlanning } from "hooks";
import { TrainingSection } from "components/TrainingSection";

const Training: React.FC = () => {
  const { isActive } = usePlanning();

  return isActive ? <TrainingSection /> : <PlanningSection />;
};

export default Training;

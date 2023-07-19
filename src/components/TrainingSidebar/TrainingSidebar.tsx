import React from "react";
import { Scoreboard } from "components/Scoreboard";
import * as S from "./TrainingSidebar.styled";

export const TrainingSidebar: React.FC = () => (
  <S.Aside>
    <Scoreboard />
  </S.Aside>
);

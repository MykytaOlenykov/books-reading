import React from "react";
import * as S from "./Navigation.styled";

export const Navigation: React.FC = () => (
  <S.Nav>
    <S.List>
      <li>
        <S.Link to="/training">
          <S.LibraryPageIcon />
        </S.Link>
      </li>
      <li>
        <S.Link to="/library">
          <S.HomePageIcon />
        </S.Link>
      </li>
    </S.List>
  </S.Nav>
);

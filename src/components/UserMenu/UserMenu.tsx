import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { UserLabel } from "components/UserLabel";
import { useAppDispatch, useAuth } from "hooks";
import { logOut } from "redux/auth/operations";
import { clearError } from "redux/auth/slice";
import { errorAPIMessages } from "constants/";
import * as S from "./UserMenu.styled";

export const UserMenu: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, isError } = useAuth();

  useEffect(() => {
    if (isError) {
      toast.error(errorAPIMessages.common);
      dispatch(clearError());
    }
  }, [isError, dispatch]);

  const handleLogOut = (): void => {
    dispatch(logOut());
  };

  return (
    <S.Container>
      <UserLabel />
      <S.LogOutBtn onClick={handleLogOut} type="button" disabled={isLoading}>
        Вихід
      </S.LogOutBtn>
    </S.Container>
  );
};

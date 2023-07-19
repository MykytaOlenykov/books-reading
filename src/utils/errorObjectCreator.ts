import { isAxiosError } from "axios";
import { IError } from "types";
import { errorTypes } from "constants/";

interface IErrorData {
  error: unknown;
  type?: string | null;
  checkSessionEnd?: boolean;
}

export const errorObjectCreator = ({
  error,
  type = errorTypes.common,
  checkSessionEnd = false,
}: IErrorData): NonNullable<IError> => {
  if (isAxiosError(error)) {
    if (checkSessionEnd && error.response?.status === 401) {
      return {
        message: error.message,
        status: error.response?.status,
        type: errorTypes.endOfSession,
      };
    }

    return {
      message: error.message,
      status: error.response?.status,
      type,
    };
  }

  return {
    message: "Server Error",
    status: 500,
    type,
  };
};

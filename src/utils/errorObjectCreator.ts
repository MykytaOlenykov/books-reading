import { isAxiosError } from "axios";
import { IError } from "types";
import { errorTypes } from "constants/";

interface IErrorData {
  error: unknown;
  type?: string | null;
  isCheckSessionEnd?: boolean;
}

export const errorObjectCreator = ({
  error,
  type = errorTypes.common,
  isCheckSessionEnd = false,
}: IErrorData): NonNullable<IError> => {
  if (isAxiosError(error)) {
    if (isCheckSessionEnd && error.response?.status === 401) {
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

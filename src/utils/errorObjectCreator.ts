import { isAxiosError } from "axios";
import { IError } from "types";
import { errorAPIMessages, errorTypes } from "constants/";

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
  if (!isAxiosError(error)) {
    return {
      message: errorAPIMessages.common,
      status: 500,
      type,
    };
  }

  if (checkSessionEnd && error.response?.status === 401) {
    return {
      message: errorAPIMessages.endOfSession,
      status: error.response?.status,
      type: errorTypes.endOfSession,
    };
  }

  const errorKey = `${type}_${error.response?.status ?? ""}`;

  if (errorKey in errorAPIMessages) {
    return {
      message: errorAPIMessages[errorKey as keyof typeof errorAPIMessages],
      status: error.response?.status,
      type,
    };
  }

  return {
    message: errorAPIMessages.common,
    status: error.response?.status,
    type,
  };
};

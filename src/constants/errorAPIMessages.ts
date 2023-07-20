import { IErrorAPIMessages } from "types";

export const errorAPIMessages: Readonly<IErrorAPIMessages> = {
  logIn_403: "Неправильно введені дані користувача. Спробуйте ще раз.",
  register_409: "Користувач з такою електронною поштою вже існує.",
  addBook_409: "У вашій колекції вже є така книга.",
  common: "Щось пішло не так, перезавантажте сторінку або спробуйте пізніше.",
  endOfSession: "Час сеансу закінчився, будь ласка, увійдіть знову.",
};

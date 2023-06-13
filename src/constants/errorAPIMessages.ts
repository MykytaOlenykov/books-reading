interface IErrorAPIMessages {
  403: string;
  409: string;
  common: string;
}

export const errorAPIMessages: Readonly<IErrorAPIMessages> = {
  403: "Перевірте, чи правильно введені ваші адреса електронної пошти та пароль.",
  409: "Користувач з такою електронною поштою вже існує.",
  common: "Щось пішло не так. Спробуйте ще раз пізніше.",
};

interface IErrorAPIMessages {
  409: string;
  common: string;
}

export const errorAPIMessages: Readonly<IErrorAPIMessages> = {
  409: "Користувач з такою електронною поштою вже існує.",
  common: "Щось пішло не так. Спробуйте ще раз пізніше.",
};

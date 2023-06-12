interface IErrorFormMessages {
  name: Readonly<{
    minLength: string;
    maxLength: string;
    matches: string;
    required: string;
  }>;
  email: Readonly<{
    minLength: string;
    maxLength: string;
    matches: string;
    required: string;
  }>;
  password: Readonly<{
    minLength: string;
    maxLength: string;
    matches: string;
    required: string;
  }>;
  confirmPassword: Readonly<{
    test: string;
    required: string;
  }>;
}

export const errorFormMessages: Readonly<IErrorFormMessages> = {
  name: {
    minLength: "Ім'я повинно містити принаймні 2 символи.",
    maxLength: "Ім'я повинно містити не більше 255 символів.",
    matches: "Ім'я може містити тільки літери, апостроф, дефіс та пробіли.",
    required: "Поле імені є обов'язковим.",
  },
  email: {
    minLength: "Електронна пошта повинна містити принаймні 4 символи.",
    maxLength: "Електронна пошта повинна містити не більше 255 символів.",
    matches:
      "Будь ласка, введіть дійсну адресу електронної пошти. Дозволені лише літери, цифри, підкреслення, крапки, дефіси та символ @.",
    required: "Поле електронної пошти є обов'язковим.",
  },
  password: {
    minLength: "Пароль повинен містити принаймні 8 символів.",
    maxLength: "Пароль повинен містити не більше 255 символів.",
    matches:
      "Пароль повинен містити принаймні 8 символів і включати як мінімум одну малу літеру, одну велику літеру і одну цифру.",
    required: "Поле пароля є обов'язковим.",
  },
  confirmPassword: {
    test: "Паролі повинні збігатися.",
    required: "Це поле є обов'язковим.",
  },
};

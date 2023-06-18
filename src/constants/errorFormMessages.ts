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
  title: Readonly<{
    minLength: string;
    maxLength: string;
    required: string;
  }>;
  author: Readonly<{
    minLength: string;
    maxLength: string;
    required: string;
  }>;
  publishYear: Readonly<{
    integer: string;
    minValue: string;
    maxValue: string;
    required: string;
  }>;
  pagesTotal: Readonly<{
    integer: string;
    minValue: string;
    maxValue: string;
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
  title: {
    minLength: "Назва книги повинна містити принаймні 2 символи.",
    maxLength: "Назва книги повинна містити не більше ніж 255 символів.",
    required: "Назва книги є обов'язковим полем.",
  },
  author: {
    minLength: "Автор повинен містити принаймні 2 символи.",
    maxLength: "Автор повинен містити не більше ніж 255 символів.",
    required: "Автор є обов'язковим полем.",
  },
  publishYear: {
    integer: "Рік публікації повинен бути цілим числом.",
    minValue: "Рік публікації повинен бути більшим або дорівнювати 1000.",
    maxValue:
      "Рік публікації повинен бути меншим або дорівнювати поточному року.",
    required: "Рік публікації є обов'язковим полем.",
  },
  pagesTotal: {
    integer: "Загальна кількість сторінок повинна бути цілим числом.",
    minValue:
      "Загальна кількість сторінок повинна бути більшою або дорівнювати 1.",
    maxValue:
      "Загальна кількість сторінок повинна бути меншою або дорівнювати 5000.",
    required: "Загальна кількість сторінок є обов'язковим полем.",
  },
};

interface IErrorFormMessages {
  name: string;
  email: string;
  password: string;
}

export const errorFormMessages: Readonly<IErrorFormMessages> = {
  name: "Ім'я може містити тільки літери, апостроф, дефіс та пробіли.",
  email:
    "Будь ласка, введіть дійсну адресу електронної пошти. Дозволені лише літери, цифри, підкреслення, крапки, дефіси та символ @.",
  password:
    "Пароль повинен містити принаймні 8 символів і включати як мінімум одну малу літеру, одну велику літеру і одну цифру.",
};

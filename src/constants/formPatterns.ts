interface IFormPatterns {
  name: RegExp;
  email: RegExp;
  password: RegExp;
}

export const formPatterns: Readonly<IFormPatterns> = {
  name: /^(?:(?!^\s+$)[\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+((['-][\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+)([ ]?[\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+))*)?$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\s]{8,}$/,
};

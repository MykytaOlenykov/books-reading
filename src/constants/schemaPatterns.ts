import { ISchemaPatterns } from "types";

export const schemaPatterns: Readonly<ISchemaPatterns> = {
  name: /^(?:(?!^\s+$)[\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+((['-][\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+)([ ]?[\sa-zA-Zа-яА-ЯґҐєЄіІїЇ]+))*)?$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  publishYear: /^(?!0)\d{4}$/,
};

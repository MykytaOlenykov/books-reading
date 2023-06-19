export interface IErrorFormMessages {
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

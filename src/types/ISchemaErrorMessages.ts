export interface ISchemaErrorMessages {
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
    test: string;
    required: string;
  }>;
  pagesTotal: Readonly<{
    integer: string;
    minValue: string;
    maxValue: string;
    required: string;
  }>;
  book: Readonly<{
    required: string;
  }>;
  books: Readonly<{
    min: string;
    max: string;
    required: string;
  }>;
  startDate: Readonly<{
    test: string;
    required: string;
  }>;
  endDate: Readonly<{
    test: string;
    required: string;
  }>;
  statisticBook: Readonly<{
    required: string;
  }>;
  pages: Readonly<{
    min: string;
    integer: string;
    required: string;
  }>;
  rating: Readonly<{
    required: string;
  }>;
  feedback: Readonly<{
    max: string;
  }>;
}

import { $api } from "services";
import { errorObjectCreator, createAppAsyncThunk } from "utils";
import { errorTypes } from "constants/";
import { IBook, IFetchBooksResponse, IReviewRequest } from "types";

export const fetchBooks = async (): Promise<IFetchBooksResponse> => {
  const { data } = await $api.get<IFetchBooksResponse>("api/books");

  return data;
};

export const addBook = createAppAsyncThunk<
  IBook,
  Pick<IBook, "title" | "author" | "publishYear" | "pagesTotal">
>("books/addBook", async (data, { rejectWithValue }) => {
  try {
    const { data: newBook } = await $api.post<IBook>("api/books", data);

    return newBook;
  } catch (error) {
    return rejectWithValue(
      errorObjectCreator({
        error,
        type: errorTypes.addBook,
        checkSessionEnd: true,
      })
    );
  }
});

export const deleteBook = createAppAsyncThunk<string, string>(
  "books/deleteBook",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await $api.delete<Pick<IBook, "_id">>(`api/books/${id}`);

      return data._id;
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({
          error,
          type: errorTypes.deleteBook,
          checkSessionEnd: true,
        })
      );
    }
  }
);

export const addBookReview = createAppAsyncThunk<IBook, IReviewRequest>(
  "books/addBookReview",
  async ({ bookId, rating, feedback }, { rejectWithValue }) => {
    try {
      const { data: newData } = await $api.patch<IBook>(
        `api/books/${bookId}/review`,
        { rating, feedback }
      );

      return newData;
    } catch (error) {
      return rejectWithValue(
        errorObjectCreator({
          error,
          type: errorTypes.addBookReview,
          checkSessionEnd: true,
        })
      );
    }
  }
);

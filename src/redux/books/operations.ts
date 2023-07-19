import { $api } from "services";
import { errorObjectCreator, createAppAsyncThunk } from "utils";
import { errorTypes } from "constants/";
import { IBook, IFetchBooksResponse } from "types";

export const fetchBooks = async (): Promise<IFetchBooksResponse> => {
  const { data } = await $api.get<IFetchBooksResponse>("api/books");

  return data;
};

export const addBook = createAppAsyncThunk<
  IBook,
  Omit<IBook, "_id" | "pagesFinished">
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

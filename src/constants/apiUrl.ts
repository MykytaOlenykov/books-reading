// const GOIT_URL = "https://bookread-backend.goit.global";
const LOCAL_URL = "http://localhost:8000";
const MY_BACK = "https://books-reading-backend-ql7x.onrender.com";

export const API_URL =
  process.env.NODE_ENV === "development" ? LOCAL_URL : MY_BACK;

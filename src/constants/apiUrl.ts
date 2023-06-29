// const GOIT_URL = "https://bookread-backend.goit.global";
const LOCAL_URL = "http://localhost:8000";
const PROD_URL = "https://books-reading-backend-ql7x.onrender.com";

export const API_URL =
  process.env.NODE_ENV === "development" ? LOCAL_URL : PROD_URL;

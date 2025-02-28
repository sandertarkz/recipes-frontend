import axios from "axios";
import { Configuration, AuthApi, PostsApi, UsersApi } from "./api-client";
export * from "./api-client";
export * from "./query-keys";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_BASE_URL = "https://app.sandertar.com"; // TODO: figure out why env var doesn't work
console.log("Env variable", process.env.NEXT_PUBLIC_API_BASE_URL);

export const axiosApiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const authApi = new AuthApi(
  new Configuration(),
  undefined,
  axiosApiClient,
);

export const postsApi = new PostsApi(
  new Configuration(),
  undefined,
  axiosApiClient,
);

export const usersApi = new UsersApi(
  new Configuration(),
  undefined,
  axiosApiClient,
);

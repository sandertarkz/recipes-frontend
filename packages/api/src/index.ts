import { Configuration, AuthApi, PostsApi, UsersApi } from "./api-client";
export * from "./api-client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const authApi = new AuthApi(
  new Configuration({
    basePath: API_BASE_URL,
  }),
);

export const postsApi = new PostsApi(
  new Configuration({
    basePath: API_BASE_URL,
  }),
);

export const usersApi = new UsersApi(
  new Configuration({
    basePath: API_BASE_URL,
  }),
);

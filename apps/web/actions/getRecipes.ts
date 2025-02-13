"use server";

import {
  PagePostPublic,
  postsApi,
  PostsApiGetPostsPostsGetRequest,
} from "@workspace/api";

export const getRecipes = async (
  requestParameters: PostsApiGetPostsPostsGetRequest,
): Promise<PagePostPublic> => {
  const response = await postsApi.getPostsPostsGet(requestParameters);
  return response.data;
};

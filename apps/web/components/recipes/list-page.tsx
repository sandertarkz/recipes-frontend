"use client";
import { useQuery } from "@tanstack/react-query";
import { getRecipesKey, postsApi } from "@workspace/api";
import { RecipeFilters } from "./filters";
import { RecipeList } from "./list";

export const RecipeListPage = ({ search }: { search?: string }) => {
  const queryKey = getRecipesKey(undefined, { search });
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey,
    queryFn: () => postsApi.getPostsPostsGet({ search }),
  });
  return (
    <RecipeFilters>
      <RecipeList
        data={data?.items}
        isLoading={isLoading}
        isFetching={isFetching}
        error={error}
      />
    </RecipeFilters>
  );
};

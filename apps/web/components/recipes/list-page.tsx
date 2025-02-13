"use client";
import { useQuery } from "@tanstack/react-query";
import { getRecipesKey } from "@workspace/api";
import { RecipeFilters } from "./filters";
import { RecipeList } from "./list";
import { RecipeListFilters } from "./types";
import { getRecipes } from "@/actions/getRecipes";

export const RecipeListPage = ({ filters }: { filters: RecipeListFilters }) => {
  const queryKey = getRecipesKey(undefined, filters);
  const { data, isFetching, error } = useQuery({
    queryKey,
    queryFn: async () => getRecipes(filters),
  });
  return (
    <RecipeFilters totalPages={data?.pages || 0} filters={filters}>
      <RecipeList data={data?.items} isFetching={isFetching} error={error} />
    </RecipeFilters>
  );
};

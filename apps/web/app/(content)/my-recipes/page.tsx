import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { RecipeListPage } from "@/components/recipes/list-page";
import { getRecipesKey, postsApi } from "@workspace/api";
import { RecipeListFilters } from "@/components/recipes/types";

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string; size?: string }>;
}) {
  const { page, size, search } = await searchParams;
  const filters: RecipeListFilters = {
    search: search,
    page: page ? parseInt(page, 10) : 1,
    size: size ? parseInt(size, 10) : 10,
  };
  const queryClient = new QueryClient();
  const queryKey = getRecipesKey(undefined, filters);
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => postsApi.getPostsPostsGet(filters),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipeListPage filters={filters} />
    </HydrationBoundary>
  );
}

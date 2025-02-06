import { Suspense } from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { Recipes } from "@/components/recipes/recipes";
import { getRecipesKey, postsApi } from "@workspace/api";

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const queryClient = new QueryClient();
  const search = searchParams.search;
  const filters = { search };
  const queryKey = getRecipesKey(undefined, filters);
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => postsApi.getPostsPostsGet(filters),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Recipes />
    </HydrationBoundary>
  );
}

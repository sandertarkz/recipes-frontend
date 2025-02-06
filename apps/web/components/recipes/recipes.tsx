"use client";
import { useQuery } from "@tanstack/react-query";
import { getRecipesKey, postsApi } from "@workspace/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

export const Recipes = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const queryKey = getRecipesKey(undefined, { search });
  console.log(222, queryKey);
  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn: () => postsApi.getPostsPostsGet({ search }),
  });

  if (isLoading) return <p>Loading recipes...</p>;
  if (error) return <p>Error loading recipes.</p>;

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className=""
        onClick={() => {
          const newParams = new URLSearchParams(searchParams.toString());
          newParams.set("search", search);
          router.push(`${pathname}?${newParams.toString()}`);
        }}
      >
        Search
      </button>
      <ul>
        {data?.map((recipe) => (
          <li key={recipe.id}>
            {recipe.title} {recipe.createdAt.toISOString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

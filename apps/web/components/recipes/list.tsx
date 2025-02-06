"use client";
import { PostPublic } from "@workspace/api";
import { RecipeCard } from "./card";

export const RecipeList = ({
  data,
  isLoading,
  isFetching,
  error,
}: {
  data?: PostPublic[] | undefined;
  isLoading?: boolean;
  isFetching: boolean;
  error: Error | null;
}) => {
  if (isLoading) return <p>Loading recipes...</p>;
  if (error) return <p>Error loading recipes.</p>;
  return (
    <ul>
      {data?.map((recipe) => (
        <li className="mb-2" key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
      {isFetching && <p>Fetching recipes...</p>}
    </ul>
  );
};

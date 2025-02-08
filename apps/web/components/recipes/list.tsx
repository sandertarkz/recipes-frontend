"use client";
import { PostPublic } from "@workspace/api";
import { RecipeCard } from "./card";

export const RecipeList = ({
  data,
  isFetching,
  error,
}: {
  data?: PostPublic[] | undefined;
  isFetching: boolean;
  error: Error | null;
}) => {
  if (error) return <p>Error loading recipes.</p>;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.map((recipe) => (
        <li className="mb-2" key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
      {isFetching && <p>Fetching recipes...</p>}
    </ul>
  );
};

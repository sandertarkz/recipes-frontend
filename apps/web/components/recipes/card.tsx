"use client";

import { PostPublic } from "@workspace/api";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@workspace/ui/components/card";

export const RecipeCard = ({ recipe }: { recipe: PostPublic }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>{recipe.createdAt.toISOString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{recipe.content || "No content"}</p>
      </CardContent>
      <CardFooter>
        <Button>Like</Button>
      </CardFooter>
    </Card>
  );
};

const RECIPES_QUERY_KEY = "recipes";

const createQueryKey = <T = undefined>(
  baseKey: string,
  id?: string,
  filters?: T,
): T extends undefined ? string[] : (string | T)[] => {
  const partialKey = id ? [baseKey, id] : [baseKey];

  return (
    filters === undefined ? partialKey : [...partialKey, filters]
  ) as T extends undefined ? string[] : (string | T)[];
};

export const getRecipesKey = <T>(id?: string, filters?: T) =>
  createQueryKey(RECIPES_QUERY_KEY, id, filters);

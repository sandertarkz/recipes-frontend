export enum Route { // TODO: move to config.ts file
  AuthLogin = "/auth/login",
  AuthRegister = "/auth/register",
  Home = "/",
  NotFound = "/404",
  Profile = "/profile",
  Settings = "/settings",
  Recipes = "/recipes",
  RecipeId = "/recipes/:id",
  MyRecipes = "/my-recipes",
}

export const privateRoutes = [Route.Profile, Route.Settings, Route.MyRecipes];

export const SET_RECIPES = 'SET_RECIPES';
export const FAV_RECIPE = 'FAV_RECIPE';

export function setRecipes(items) {
  return {
  type: SET_RECIPES,
  items
  }
}

export function favRecipe(recipe) {
  return {
  type: FAV_RECIPE,
  recipe
  }
}

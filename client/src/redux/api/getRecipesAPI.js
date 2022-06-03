import axios from "axios";
export const getRecipesAPI = async () => {
  try {
    const recipes = [
      {
        name: "recipeName",
        photo: "recipePhoto",
        ingredients: "recipeIngredients",
        instructions: "recipeInstructions",
      },
      {
        name: "recipeName",
        photo: "recipePhoto",
        ingredients: "recipeIngredients",
        instructions: "recipeInstructions",
      },
      {
        name: "recipeName",
        photo: "recipePhoto",
        ingredients: "recipeIngredients",
        instructions: "recipeInstructions",
      },
      {
        name: "recipeName",
        photo: "recipePhoto",
        ingredients: "recipeIngredients",
        instructions: "recipeInstructions",
      },
      {
        name: "recipeName",
        photo: "recipePhoto",
        ingredients: "recipeIngredients",
        instructions: "recipeInstructions",
      },
      {
        name: "recipeName",
        photo: "recipePhoto",
        ingredients: "recipeIngredients",
        instructions: "recipeInstructions",
      },
    ];
    return recipes;
  } catch (error) {
    console.error(error);
  }
};

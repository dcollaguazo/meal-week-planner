import React from "react";
import { RecipesList } from "./components/RecipesList";
import Container from '@mui/material/Container';

export function Home() {
  const recipes = [
    {name: "recipeName", photo: "recipePhoto", ingredients: "recipeIngredients", instructions: "recipeInstructions"},
    {name: "recipeName", photo: "recipePhoto", ingredients: "recipeIngredients", instructions: "recipeInstructions"},
    {name: "recipeName", photo: "recipePhoto", ingredients: "recipeIngredients", instructions: "recipeInstructions"},
    {name: "recipeName", photo: "recipePhoto", ingredients: "recipeIngredients", instructions: "recipeInstructions"},
    {name: "recipeName", photo: "recipePhoto", ingredients: "recipeIngredients", instructions: "recipeInstructions"},
    {name: "recipeName", photo: "recipePhoto", ingredients: "recipeIngredients", instructions: "recipeInstructions"},
  ];
  
  return (
    <>
    <Container maxWidth="100%">
      <RecipesList recipes={recipes}/>
    </Container>
    </>
  );
}

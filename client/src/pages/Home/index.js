import React, { useEffect } from "react";
import { RecipesList } from "./components/RecipesList";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { setRecipes, setCode, setUser, getRecipes } from "../../redux/actions/actions";
// import { getRecipesAPI } from "../../redux/api/getRecipesAPI";

export function Home() {
  const dispatch = useDispatch();

  const recipes = useSelector(function (state){
    const recipes = state.recipes.data;
    return recipes;
  });

  useEffect(() => {
    dispatch(getRecipes());
  },[dispatch]);
  
  console.log("5");

  return (
    <>
      <Container maxWidth="100%">
        <RecipesList recipes={recipes} />
      </Container>
    </>
  );
}

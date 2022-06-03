import { getRecipesAPI } from "../api/getRecipesAPI";
import { SET_RECIPES, SET_ERROR, SET_CODE, SET_USER } from "./types";
export const setRecipes = (payload) => {
  return {
    type: SET_RECIPES,
    payload: payload
  }
};
export const setCode = (payload) => ({
    type: SET_CODE,
    payload,
  });
export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});
export const setUser = (payload) => ({
    type: SET_USER,
    payload,
  });
export const getRecipes = () => async (dispatch) => {
  try {
    const recipes = await getRecipesAPI();
    // console.log(recipes);
    dispatch(setRecipes(recipes));
  } catch (error) {
    dispatch(setError({ message: "Error on getting recipes", error }));
  }
};

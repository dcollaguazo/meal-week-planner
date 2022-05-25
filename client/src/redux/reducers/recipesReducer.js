import { SET_RECIPES, SET_ERROR } from "../actions/types";
const initialState = {
  data: [],
  error: "",
};
const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, data: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
};
export { recipesReducer };

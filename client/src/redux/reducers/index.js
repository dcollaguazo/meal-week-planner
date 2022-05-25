import { combineReducers } from "redux";
import { recipesReducer } from "./recipesReducer";
// import { userReducer } from "./userReducer";
export const rootReducer = combineReducers({
  recipes: recipesReducer,
  // user: userReducer
});

import { SET_RECIPES, SET_ERROR, SET_CODE, SET_USER } from "../actions/types";
const initialState = {
  user:"",
  code:null,
};
const recipesReducer = (state = initialState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, data: action.payload};
    case SET_USER:
      return { ...state, user: action.payload};
    case SET_CODE:
      return { ...state, code: action.payload};
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
};
export { recipesReducer };

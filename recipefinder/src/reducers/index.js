import {combineReducers} from 'redux';
import { SET_RECIPES,FAV_RECIPE } from '../actions';

function recipes (state = [],action) {
  switch(action.type) {
    case SET_RECIPES:
    return action.items;
    default:
    return state;
  }
}
function favRecipes(state=[], action) {
switch(action.type) {
  case FAV_RECIPE:
  state = [...state, action.recipe]
  return state;
  default:
  return state;

    break;
}
}
const rootReducer = combineReducers({ recipes, favRecipes});

export default rootReducer;

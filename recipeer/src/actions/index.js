import {ADD_INGREDIENT,DELETE_INGREDIENT,SHOW_DETAILS,HIDE_DETAILS} from '../constants/action-types';

export const addIngredient = ingredient => ({ type: ADD_INGREDIENT, payload: ingredient });
export const deleteIngredient = index => ({ type: DELETE_INGREDIENT, payload: index});
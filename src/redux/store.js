import {combineReducers, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {mealInCartReducer} from "./reducer/mealInCartReducer";

const reducer = combineReducers({
    mealInCart : mealInCartReducer.reducer
})

export const store = configureStore({
    reducer:reducer
});
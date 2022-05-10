import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const addMealToCart = (state, newItem) => {
    console.log(newItem)
    state.push(newItem);
}

export const mealInCartReducer = createSlice({
    name: "mealInCart",
    initialState,
    reducers: {
        addMeal: (state, action) => addMealToCart(state, action.payload)
    }

})

export const {addMeal} = mealInCartReducer.actions;

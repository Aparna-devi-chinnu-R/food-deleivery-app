import {createSlice} from "@reduxjs/toolkit";
import {logDOM} from "@testing-library/react";

const initialState = [];

const addMealToCart = (state, newItem) => {
    let position = state.length;
    let sameItem;
    let count;
    state.map((item, index) => {
        if (item.id === newItem.id) {
            position = index;
            sameItem = item;
        }
    })
    count = sameItem ? sameItem.count +1 : newItem.count  ;

    state[position] = {...newItem,count:count};

}

export const mealInCartReducer = createSlice({
        name: "mealInCart",
        initialState,
        reducers: {
            addMeal: (state, action) => addMealToCart(state, action.payload)
        }
    }
)

export const {addMeal} = mealInCartReducer.actions;

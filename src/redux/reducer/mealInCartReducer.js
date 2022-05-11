import {createSlice} from "@reduxjs/toolkit";

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
    count = sameItem ? (parseInt(sameItem.count) + parseInt(newItem.count)) : newItem.count  ;

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

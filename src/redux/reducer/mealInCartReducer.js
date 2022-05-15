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
    count = sameItem ? (parseInt(sameItem.count) + parseInt(newItem.count)) : newItem.count;

    state[position] = {...newItem, count: count};

}

const incrementCountOfItem = (state, incrementedItem) => {

    state.map(item => {
        if (item.id === incrementedItem.id) {
            item.count = item.count + 1;
        }
    });

}

const decrementCountOfItem = (state, decrementedItem) => {
    state.map(item => {
        if (item.id === decrementedItem.id) {
            item.count = item.count - 1;
        }
    });
}

export const mealInCartReducer = createSlice({
        name: "mealInCart",
        initialState,
        reducers: {
            addMeal: (state, action) => addMealToCart(state, action.payload),
            incrementCount: (state, action) => incrementCountOfItem(state, action.payload),
            decrementCount: (state, action) => decrementCountOfItem(state, action.payload),
        }
    }
)

export const {addMeal, incrementCount, decrementCount} = mealInCartReducer.actions;

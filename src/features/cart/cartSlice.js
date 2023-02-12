import {createSlice} from "@reduxjs/toolkit";
import cartItems from "../../cartItems"

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart:(state) => {
            state.cartItems = []
        },
        removeItem: (state,action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        }
    }
});

export const {clearCart, removeItem} = cartSlice.actions

export default cartSlice.reducer;

/*
3RD STEP 

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: "cart",
    initialState
});

export default cartSlice.reducer;

import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart:(state) => {
            state.cartItems = []
            alternative
            return { cartItems: [] }
        }
    }
})

console.log(cartSlice); check the actions to see the clearCart
then

export const {clearCart} = cartSlice.actions

reducers : {
    removeItem: (state,action) => {
        const itemId = action.payload;
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    }
}

export const {clearCart, removeItem} = cartSlice.actions;
*/
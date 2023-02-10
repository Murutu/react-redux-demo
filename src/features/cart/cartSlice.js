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
        }
    }
});

export const {clearCart} = cartSlice.actions

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
        }
    }
})

console.log(cartSlice); check the actions to see the clearCart
then

export const {clearCart} = cartSlice.actions
*/
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});


/*
1ST STEP

import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {}
})

**add

import cartReducer from "./feat/cart/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})





next import "features/cart/cartSlice" => this enable us to invoke the file and
be able to see whats inside the file (console.log())

the reducer: {} => is the 1 which will control the state in the slice => const initialState = {}
This why we import the cartSlice to the store
*/
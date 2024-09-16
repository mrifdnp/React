import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./actions/cartSlice";

const store = configureStore({
        reducer: {
            cart: cartReducer
        }
    })

    console.log("oncreate store : ", store.getState())
    store.subscribe(() =>{
        console.log("Store change:",store.getState())
    })


    export default store


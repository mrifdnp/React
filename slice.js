import  {configureStore,createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState : [],  
    reducers : {
        addToCart : (state, action) => {
            state.push(action.payload)
        }
    }})

    const store = configureStore({
        reducer: {
          
            cart: cartSlice.reducer
        }
    })
console.log("oncreate store : ", store.getState())

    store.subscribe(() =>{
        console.log("Store change:",store.getState())
    })

    store.dispatch(cartSlice.actions.addToCart({id: 2, qty: 10}))
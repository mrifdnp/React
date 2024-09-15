import  {configureStore, createAction,createReducer} from "@reduxjs/toolkit"



const addToCart = createAction("ADD_TO_CART")

const cartReducer = createReducer([],(builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload)
    })
})


const login = createAction("CREATE_LOGIN")

const loginReducer = createReducer({status:false}, (builder) =>{
    // eslint-disable-next-line no-unused-vars
    builder.addCase(login, (state, action) => {
        state.status = true
    })
})
const store = configureStore({
    reducer: {
        login : loginReducer,
        cart: cartReducer
    }
})

store.subscribe(() =>{
    console.log("Store change:",store.getState())
})

const action1 = 
  addToCart({
    id: 2,
qty: 10
})

store.dispatch(action1)
store.dispatch(login())

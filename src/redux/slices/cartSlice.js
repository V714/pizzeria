import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: 'ProductsList',
    initialState,
    reducers: {
        resetCart: (state, action) => {
            return []
        },
        addToCart: (state, action) => {
            return [...state, action.payload]
        },
        initCart: (state, action) => {
            return action.payload
        }
    },
})

export const {resetCart,addToCart,initCart} = cartSlice.actions
export default cartSlice.reducer
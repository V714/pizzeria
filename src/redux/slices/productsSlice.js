import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const productsSlice = createSlice({
    name: 'ProductsList',
    initialState,
    reducers: {
        refreshProductsList: (state, action) => {
            return action.payload
        }
    },
})

export const {refreshProductsList} = productsSlice.actions
export default productsSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const typesSlice = createSlice({
    name: 'TypesList',
    initialState,
    reducers: {
        refreshTypesList: (state, action) =>{
            return action.payload
        }
    },
})

export const {refreshTypesList} = typesSlice.actions
export default typesSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const languageSlice = createSlice({
    name: 'Language',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            return action.payload
        }
    },
})

export const {changeLanguage} = languageSlice.actions
export default languageSlice.reducer
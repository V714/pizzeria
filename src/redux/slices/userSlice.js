import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const userSlice = createSlice({
    name: 'ContactList',
    initialState,
    reducers: {
        refreshUserData: (state, action) => {
            return action.payload
        }
    },
})

export const {refreshUserData} = userSlice.actions
export default userSlice.reducer
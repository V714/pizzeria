import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const contactSlice = createSlice({
    name: 'ContactList',
    initialState,
    reducers: {
        refreshContactList: (state, action) => {
            return action.payload
        }
    },
})

export const {refreshContactList} = contactSlice.actions
export default contactSlice.reducer
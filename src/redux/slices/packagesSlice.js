import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const packagesSlice = createSlice({
    name: 'PackagesList',
    initialState,
    reducers: {
        refreshPackagesList: (state, action) => {
            return action.payload
        }
    },
})

export const {refreshPackagesList} = packagesSlice.actions
export default packagesSlice.reducer
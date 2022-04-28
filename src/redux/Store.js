import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice';
import typesSlice from './slices/typesSlice';
import contactSlice from './slices/contactSlice';
import packagesSlice from './slices/packagesSlice';
import languageSlice from './slices/languageSlice';
import userSlice from './slices/userSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
    reducer:{
        products: productsSlice,
        types: typesSlice,
        contact: contactSlice,
        packages: packagesSlice,
        language: languageSlice,
        user: userSlice,
        cart: cartSlice
    }
})

export default store;
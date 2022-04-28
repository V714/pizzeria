import { useEffect } from 'react'
import Content from './Content'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { refreshProductsList } from "./redux/slices/productsSlice"
import { refreshTypesList } from "./redux/slices/typesSlice"
import { refreshContactList } from './redux/slices/contactSlice';
import { changeLanguage } from './redux/slices/languageSlice';
import { initCart } from './redux/slices/cartSlice';
import { getAllProducts, getAllTypes, getCart, getContact, getLanguage, getUser} from './functions/init'
import { refreshUserData } from './redux/slices/userSlice';

function Body(){
    const lang = useSelector(state=>state.language)
    const dispatch = useDispatch()

    useEffect(()=>{
        getAllProducts(axios,dispatch,refreshProductsList);
        getAllTypes(axios,dispatch,refreshTypesList);
        getLanguage(axios,dispatch,changeLanguage);
        getContact(axios,dispatch,refreshContactList);
        getCart(dispatch,initCart)
        getUser(dispatch,refreshUserData)
    },[])


    return(
        <>
        {lang.header &&
        <><NotificationContainer/>
        <Content/></>}
        </>
    )
}
export default Body;
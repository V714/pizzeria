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
import CookieConsent from "react-cookie-consent";

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
    },[dispatch])

    return(
        <>
        {lang.header &&
        <><NotificationContainer/>
        <Content/></>}


    <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="cookie"
        style={{ background: "#f0eee8", color:"#523429", fontSize: "28px", lineHeight:"70px", boxShadow:"0px 0px 10px 5px #0009"}}
        buttonStyle={{ color: "#f0eee8", backgroundColor:"#523429", fontSize: "18px",marginRight:"50px",padding:"20px 20px" }}
        expires={150}
    >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}></span>
    </CookieConsent>

        </>
    )
}
export default Body;
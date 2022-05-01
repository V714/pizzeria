import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalAd from "./modals/Ad";
import ModalCart from "./modals/Cart";
import ModalNotification from "./modals/Notification";

const Header = () => {
  const [modalIsOpenAd, setModalIsOpenAd] = useState(false)
  const [modalIsOpenNoti, setModalIsOpenNoti] = useState(false)
  const [modalIsOpenCart, setModalIsOpenCart] = useState(false)
  const lang = useSelector(state=>state.language)
  const products = useSelector(state=>state.cart)

  const closer = () => {
    setModalIsOpenAd(false)
    setModalIsOpenCart(false)
    setModalIsOpenNoti(false)
  }

  return(<header className="top-menu">
    <div className="top-menu-title"><NavLink to="/home" >{lang.name}</NavLink></div>
    <nav>
      <ul className="top-menu-select">
        <li><NavLink className="top-tab" to="/home" activeClassName="selected">{lang.header.home}</NavLink></li>
        <li><NavLink className="top-tab" to="/menu" activeClassName="selected">{lang.header.menu}</NavLink></li>
        <li><NavLink className="top-tab" to="/about" activeClassName="selected">{lang.header.aboutus}</NavLink></li>
        <li><a className="top-tab" href="home#section5">{lang.header.contact}</a></li>
      </ul>
    </nav>
    <div className="top-menu-icons">
        <button onClick={() => setModalIsOpenNoti(true)} name="notifications" id="notification"><img alt="notifications icon" width="24" height="24" src="images/bell.svg"/></button>
        <button onClick={() => setModalIsOpenCart(true)} name="cart" id="cart">
          {products !== null &&
          products.length > 0 && <div className="new-notification">{products.length}</div>}
          
          <img alt="cart icon" width="24" height="24" src="images/cart.svg"/></button>
    </div>


    
    
     
     
  <ModalAd closer={closer} modalIsOpenAd={modalIsOpenAd} setModalIsOpenAd={setModalIsOpenAd} lang={lang}/>
  <ModalCart closer={closer} products={products} modalIsOpenCart={modalIsOpenCart}/>
  <ModalNotification closer={closer} products={products} modalIsOpenNoti={modalIsOpenNoti}/>

      
  </header>)
}

export default Header;
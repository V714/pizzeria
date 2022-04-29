import { useEffect, useState } from "react";
import CartItem from '../../items/CartItem';

import Modal from 'react-modal';
import { useSelector } from "react-redux";
import ModalDelivery from "../../modals/Delivery";
import ModalCheckout from "../../modals/Checkout";
import { cartPrice } from "../../functions/cart";
Modal.setAppElement('#root')


function Section1(){
    const [modalIsOpenChck,setModalIsOpenChck] = useState(false)
    const [modalIsOpenDeli,setModalIsOpenDeli] = useState(false)
    const [delivery,setDelivery] = useState(true)
    const [price,setPrice] = useState(0)

    const lang = useSelector(state=>state.language)
    const products = useSelector(state=>state.cart)
    const allProducts = useSelector(state=>state.products)

    useEffect(()=>{
        setPrice(parseFloat(cartPrice(allProducts,products)))
    },[])

    const closer = () => {
        setModalIsOpenChck(false)
        setModalIsOpenDeli(false)
    }


    return(
        <div className="section1-item">
            {products && products.length > 0 && <div className="section1-item-inner">
                {/* <div className="page-links">
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a className="actual"><img src="images/right-vector.svg"/>Shopping Cart</a></li>
                    </ul>
                </div> */}

                <div className="s1-cart">
                    <div className="s1-cart-left">
                        <div className="s1-cart-left-title">{lang.cart.shopping_cart}</div>

                        <div className="s1-cart-left-list">

                            {products && products.map(item => {
                                const product = allProducts.find(_item => _item.id === item.id)
                                return(<CartItem lang={lang} item={item} product={product}/>)
                                })}

                        </div>
                    </div>

                    <div className="s1-cart-right">
                        <div className="s1-cart-right-inner">
                            <div className="s1-cart-delivery">
                                <div className="s1-cart-delivery-info">
                                    <img src={delivery ? "images/delivery.svg" : "images/pickup.svg"}/> {delivery ? "Delivery Order" : "Pickup Order"}
                                </div>
                                <button id="change_delivery" className="delivery-change-button" onClick={() => setModalIsOpenDeli(true)}>{lang.cart.change}</button>
                            </div>
                            <div className="s1-cart-summary">
                                <div className="s1-cart-summary-title">{lang.cart.payment_summary}</div>
                                <div className="s1-cart-summary-price">
                                    <div className="s1-cart-summary-price-left">{lang.cart.price} ({products.length} {lang.cart.items_quantity})</div>
                                    <div className="s1-cart-summary-price-right">{lang.currency} {price.toFixed(2)}</div>
                                </div>
                                <div className="s1-cart-summary-total">
                                    <div className="s1-cart-summary-total-left">{lang.cart.total}</div>
                                    <div className="s1-cart-summary-total-right">{lang.currency} {(price + (delivery ? 3.99 : 0)).toFixed(2)}</div>
                            </div>
                            <button id="checkoutNow" className="checkout-now-button" onClick={() => setModalIsOpenChck(true)} >{lang.cart.checkout_now}</button>
                        </div>
                    </div>
                </div>
                

            </div>

        </div>

}
{products && products.length <= 0 && <div className="section1-item-inner">
    <div className="s1-cart" style={{justifyContent: "center"}}>
                    <div className="s1-cart-left">
                        <div className="s1-cart-left-title">{lang.cart.cart_empty}</div>
</div></div></div>


}
    <ModalDelivery lang={lang} modalIsOpenDeli={modalIsOpenDeli} closer={closer} delivery={delivery} setDelivery={setDelivery}/>
    <ModalCheckout lang={lang} allproducts={products} closer={closer} modalIsOpenChck={modalIsOpenChck} delivery={delivery}/>
     

        </div>
    );
}

export default Section1;
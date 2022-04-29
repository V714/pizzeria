import CheckoutItem from "../items/CheckoutItem";

import ModalPayment from "../modals/Payment"
import ModalCheckout from "../modals/Checkout"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartPrice } from "../functions/cart";

export default function Checkout(){
    const [modalIsOpenNote,setModalIsOpenNote] = useState(false)
    const [modalIsOpenChck,setModalIsOpenChck] = useState(false)
    const [modalIsOpenPaym,setModalIsOpenPaym] = useState(false)
    const [checkout,setCheckout] = useState(false)
    const [price,setPrice] = useState(0)

    const lang = useSelector(state=>state.language)
    const products = useSelector(state=>state.cart)
    const allProducts = useSelector(state=>state.products)
    const user = useSelector(state=>state.user)

    useEffect(()=>{
        if(products&&user)setCheckout(true)
        
        setPrice(cartPrice(allProducts,products))
    },[allProducts])

    const closer = () => {
        setModalIsOpenChck(false)
        setModalIsOpenNote(false)
        setModalIsOpenPaym(false)
    }

  return (

   <div>
       {checkout && <>
  < div className="section1-item">
            <div className="section1-item-inner">
                <div className="s1-cart">
                    <div className="s1-cart-left">
                        
                        <div className="user-data">
                            <div className="user-data-head">{lang.cart.checkout.delivery_address}</div>
                            <div className="user-data-details">
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">{lang.cart.checkout.name}</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">{user.name}</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">{lang.cart.checkout.mobile}</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">{user.telp}</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">{lang.cart.checkout.city}</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">{user.city}</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">{lang.cart.checkout.address}</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">{user.address}</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">{lang.cart.checkout.district}</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">{user.district}</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">{lang.cart.checkout.note}</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">{user.note}</div>
                                </div>
                            </div>
                        </div>
                        <button id="checkoutNow" className="change-address-button" onClick={() => setModalIsOpenChck(true)}>Change Address</button>
                        <div className="s1-cart-left-list">
                        {products &&
					            products.map(item => {
                                    const product = allProducts.find(_item=>_item.id===item.id)
                                    return(
						                <CheckoutItem item={item} product={product}/>
                                    )
                                })
                        }


                    </div>
                    </div>

                    <div className="s1-cart-right" id="checkout_summary_div">
                        <div className="s1-cart-right-inner-checkout">
                            <div className="s1-cart-checkout">
                            <div className="s1-cart-delivery-info">
                                    <img src={user.delivery ? "images/delivery.svg" : "images/pickup.svg"}/> {user.delivery ? "Delivery Order" : "Pickup Order"}
                                </div>
                            </div>
                            <div className="s1-cart-checkout-info">{lang.cart.estimate_time} : ***</div>
                            <div className="s1-cart-summary">
                                <div className="s1-cart-summary-title">{lang.cart.payment_summary}</div>
                                <div className="s1-cart-summary-price">
                                    <div className="s1-cart-summary-price-left">{lang.cart.price} ({products.length} {lang.cart.items_quantity})</div>
                                    <div className="s1-cart-summary-price-right">{lang.currency} {price}</div>
                                </div>
                                {user.delivery ? <><div className="s1-cart-summary-price">
                                    <div className="s1-cart-summary-price-left">{lang.cart.delivery_fee}</div>
                                    <div className="s1-cart-summary-price-right">{lang.currency} {3.99}</div>
                                </div> </> : <></>}
                                
                                <div className="s1-cart-summary-total">
                                    <div className="s1-cart-summary-total-left">{lang.cart.total}</div>
                                    <div className="s1-cart-summary-total-right">{lang.currency} {(parseFloat(price) + parseFloat((user.delivery? 3.99:0).toFixed(2))).toFixed(2)}</div>
                                    {/* <div className="s1-cart-summary-total-right">€ {this.state.orderItems.order.cart.totalPriceDiscounted}</div> */}
                            </div>
                            <button id="payment" className="checkout-now-button" onClick={() => setModalIsOpenPaym(true)}>{lang.cart.choose_payment}</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    
    </div>

    <ModalCheckout lang={lang} allproducts={products} closer={closer} modalIsOpenChck={modalIsOpenChck} delivery={user.delivery}/>
    <ModalPayment lang={lang} price={price} products={products} closer={closer} modalIsOpenPaym={modalIsOpenPaym} delivery={user.delivery}/>

</>
    }

    </div>
);
}

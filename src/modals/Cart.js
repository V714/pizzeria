
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { cartPrice } from '../functions/cart';


Modal.setAppElement('#root')

export default function ModalCart (props){
    const [totalPrice,setTotalPrice] = useState(0)
    const [render,setToRender] = useState(false)
    const allProducts = useSelector(state => state.products)

    useEffect(()=>{
        if(props.products)setTotalPrice(cartPrice(allProducts,props.products))
        if(allProducts&&allProducts.length!==0)setToRender(true)
    },[allProducts])

    return(
        render?
        <Modal 
        isOpen={props.modalIsOpenCart} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => props.closer()}
        closeTimeoutMS={350}
        className={"notification-modal"}
        style={{
          overlay: {
            position: 'fixed',
            transition: 'all 0.4s ease-in-out',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 9999
          }
        }}>
       <div className="notification-modal">
        <div className="notification-modal-inner">
            {props.products ? <><div className="fm-head">
                <div className="fm-head-left">Cart ({props.products.length}): {totalPrice}€</div>
                <div className="fm-head-right"><a href="cart">View all</a></div>
            </div>
            <div className="cart-list">
                <ul>
                {props.products &&
					            props.products.map((item) => {  
                                    const product = allProducts.find(_item => _item.id === item.id)
                                    let price = product?(product.sizes ? parseFloat(product.sizes.find(_item => _item.id === item.option).price) : parseFloat(product.price)):0
                                    if(item.extra&&product){
                                        if(product.extraAddons)item.extra.map(_item => {
                                            price += parseFloat(product.extraAddons.find(aitem => aitem.id === _item).price)
                                        })
                                    }

                                    return(
                                        <li>
                                            <div className="cart-element-inner">
                                                <div className="cart-element-left"><img alt="product image" src={product.imgPath}/>
                                                    <div className="cart-element-details">
                                                        <div className="cart-element-name">{product.name}</div>
                                                    </div>
                                                </div>
                                                <div className="cart-element-right">€{price.toFixed(2)}</div>
                                            </div>
                                        </li>
                                    )
                                    })}
                    
                </ul>
            </div>
            <a href="cart" className="checkout-now-button">Checkout Now</a></>
            :
            <><div className="fm-head-left">Cart is empty</div></>}
        </div>
    </div>
      </Modal>:<></>
        
 
    );
}

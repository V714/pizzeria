import { useState } from "react";
import ModalIngredients from '../modals/Ingredients';
import { addProductToCart } from "../functions/cart";
import { initCart, addToCart } from "../redux/slices/cartSlice";
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";
Modal.setAppElement('#root')


function OffersItem(props){
    const [quantity,setQuantity] = useState(1)
    const {item, index} = props
    const dispatch = useDispatch()

    return(item?
            <li className="s4-item-element">
                        <div className="s4-item-element-inner">
                            <div className="s4-item-photo"><img alt="product image" src={item.imgPath}/></div>
                            <div className="s4-item-info">Package {index}</div>
                            <div className="s4-item-details">
                                <div className="s4-item-name-promo">
                                    <div className="s4-item-name">{item.name}</div>
                                    <div className="s4-item-promo">{item.description}</div>
                                </div>
                                <div className="s4-item-price">€ {item.price}</div>
                            </div>
                            
            <div className="magic-buttons-offers">
                    <button className="s3-add-to-cart" 
                     onClick={() => addProductToCart(dispatch,addToCart,initCart,item,null,item.price,NotificationManager,undefined,null)}
                    
                        
                        > <img alt="cart icon" width="24" height="24" src="images/cart-white.svg"/>Add to Cart </button>
               </div> </div>

                    </li>:<></>
        );
}

export default OffersItem;
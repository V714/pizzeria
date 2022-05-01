
import Modal from 'react-modal';
import { addProductToCart } from "../functions/cart";
import { useDispatch } from "react-redux";
import { addToCart, initCart } from "../redux/slices/cartSlice";
import { NotificationManager } from "react-notifications";
Modal.setAppElement('#root')


function ComboItem(props){
    const dispatch = useDispatch()
    const aaddToCart = () => {
        addProductToCart(dispatch,addToCart,initCart,props.item,null,NotificationManager,null,'')
    }

        return(
            props.item?<div className="s2-combo-item">
                <div className="s2-menu-all-content">
                    <img alt="product" className="s2-img-menu-item" src={props.item.imgPath}/>
                    <div className="s2-menu-item-content">
                        <div className="s2-menu-item-title">Combos {props.index}</div>
                        <div className="s2-menu-item-name">{props.item.name}</div>
                        <div className="s2-menu-item-price">€ {props.item.price}</div>
                        <div className="magic-buttons">
                            <button className="s3-add-to-cart"  onClick={() => aaddToCart()}> <img width="24" height="24" alt="cart icon" src="images/cart-white.svg"/>Add to Cart </button>
                        </div>
                    </div>
                </div>

        </div>:<></>
        );
    
}

export default ComboItem;
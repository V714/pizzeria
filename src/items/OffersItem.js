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
    const [modalIsOpenIngr,setModalIsOpenIngr] = useState(false)
    const {item, index} = props
    const dispatch = useDispatch()
    const closer = () => {
        setModalIsOpenIngr(false)
    }

    return(
            <li className="s4-item-element">
                        <div className="s4-item-element-inner">
                            <div className="s4-item-photo"><img src={item.imgPath}/></div>
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
                    
                        
                        > <img src="images/cart-white.svg"/>Add to Cart </button>
               </div> </div>

               <Modal 
        isOpen={modalIsOpenIngr} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => setModalIsOpenIngr(false)}
        closeTimeoutMS={350}
        className={"ingredients_dialog"}
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
            <ModalIngredients closer = {closer} item={item}/>
      </Modal>
                    </li>
        );
}

export default OffersItem;
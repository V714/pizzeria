import react, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../functions/cart";
import { addToCart } from "../../redux/slices/cartSlice";
import { initCart } from "../../redux/slices/cartSlice"


function Section1(props){
    const [note, setNote] = useState('')
    const lang = useSelector(state=>state.language)
    const dispatch = useDispatch()

    const typeNote = (e) => {
        setNote(e.target.value)
    }
    
    const selectButtonStyle = (size) => {
        if(props.size === size){return "size-button picked-size"}
        else{return "size-button"}
    }

    const aaddToCart = () => {
        let extrasIds = []
        props.extraAddons.map(_item => {for(var i=0; i < _item.quantity; i++){extrasIds.push(_item.id)}})
        addProductToCart(dispatch,addToCart,initCart,props.item,props.size,props.price,NotificationManager,extrasIds,note,props.crust)
    }   

    return(props.item?
        <>
        {props.item && 
            <>
            <div className="menu-section1-inner">
            <div className="detail-section1-inner">
            
                <div className="triple-head">
                    <div className="triple-head-details">
                        <div className="triple-head-details-title">{lang.details.section1details}</div>
                        <div className="triple-head-details-line"></div>
                        <div className="triple-head-details-info">
                            <div className="triple-head-details-info-star"><img alt="star icon" width="16" height="16"  src="images/star.svg"/>{props.item.rating}</div>
                            <div className="triple-head-details-info-element"><img alt="clock icon" width="20" height="20" src="images/clock.svg"/>30min</div>
                            <div className="triple-head-details-info-element"><img alt="kcal icon" width="20" height="20" src="images/kcal.svg"/>700 kCal</div>
                        </div>
                        <div className="item-detail-text-smaller">{props.item.description}</div>
                        
                    </div>
                    <div className="triple-head-title">
                        <div className="triple-head-title-title">{props.item.name}</div>
                        <div className="triple-head-title-size">
                            <div className="s3-item-size">
                            {props.item.sizes && props.item.sizes.map(item => {
                                return( <button onClick={() => props.pizzaSize(item.size)} className={selectButtonStyle(item.size)} >{item.size}{item.sizeType}</button>)

                             })}
                     </div>
                        </div>
                        <div className="triple-head-title-under">Make your own pizza? <a href="#section2"><b><u><i>Custom Ingredients</i></u></b></a></div>

                    </div>
                    <div className="triple-head-price">
                        <div className="triple-head-price-head">
                            <div className="triple-head-price-head-left">
                                <div className="triple-head-price-head-left-title">Price</div>
                                <div className="triple-head-price-head-left-price">{lang.currency} {parseFloat(props.price).toFixed(2)}</div>
                            </div>
                            <div className="s3-item-cart">
                            </div>
                        </div>
                        <div className="add-note">
                            Add Note
                            <input type="text" onChange={(e) => typeNote(e)} value={note} placeholder="ex. add more chilli"/>
                        </div>
                        <button onClick={() => aaddToCart()}
            
            className="s3-add-to-cart"> <img alt="cart icon" width="24" height="24" src="images/cart-white.svg"/>Add to Cart </button>
                    </div>
                </div>
                <div className="pizza-rotate">
                    {/* <img id="pizza_size" src={props.item.imgPath}/> */}
                    <img alt="your product image but rotating" id="pizza_size" src={props.item.imgPath}/> 
                    
                    
                </div>
                
            </div>
        </div>
        </>}</>:<></>
    );
}

export default Section1;
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { addProductToCart } from "../../functions/cart"
import { addToCart, initCart } from "../../redux/slices/cartSlice"
import NotificationManager from "react-notifications/lib/NotificationManager"

function Section1Item(props){
    const [note,setNote]=useState('')
    const dispatch = useDispatch()
    const navigate = useHistory()

    const lang = useSelector(state => state.language)

    const typeNote = (e) => {
        setNote(e.target.value)
    }
    const selectButtonStyle = (size) => {
        if(props.size === size){return "size-button picked-size"}
        else{return "size-button"}
    }
    const aaddToCart = async() => {
        await addProductToCart(dispatch,addToCart,initCart,props.item,props.size,props.price,NotificationManager,undefined,note)
        navigate.push('/')
    }   

    return(props.item?
        <div className="section1-item">
            <div className="section1-item-inner">
                {props.item && 
                <>
                <div className="item-details">
                    <div className="item-detail-image">
                        <div className="item-detail-fullimage"><img alt="product" src={props.item.imgPath}/></div>
                    </div>
                    <div className="item-detail-description">
                        <div className="item-detail-name">{props.item.name}</div>
                        <div className="item-detail-info">
                            <div className="item-detail-info-small"><img alt="star icon" width="16" height="16"  src="images/star.svg"/>{props.item.rating}</div>
                            <div className="item-detail-info-small"><img alt="clock icon" width="20" height="20" src="images/clock.svg"/>{props.item.time}min</div>
                            <div className="item-detail-info-small"><img alt="kcal icon" width="20" height="20" src="images/kcal.svg"/>{props.item.kcal} kCal</div>
                        </div>
                        <div className="item-detail-text">
                            <div className="item-detail-text-bigger">{lang.details.section1details}</div>
                            <div className="item-detail-text-smaller">{props.item.description}</div>
                        </div>
                    </div>
                    <div className="item-details-price">
                        <div className="item-details-price-head">
                            <div className="item-details-price-head-left">
                                <div className="item-details-price-head-left-small">{lang.details.section1price}</div>
                                <div className="item-details-price-head-left-bigger">{lang.currency} {props.price}</div>
                            </div>
                            <div className="item-details-price-head-right">
                            <div className="s3-item-size">
                            {props.item.sizes && props.item.sizes.map(item => {
                                return( <button onClick={() => props.pizzaSize(item.size)} className={selectButtonStyle(item.size)} >{item.size}{item.sizeType}</button>)

                             })}
                     </div>
                            </div>
                        </div>
                        <div className="item-detail-add-note">{lang.details.section1add_note}</div>
                        <input placeholder="ex. add more chilli" value={note} onChange={(e) => typeNote(e)}/>
                        <button className="item-detail-button" 
                            onClick={() => aaddToCart()} id="addToCart">
                                <img alt="cart icon" width="24" height="24" src="images/cart-white.svg"/>{lang.details.section1add_button}</button>
                    </div>
                </div></>}
            </div>
        </div>:<></>
    );
}

export default Section1Item;
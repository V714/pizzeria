import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { initCart, addToCart } from "../redux/slices/cartSlice"
import { addProductToCart } from "../functions/cart"
import NotificationManager from "react-notifications/lib/NotificationManager"

function ProductItem(props){
    const {id,name,imgPath,sizes,rating,description} = props.item
    const [size,setSize] = useState("")
    const [price,setPrice] = useState("")
    const dispatch = useDispatch()

    useEffect(()=>{
        if(sizes){
            setSize(sizes[0].size)
            setPrice(sizes[0].price)
        } else {
            setPrice(props.item.price)
        }
    },[props,sizes])

    const pizzaSize = (s) => {
        setSize(s)
        setPrice(sizes.find(item=>item.size === s).price)
    }

    const selectButtonStyle = (s) => {
        if(size === s){return "size-button picked-size"}
        else{return "size-button"}
    }

    return(
        props.item?<>
            {size ? 
            <div className="s3-item">
                <div className="s3-item-image"><img alt="product" src={imgPath}/></div>
                <div className="s3-item-name">{name} {sizes.length===1 && "("+sizes[0].size+" "+sizes[0].sizeType+")"}</div>
                <div className="s3-item-price">
                    <div className="s3-item-price-cost">€ {price}</div>
                    <div className="s3-item-price-rating"><img alt="star icon" width="16" height="16"  src="images/star.svg"/>{rating}</div>
                    </div>
                <div className="s3-item-details">{description}</div>
                <div className="s3-item-size">
                    {sizes.length>1 && sizes.map((item,index) => {
                    return( <button key={index} onClick={() => pizzaSize(item.size)} className={selectButtonStyle(item.size)} >{item.size}{item.sizeType}</button>)
                        })}
                </div>
                <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                <a role="button" className="s3-add-to-cart" onClick={() => addProductToCart(dispatch,addToCart,initCart,props.item,size,price,NotificationManager,undefined,null)}> <img alt="cart icon" width="24" height="24"  src="images/cart-white.svg"/>Add to Cart</a>
                <a role="button" className="s3-add-to-cart" href={"details?id="+id+"&size="+size}> Customize</a></div>
            </div>
            :
            <div className="s3-item">
                <div className="s3-item-image"><img alt="product" src={imgPath}/></div>
                <div className="s3-item-name">{name}</div>
                <div className="s3-item-price">
                    <div className="s3-item-price-cost">€ {price}</div>
                    <div className="s3-item-price-rating"><img alt="star icon" width="16" height="16"  src="images/star.svg"/>{rating}</div>
                    </div>
                <div className="s3-item-details">{description}</div>
                <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                <a role="button" className="s3-add-to-cart" onClick={() => addProductToCart(dispatch,addToCart,initCart,props.item,size,price,NotificationManager,undefined,null)}> <img alt="cart icon" width="24" height="24" src="images/cart-white.svg"/>Add to Cart</a>
                <a role="button" className="s3-add-to-cart" href={"details?id="+id+"&size="+size}> Customize</a></div>
            </div>
            }
    
        </>:<></>
   

   
    
        );
}

export default ProductItem;
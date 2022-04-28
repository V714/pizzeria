import react, { useEffect, useState } from 'react';

function CheckoutItem (props){
    const [extras,setExtras]=useState([])
    const [size,setSize]=useState("")
    const [price,setPrice]=useState(0)
    const [extra,setExtra] = useState({})
    const [extraList,setExtraList] = useState([])

    useEffect(()=>{
        if(props.product.sizes)setSize(props.product.sizes.find(_item=>_item.id===props.item.option))
        let _extra = []
        let _price = props.product.sizes ? parseFloat(props.product.sizes.find(_item => _item.id === props.item.option).price) : parseFloat(props.product.price)
            if(props.item.extra){
                props.item.extra.map(_item => {
                    const __item = props.product.extraAddons.find(aitem => aitem.id === _item)
                    _price += parseFloat(__item.price)
                    _extra.push(__item.name)
                })
            }
        let counts = {};
        setExtraList([...new Set(_extra)])
        _extra.forEach(x => { counts[x] = (counts[x] || 0) + 1; });
        setExtra(counts)
        setPrice(_price.toFixed(2))
    },[])

    return(
    <div className="cart-item-detail">
        <div className="cart-item-detail-photo">
            <div className="cart-item-detail-image"><img src={props.product.imgPath}/></div>
        </div>
        <div className="cart-item-detail-text">
            <div className="cart-item-detail-name">{props.product.name} - {size.size}{size.sizeType} - {props.item.crust.name}</div>
            <div className="cart-item-detail-price">€ {price}</div>
            <div className="cart-item-detail-note">
                <div className="cart-item-detail-note-text">{props.item.note}</div>
                <div className="cart-item-detail-note-text">
                    {extra && extraList.map(item=>{
                        return(
                            extra[item]+'x '+item+', ')})}</div>
            </div>
        </div>
        {/* <div className="cart-item-detail-quantity">
            <div className="s3-item-cart">{this.props.quantity}</div>
        </div> */}

    </div>)
    
}

export default CheckoutItem;
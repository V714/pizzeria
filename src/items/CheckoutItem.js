import { useEffect, useState } from 'react';

function CheckoutItem (props){
    const [size,setSize]=useState({name:""})
    const [price,setPrice]=useState(0)
    const [extra,setExtra] = useState({})
    const [extraList,setExtraList] = useState([])

    useEffect(()=>{
        let _extra = []
        let _price = 0
        if(props.product){
            if(props.product.sizes)setSize(props.product.sizes.find(item2=>item2.id===props.item.option))
            _price = props.product.sizes ? parseFloat(props.product.sizes.find(item2 => item2.id === props.item.option).price) : parseFloat(props.product.price)
            if(props.product.sizes)setSize(props.product.sizes.find(item2 => item2.id === props.item.option))
                if(props.item.extra&&props.product.extraAddons){
                    props.item.extra.map(item2 => {
                        const _item2 = props.product.extraAddons.find(aitem => aitem.id === item2)
                        _price += parseFloat(_item2.price)
                        _extra.push(_item2.name)
                        return 0;
                    })
            }}
        let counts = {};
        setExtraList([...new Set(_extra)])
        _extra.forEach(x => { counts[x] = (counts[x] || 0) + 1; });
        setExtra(counts)
        setPrice(_price.toFixed(2))
    },[props.product,props.item])

    return(size?(props.product?
    <div className="cart-item-detail">
        <div className="cart-item-detail-photo">
            <div className="cart-item-detail-image"><img alt="product" src={props.product.imgPath}/></div>
        </div>
        <div className="cart-item-detail-text">
            <div className="cart-item-detail-name">{props.product.name} - {size.size}{size.sizeType} {props.item.crust && <>- {props.item.crust.name}</>}</div>
            <div className="cart-item-detail-price">€ {parseFloat(price).toFixed(2)}</div>
            <div className="cart-item-detail-note">
                <div className="cart-item-detail-note-text">{props.item.note?<><b>Note: </b>{props.item.note}</>:''}</div>
                <div className="cart-item-detail-note-text">{extraList[0]?<><b>Addons: </b>
                    {extra && extraList.map(item=>{
                        return(
                            extra[item]+'x '+item+', ')})}</>:''}</div>
            </div>
        </div>
        {/* <div className="cart-item-detail-quantity">
            <div className="s3-item-cart">{this.props.quantity}</div>
        </div> */}

    </div>:<></>):<></>)
    
}

export default CheckoutItem;
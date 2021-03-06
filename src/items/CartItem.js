import { useEffect, useState } from 'react';

import ModalNote from "../modals/Note";

import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { initCart } from '../redux/slices/cartSlice';
import { changeOneNote, removeProductFromCart } from '../functions/cart';
Modal.setAppElement('#root')

export default function CartItem(props){
    const [modalIsOpenNote,setModalIsOpenNote] = useState(false)
    const [note,setNote] = useState('')
    const [price,setPrice] = useState(0)
    const [extra,setExtra] = useState({})
    const [size,setSize] = useState(0)
    const [extraList,setExtraList] = useState([])
    const dispatch = useDispatch()
    const products = useSelector(state=>state.cart)
    
    useEffect(()=>{
        setNote(props.item.note)
        let _extra = []
        let _price = 0
        if(props.product){
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
    },[products,props.product,props])


    const deleteCartItem = () => {
        removeProductFromCart(dispatch,initCart,products,props.item)
    }
    
    const closer = () => {
        setModalIsOpenNote(false)
    }
    const changeNoteProp = (e) => {
        setNote(e.target.value)
    }
    const changeNote = () => {
        changeOneNote(dispatch,initCart,props.item,note)
    }

        return(props.product?(products?<div className="cart-item-detail">
        <div className="cart-item-detail-photo">
            <div className="cart-item-detail-image"><img alt="product" src={props.product.imgPath}/></div>
            <div className="cart-item-detail-addNote"><button id="change_note" onClick={() => setModalIsOpenNote(true)}><img alt="note icon" src="images/note.svg"/>{props.lang.cart.edit_note}</button></div>
        </div>
        <div className="cart-item-detail-text">
            <div className="cart-item-detail-name">{props.product.name}  - {size.size}{size.sizeType} {props.item.crust && <>- {props.item.crust.name}</>}</div>
            <div className="cart-item-detail-price">??? {price}</div>
            <div className="cart-item-detail-note">
                <div className="cart-item-detail-note-text">{note?<><b>Note: </b>{note}</>:''}</div>
                <div className="cart-item-detail-note-text">{extraList[0]?<><b>Addons: </b> 
                    {extra && extraList.map(item=>{
                        return(
                            ' '+extra[item]+'x '+item+', ')})}</>:''}</div>
                </div>
        </div>
        <div className="cart-item-detail-quantity">
            <button onClick={() => deleteCartItem()}><img alt="bin icon" src="images/bin.svg"/></button>
            <div className="s3-item-cart">{""}</div>
        </div>
        <ModalNote changeNote={changeNote} modalIsOpenNote={modalIsOpenNote} note={note} changeNoteProp={changeNoteProp} closer={closer}/>
    </div>:<></>):<></>)
    
}

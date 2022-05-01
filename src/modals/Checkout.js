import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { getOrderPrice } from '../functions/cart';
import { refreshUserData } from '../redux/slices/userSlice';


Modal.setAppElement('#root')
export default function ModalCheckout(props){
    const [name,setName] = useState('')
    const [telp,setTelp] = useState('')
    const [city,setCity] = useState('')
    const [address,setAddress] = useState('')
    const [note,setNote] = useState('')
    const [waitCheckoutResponse,setWaitCheckoutResponse] = useState(false)
    const [error,setError] = useState('')
    const [district,setDistrict] = useState('')
    const dispatch = useDispatch()

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('User'))
        if(user){
            setName(user.name)
            setTelp(user.telp)
            setCity(user.city)
            setAddress(user.address)
            setNote(user.note)
            setDistrict(user.district)
        }
    },[])
    
    const handleChange = (e) => {
        switch(e.target.name){
            case "name": setName(e.target.value);break;
            case "telp": setTelp(e.target.value);break;
            case "city": setCity(e.target.value);break;
            case "address": setAddress(e.target.value);break;
            case "note": setNote(e.target.value);break;
            case "district": setDistrict(e.target.value);break;
        }
    }
    const submitAddress = () => {
        const user = {
            name:name,
            telp:telp,
            city:city,
            address:address,
            note:note,
            district:district,
            delivery:props.delivery
        }
        dispatch(refreshUserData(user))
        localStorage.setItem("User", JSON.stringify(user));
        getOrderPrice(props.products,user,setWaitCheckoutResponse,props.delivery,200,setError)
    }
        return(
            <Modal 
              isOpen={props.modalIsOpenChck} 
              shouldCloseOnOverlayClick={true} 
              onRequestClose={() => props.closer()}
              closeTimeoutMS={350}
              className={"checkoutNow-modal"}
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
                  <div  id="checkoutNow_dialog" class="modal-dialog">
        {!props.waitCheckoutResponse &&
            <div class="checkoutNow-modal-inner">
                <button class="modal-x" onClick={() => props.closer()}><img alt="close icon" src="images/x.svg"/></button>
                <div class="checkoutNow-modal-title">{props.lang.cart.checkout.choose}</div>
                <button id="current_location" onclick="getLocation();" class="checkoutNow-modal-map"></button>
                    <div class="checkoutNow-modal-info-double">
                        <div class="checkoutNow-modal-info-name">
                        {props.lang.cart.checkout.name}
                            <input placeholder={props.lang.cart.checkout.name_placeholder} value={name} name="name" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div class="checkoutNow-modal-info-telp">
                        {props.lang.cart.checkout.mobile}
                            <input placeholder={props.lang.cart.checkout.mobile_placeholder} value={telp} name="telp" onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    <div class="checkoutNow-modal-info-address" >
                    {props.lang.cart.checkout.city}
                        <input placeholder={props.lang.cart.checkout.city_placeholder} value={city} name="city" onChange={(e) => handleChange(e)}/>
                    </div>
                    <div class="checkoutNow-modal-info-address">
                    {props.lang.cart.checkout.address}
                        <input placeholder={props.lang.cart.checkout.address_placeholder} value={address} name="address" onChange={(e) => handleChange(e)}/>
                     </div>
                     <div class="checkoutNow-modal-info-address">
                     {props.lang.cart.checkout.district}
                        <input placeholder={props.lang.cart.checkout.district_placeholder} value={district} name="district" onChange={(e) => handleChange(e)}/>
                     </div>
                     <div class="checkoutNow-modal-info-address">
                     {props.lang.cart.checkout.note}
                        <input placeholder={props.lang.cart.checkout.note_placeholder} value={note} name="note" onChange={(e) => handleChange(e)}/>
                     </div>
                     {/* <div class="checkoutNow-modal-info-address">
                     {props.lang.cart.checkout.coupon}
                        <input placeholder={props.lang.cart.checkout.coupon_placeholder} value={coupon} name="coupon" onChange={(e) => handleChange(e)}/>
                    </div> */}
                    {error && <div style={{color:'#f00',marginBottom:'15px',textAlign:'center',fontSize:'24px',fontWeight:'800'}}>{error}</div>}
                    {waitCheckoutResponse && <div style={{color:'#523429',marginTop:'25px',display:'flex',justifyContent:'center',fontSize:'24px'}}>{props.lang.cart.checkout.wait}</div>}
                     
                     <div class="checkoutNow-modal-buttons">
                         <button class="checkoutNow-modal-button">{props.lang.cart.checkout.cancel}</button>
                         <button class="checkoutNow-modal-button actived" onClick={() => submitAddress()}>{props.lang.cart.checkout.confirm}</button>
                     </div>
            </div>}
                     
    </div>
            </Modal>

    
        );
}

import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { resetCart } from '../redux/slices/cartSlice';


Modal.setAppElement('#root')
function ModalPayment (props){
    const [modalIsOpenThx,setModalIsOpenThx] = useState(false)
    const dispatch = useDispatch()

    const thanksfor = () => {
        props.closer()
        setModalIsOpenThx(true)
    }

    const finish = () => {
        localStorage.removeItem('Cart')
        dispatch(resetCart())
        window.location.href='/'
    }

    return(
    <>
    <Modal 
            isOpen={props.modalIsOpenPaym} 
            shouldCloseOnOverlayClick={true} 
            onRequestClose={() => props.closer()}
            closeTimeoutMS={350}
            className={"payment-modal"}
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
                <div class="modal fade"  >
                    <button class="modal-x" onClick={() => props.closer()}><img src="images/x.svg"/></button>
            <div  id="payment_dialog" >
                    <div class="payment-modal-inner">
                        <div class="delivery-modal-title">Payment</div>
                        <div class="delivery-modal-title-small">Choose Payment Method</div>





                       <label for="crypto_payment"> 
                           <div class="delivery-option">
                                <div class="delivery-image"><img src="images/crypto.svg"/></div>
                                <div class="delivery-details">
                                    <div class="delivery-details-title">Cryptocurrency</div>
                                    <div class="delivery-details-description">Krypto in eine Pizza</div>
                                </div>
                                <input type="radio" className='payment-radio-button' name="payment_option1" id="crypto_payment" value="crypto_payment" defaultChecked />
                            </div>
                        </label>

                        <label for="kredit_payment"> 
                            <div class="delivery-option">
                                 <div class="delivery-image"><img src="images/kredit.svg"/></div>
                                 <div class="delivery-details">
                                     <div class="delivery-details-title">Kredit Karte / Debit</div>
                                     <div class="delivery-details-description">You Fast respon and 24/7</div>
                                 </div>
                                 <input className='payment-radio-button' type="radio" name="payment_option1" id="kredit_payment" value="kredit_payment"  />
                             </div>
                         </label>

                         <label > 
                            <div class="delivery-option">
                                 <div class="delivery-image"><img src="images/klarna.svg"/></div>
                                 <div class="delivery-details">
                                     <div class="delivery-details-title">Klarna</div>
                                     <div class="delivery-details-description">Klarna zahlung</div>
                                 </div>
                                 <input type="radio" className='payment-radio-button'  name="payment_option1" id="klarna_payment" value="klarna_payment"  />
                             </div>
                         </label>
                         
                         <label for="cash_payment"> 
                            <div class="delivery-option">
                                 <div class="delivery-image"><img src="images/cash.svg"/></div>
                                 <div class="delivery-details">
                                     <div class="delivery-details-title">Payment by Delivery</div>
                                     <div class="delivery-details-description">Zahlen Sie, wenn das Essen kommt</div>
                                 </div>
                                 <input type="radio" className='payment-radio-button' name="payment_option1" id="cash_payment" value="cash_payment"  />
                             </div>
                         </label>





                         <div class="checkoutNow-modal-info-addres">
                            Cashback Code
                            <input placeholder="Füge deinen Chargeback-Code"/>
                            <div class="checkoutNow-modal-info-smaller-double">
                                <div class="checkoutNow-modal-info-smaller-left">Noch kein Chargeback Kunde?</div>
                                <div class="checkoutNow-modal-info-smaller-right"><a><u>Hier Anmelden</u></a></div>
                            </div>
                        </div>
                        <div class="s1-cart-summary-modal">
                            <div class="s1-cart-summary-title">Payment Summary</div>
                            <div class="s1-cart-summary-price">
                                <div class="s1-cart-summary-price-left">Price ({props.products.length} items)</div>
                                <div class="s1-cart-summary-price-right">€ {props.price}</div>
                            </div>
                            {props.delivery ? <><div className="s1-cart-summary-price">
                                    <div className="s1-cart-summary-price-left">Delivery Fee</div>
                                    <div className="s1-cart-summary-price-right">€ {3.99}</div>
                                </div> </> : <></>}
                            <div class="s1-cart-summary-total">
                                <div class="s1-cart-summary-total-left">Total</div>
                                <div class="s1-cart-summary-total-right">€ {parseFloat(props.price) + parseFloat((props.delivery? 3.99:0).toFixed(2))}</div>
                        </div>
                        <button id="payment_go" class="checkout-now-button" onClick={()=>{thanksfor()}}>Next</button>
                    </div>
                </div>
            </div>
          </div>
          </Modal>

          <Modal 
            isOpen={modalIsOpenThx} 
            shouldCloseOnOverlayClick={true} 
            onRequestClose={() => setModalIsOpenThx(false)}
            closeTimeoutMS={350}
            className={"thx-modal"}
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
                <div class="modal fade"  >
                    <button class="modal-x" onClick={() => setModalIsOpenThx(false)}><img src="images/x.svg"/></button>
            <div  id="payment_dialog" >
                    <div class="thx-modal-inner">
                        <div style={{fontSize:"44px",color:"#0c0",textAlign:"center"}}>Thanks for Purshare!</div>
                        <button id="payment_go" class="checkout-now-button" onClick={()=>{finish()}}>Finish</button>


                </div>
            </div>
          </div>
          </Modal>
            </>
        );
}

export default ModalPayment;
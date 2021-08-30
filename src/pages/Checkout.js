import react from "react";

import ModalNote from "../Modals/Note"
import ModalPayment from "../Modals/Payment"
import ModalCheckout from "../Modals/Checkout"

import Modal from 'react-modal';
Modal.setAppElement('#root')


class Checkout extends react.Component {
    constructor(props){
        super(props)
        this.state={
            modalIsOpenPaym: false,
            modalIsOpenNote: false,
            modalIsOpenChck: false
        }
    }

    closer = () => {
        this.setState({modalIsOpenNote: false, modalIsOpenChck: false, modalIsOpenPaym: false})
    }

    render(){
  return (

   <div>

<       div className="section1-item">
            <div className="section1-item-inner">
                <div className="history-head">
                    <div className="history-head-left">Order id “<b>#1290</b>”</div>
                    <div className="history-head-right">Sunday, 24 April 2021 | 19:20:02</div>
                </div>
                <div className="s1-cart">
                    <div className="s1-cart-left">
                        
                        <div className="user-data">
                            <div className="user-data-head">Delivery Address</div>
                            <div className="user-data-details">
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">Name</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">JohnDoe (Apartment)</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">Telp Number</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">+62 219-1209-1029</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">City</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">Vienna</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">Address</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">21 District Vienna, Sun City, 2910</div>
                                </div>
                            </div>
                        </div>
                        <button id="checkoutNow" className="change-address-button" onClick={() => this.setState({modalIsOpenChck: true})}>Change Address</button>
                        <div className="s1-cart-left-list">
                                <div className="cart-item-detail">
                                    <div className="cart-item-detail-photo">
                                        <div className="cart-item-detail-image"><img src="images/risotto.webp"/></div>
                                        <div className="cart-item-detail-addNote"><button id="change_note" onClick={() => this.setState({modalIsOpenNote: true})}><img src="images/note.svg"/>Add Note</button></div>
                                    </div>
                                    <div className="cart-item-detail-text">
                                        <div className="cart-item-detail-name">Italian Risotto</div>
                                        <div className="cart-item-detail-price">€ 30.00</div>
                                        <div className="cart-item-detail-note">
                                            <div className="cart-item-detail-note-text"></div>
                                        </div>
                                    </div>
                                </div>
                                 <div className="cart-item-detail">
                                    <div className="cart-item-detail-photo">
                                        <div className="cart-item-detail-image"><img src="images/combo1.webp"/></div>
                                        <div className="cart-item-detail-addNote"><button id="change_note"><img src="images/note.svg"/>Add Note</button></div>
                                    </div>
                                    <div className="cart-item-detail-text">
                                        <div className="cart-item-detail-name">Pizza + Pepsi (Company Offer 1)</div>
                                        <div className="cart-item-detail-price">€ 30.00</div>
                                        <div className="cart-item-detail-note">Note :
                                            <div className="cart-item-detail-note-text">
                                                Please add a little chilli powder in there and add some mayonese too
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="cart-item-detail">
                                    <div className="cart-item-detail-photo">
                                        <div className="cart-item-detail-image"><img src="images/combo2.webp"/></div>
                                        <div className="cart-item-detail-addNote"><button id="change_note"><img src="images/note.svg"/>Add Note</button></div>
                                    </div>
                                    <div className="cart-item-detail-text">
                                        <div className="cart-item-detail-name">Johny Walker + 2x1,5L + 1 Pizza (33 cm) </div>
                                        <div className="cart-item-detail-price">€ 30.00</div>
                                        <div className="cart-item-detail-note">Note :
                                            <div className="cart-item-detail-note-text">
                                                Please add a little chilli powder in there and add some mayonese too
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="cart-item-detail">
                                    <div className="cart-item-detail-photo">
                                        <div className="cart-item-detail-image"><img src="images/vodka.webp"/></div>
                                        <div className="cart-item-detail-addNote"><button id="change_note"><img src="images/note.svg"/>Add Note</button></div>
                                    </div>
                                    <div className="cart-item-detail-text">
                                        <div className="cart-item-detail-name">Vodka 1L</div>
                                        <div className="cart-item-detail-price">€ 30.00</div>
                                        <div className="cart-item-detail-note">
                                            <div className="cart-item-detail-note-text">
                                            </div>
                                        </div>
                                </div>
                        </div>


                    </div>
                    </div>

                    <div className="s1-cart-right">
                        <div className="s1-cart-right-inner-checkout">
                            <div className="s1-cart-checkout">
                                    <img src="images/delivery.svg"/> Delivery Order
                            </div>
                            <div className="s1-cart-checkout-info">Estimate Time : 1hours 10minutes</div>
                            <div className="s1-cart-summary">
                                <div className="s1-cart-summary-title">Payment Summary</div>
                                <div className="s1-cart-summary-price">
                                    <div className="s1-cart-summary-price-left">Price (10 items)</div>
                                    <div className="s1-cart-summary-price-right">€ 120.32</div>
                                </div>
                                <div className="s1-cart-summary-price">
                                    <div className="s1-cart-summary-price-left">Delivery Fee</div>
                                    <div className="s1-cart-summary-price-right">€ 3.00</div>
                                </div>
                                <div className="s1-cart-summary-total">
                                    <div className="s1-cart-summary-total-left">Total</div>
                                    <div className="s1-cart-summary-total-right">€ 123.32</div>
                            </div>
                            <button id="payment" className="checkout-now-button" onClick={() => this.setState({modalIsOpenPaym: true})}>Choose Payment</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    
    </div>

    <Modal 
        isOpen={this.state.modalIsOpenChck} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.closer()}
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
            <ModalCheckout closer = { this.closer }/>
      </Modal>


    <Modal 
        isOpen={this.state.modalIsOpenNote} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.closer()}
        closeTimeoutMS={350}
        className={"modal-dialog"}
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
            <ModalNote closer = { this.closer }/>
      </Modal>

      <Modal 
        isOpen={this.state.modalIsOpenPaym} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.closer()}
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
            <ModalPayment closer = { this.closer }/>
      </Modal>




    </div>
);}
}

export default Checkout;
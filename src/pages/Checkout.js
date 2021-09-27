import react from "react";
import CheckoutItem from "./Items/CheckoutItem";

import ModalPayment from "../Modals/Payment"
import ModalCheckout from "../Modals/Checkout"

import Modal from 'react-modal';
Modal.setAppElement('#root')


class Checkout extends react.Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            telp: '',
            city: '',
            address: '',
            note: '',
            delivery: null,

            modalIsOpenPaym: false,
            modalIsOpenChck: false,
            checkout: false
        }
    }
    
    componentDidMount = () => {
        if (JSON.parse(localStorage.getItem('Address'))){
            this.setState({checkout: true })
            const address = JSON.parse(localStorage.getItem('Address'))
            this.setState({name: address.name,
                            telp: address.telephone,
                            city: address.city,
                            address: address.address,
                        note: address.note,
                    delivery: address.delivery})
        }
        else{this.setState({checkout: false });window.location.href="cart"; }
    }

    closer = () => {
        this.setState({modalIsOpenNote: false, modalIsOpenChck: false, modalIsOpenPaym: false})
    }

    render(){
  return (

   <div>
       {this.state.checkout && <>
  < div className="section1-item">
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
                                    <div className="user-data-detail-3">{this.state.name}</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">Telp Number</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">{this.state.telp}</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">City</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">{this.state.city}</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">Address</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">{this.state.address}</div>
                                </div>
                                <div className="user-data-detail">
                                    <div className="user-data-detail-1">Note</div>
                                    <div className="user-data-detail-2">:</div>
                                    <div className="user-data-detail-3">{this.state.note}</div>
                                </div>
                            </div>
                        </div>
                        <button id="checkoutNow" className="change-address-button" onClick={() => this.setState({modalIsOpenChck: true})}>Change Address</button>
                        <div className="s1-cart-left-list">
                        {this.props.products &&
					            this.props.products.map((item,index) => (
                               
						        <CheckoutItem 
                                note={item.note}
                                number={index}
                                id={item.id}
                                name={item.name}
                                price={item.price}
								symbol={item.coin_symbol}
								image={item.image} 
								quantity={item.quantity}/>
                                ))}



                    </div>
                    </div>

                    <div className="s1-cart-right">
                        <div className="s1-cart-right-inner-checkout">
                            <div className="s1-cart-checkout">
                            <div className="s1-cart-delivery-info">
                                    <img src={this.state.delivery ? "images/delivery.svg" : "images/pickup.svg"}/> {this.state.delivery ? "Delivery Order" : "Pickup Order"}
                                </div>
                            </div>
                            <div className="s1-cart-checkout-info">Estimate Time : 1hours 10minutes</div>
                            <div className="s1-cart-summary">
                                <div className="s1-cart-summary-title">Payment Summary</div>
                                <div className="s1-cart-summary-price">
                                    <div className="s1-cart-summary-price-left">Price ({this.props.products.length} items)</div>
                                    <div className="s1-cart-summary-price-right">€ {this.props.totalPrice}</div>
                                </div>
                                {this.state.delivery ? <><div className="s1-cart-summary-price">
                                    <div className="s1-cart-summary-price-left">Delivery Fee</div>
                                    <div className="s1-cart-summary-price-right">€ {this.props.deliveryPrice}</div>
                                </div> </> : <></>}
                                
                                <div className="s1-cart-summary-total">
                                    <div className="s1-cart-summary-total-left">Total</div>
                                    <div className="s1-cart-summary-total-right">€ {this.props.totalPrice+ (this.state.delivery ? this.props.deliveryPrice : 0)}</div>
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
            <ModalCheckout address={this.props.address} changeAddress={this.props.changeAddress}  closer = { this.closer }/>
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
            <ModalPayment deliveryPrice={this.props.deliveryPrice} price={this.props.totalPrice} quantity={this.props.products.length} delivery={this.state.delivery} closer = { this.closer }/>
      </Modal>

</>
    }

    </div>
);}
}

export default Checkout;
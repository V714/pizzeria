import react from "react";
import CartItem from '../Items/CartItem';
import {cartData} from '../../data/cartData';
import ModalDelivery from "../../Modals/Delivery";
import ModalCheckout from "../../Modals/Checkout";

import Modal from 'react-modal';
Modal.setAppElement('#root')


class Section1 extends react.Component{
    constructor(props){
        super(props)
        this.state={
            modalIsOpenDeli: false,
            modalIsOpenChck: false,
            delivery: true,
            database: []
        }
    }

    async componentDidMount() {
		this.setState({
			database: await this.getCartDatabase()
		})
	}
    getCartDatabase = async () => {
		return new Promise(function (resolve, reject) {
			setTimeout(() => {
				resolve(cartData())
			}, 100)
		})
	}

    closer = () => {
        this.setState({modalIsOpenDeli: false, modalIsOpenChck: false})
    }

    render(){
    return(
        <div className="section1-item">
            <div className="section1-item-inner">
                <div className="page-links">
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a className="actual"><img src="images/right-vector.svg"/>Shopping Cart</a></li>
                    </ul>
                </div>

                <div className="s1-cart">
                    <div className="s1-cart-left">
                        <div className="s1-cart-left-title">Shopping Cart</div>

                        <div className="s1-cart-left-list">

                                {this.state.database &&
					            this.state.database.map((item) => (
                                <label className="checkboxLabel"><input name="cart-item" type="checkbox" onclick="checkToggle(this)" /> <span className="checkmark"></span>
						        <CartItem name={item.name}
                                price={item.price}
                                note={item.note}
								  symbol={item.coin_symbol}
								  image={item.image} 
								  quantity={item.quantity}/>
                                  </label>
                                ))}

                        </div>
                    </div>

                    <div className="s1-cart-right">
                        <div className="s1-cart-right-inner">
                            <div className="s1-cart-delivery">
                                <div className="s1-cart-delivery-info">
                                    <img src="images/delivery.svg"/> Delivery Order
                                </div>
                                <button id="change_delivery" className="delivery-change-button" onClick={() => this.setState({modalIsOpenDeli: true})}>Change</button>
                            </div>
                            <div className="s1-cart-summary">
                                <div className="s1-cart-summary-title">Payment Summary</div>
                                <div className="s1-cart-summary-price">
                                    <div className="s1-cart-summary-price-left">Price (10 items)</div>
                                    <div className="s1-cart-summary-price-right">€ 120.32</div>
                                </div>
                                <div className="s1-cart-summary-total">
                                    <div className="s1-cart-summary-total-left">Total</div>
                                    <div className="s1-cart-summary-total-right">€ 123.32</div>
                            </div>
                            <button id="checkoutNow" className="checkout-now-button" onClick={() => this.setState({modalIsOpenChck: true})} >Checkout Now</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <Modal 
        isOpen={this.state.modalIsOpenDeli} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.closer()}
        closeTimeoutMS={350}
        className={"delivery-modal"}
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
            <ModalDelivery closer = { this.closer }/>
      </Modal>


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


     

        </div>
    );}
}

export default Section1;
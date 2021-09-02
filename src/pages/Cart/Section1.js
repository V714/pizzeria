import react from "react";
import CartItem from '../Items/CartItem';
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
            delivery: true
        }
    }


    closer = () => {
        this.setState({modalIsOpenDeli: false, modalIsOpenChck: false})
    }

    render(){
    return(
        <div className="section1-item">
            {this.props.products.length > 0 && <div className="section1-item-inner">
                <div className="page-links">
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a className="actual"><img src="images/right-vector.svg"/>Shopping Cart</a></li>
                    </ul>
                </div>

                <div className="s1-cart">
                    <div className="s1-cart-left">
                        <div className="s1-cart-left-title">Shopping Cart</div>

                        <div className="s1-cart-left-list">

                                {this.props.products &&
					            this.props.products.map((item,index) => (
                                <CartItem products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} deleteProduct={this.props.deleteProduct}
                                number={index}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                note={item.note}
								  symbol={item.coin_symbol}
								  image={item.image} 
								  quantity={item.quantity}
                                  extras={item.extras}/>
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
                                    <div className="s1-cart-summary-price-left">Price ({this.props.products.length} items)</div>
                                    <div className="s1-cart-summary-price-right">€ {this.props.totalPrice}</div>
                                </div>
                                <div className="s1-cart-summary-total">
                                    <div className="s1-cart-summary-total-left">Total</div>
                                    <div className="s1-cart-summary-total-right">€ {this.props.totalPrice+3}</div>
                            </div>
                            <button id="checkoutNow" className="checkout-now-button" onClick={() => this.setState({modalIsOpenChck: true})} >Checkout Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

}
{this.props.products.length <= 0 && <div className="section1-item-inner">
    <div className="s1-cart" style={{justifyContent: "center"}}>
                    <div className="s1-cart-left">
                        <div className="s1-cart-left-title">Shopping Cart is Empty</div>
</div></div></div>
}
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
            <ModalCheckout address={this.props.address} changeAddress={this.props.changeAddress} closer = { this.closer }/>
      </Modal>


     

        </div>
    );}
}

export default Section1;
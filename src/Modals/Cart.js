

import react from 'react';

class ModalCart extends react.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div className="notification-modal">
        <div className="notification-modal-inner">
            <div className="fm-head">
                <div className="fm-head-left">Cart ({this.props.products.length}): {this.props.totalPrice}€</div>
                <div className="fm-head-right"><a href="cart">View all</a></div>
            </div>
            <div className="cart-list">
                <ul>
                {this.props.products &&
					            this.props.products.map((item) => (
                                    <li>
                                    <div className="cart-element-inner">
                                        <div className="cart-element-left"><img src={item.imgPath}/>
                                            <div className="cart-element-details">
                                                <div className="cart-element-name">{item.name}</div>
                                                
                                                {item.quantity > 1 &&   <div className="cart-element-quantity">  {item.quantity} Items</div>}
                                            </div>
                                        </div>
                                        <div className="cart-element-right">€ {item.price}</div>
                                    </div>
                                </li>
                                ))}
                    
                </ul>
            </div>
            <a href="cart" className="checkout-now-button">Checkout Now</a>
        </div>
    </div>
 
    );
}}

export default ModalCart;
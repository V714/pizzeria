
import {cartData} from '../data/cartData';
import react from 'react';

class ModalCart extends react.Component{
    constructor(props){
        super(props)
        this.state={
            database: []
        }
    }

    async componentDidMount() {
		this.setState({
			database: await this.getCartDatabase()
		})
	}
    getCartDatabase = async () => {
		return cartData;
	}
    render(){
    return(
        <div className="notification-modal">
        <div className="notification-modal-inner">
            <div className="fm-head">
                <div className="fm-head-left">Cart ({this.state.database.length})</div>
                <div className="fm-head-right"><a>View all</a></div>
            </div>
            <div className="cart-list">
                <ul>
                {this.state.database &&
					            this.state.database.map((item) => (
                                    <li>
                                    <div className="cart-element-inner">
                                        <div className="cart-element-left"><img src={item.image}/>
                                            <div className="cart-element-details">
                                                <div className="cart-element-name">{item.name}</div>
                                                <div className="cart-element-quantity">{item.quantity} Items</div>
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
import react from 'react';

class CheckoutItem extends react.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<div className="cart-item-detail">
        <div className="cart-item-detail-photo">
            <div className="cart-item-detail-image"><img src={this.props.image}/></div>
        </div>
        <div className="cart-item-detail-text">
            <div className="cart-item-detail-name">{this.props.name} - {this.props.size}</div>
            <div className="cart-item-detail-price">€ {this.props.price}</div>
            <div className="cart-item-detail-note">
                <div className="cart-item-detail-note-text">{this.props.note}</div>
                <div className="cart-item-detail-note-text">{this.props.extras}</div>
            </div>
        </div>
        <div className="cart-item-detail-quantity">
            <div className="s3-item-cart">{this.props.quantity}</div>
        </div>

    </div>)
    }
}

export default CheckoutItem;
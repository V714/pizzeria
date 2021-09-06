import react from "react";

class OffersItem extends react.Component{
    constructor(props){
        super(props)
        this.state={
            quantity: 1
        }
    }
    
    quantityPlus = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }
    quantityMinus = () => {
        if(this.state.quantity > 1){
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }
    render(){
        return(
            <li className="s4-item-element">
                        <div className="s4-item-element-inner">
                            <div className="s4-item-photo"><img src={this.props.image}/></div>
                            <div className="s4-item-info">{this.props.info}</div>
                            <div className="s4-item-details">
                                <div className="s4-item-name-promo">
                                    <div className="s4-item-name">{this.props.name}</div>
                                    <div className="s4-item-promo">{this.props.details}</div>
                                </div>
                                <div className="s4-item-price">€ {this.props.price}</div>
                            </div>
                            
            <div className="magic-buttons"><div className="s3-item-cart"><button onClick={() => this.quantityMinus()}><img src="images/minus.svg"/></button>{this.state.quantity}<button onClick={() => this.quantityPlus()}><img src="images/plus.svg"/></button>
            </div>
                    <button className="s3-add-to-cart" 
                     onClick={() => this.props.addProduct({
        
                        id: this.props.id,
                        name: this.props.name,
                        image: this.props.image,
                        price: this.props.price,
                        note: this.props.note,
                        quantity: this.state.quantity})}
                        
                        > <img src="images/cart-white.svg"/>Add to Cart </button>
               </div> </div>
                    </li>
        );
    }
}

export default OffersItem;
import react from "react";

class OffersItem extends react.Component{
    render(){
        return(
            <li className="s4-item-element">
                        <div className="s4-item-element-inner">
                            <div className="s4-item-photo"><img src={this.props.image}/></div>
                            <div className="s4-item-info">{this.props.info}</div>
                            <div className="s4-item-details">
                                <div className="s4-item-name-promo">
                                    <div className="s4-item-name">{this.props.name}</div>
                                    <div className="s4-item-promo">{this.props.promo}</div>
                                </div>
                                <div className="s4-item-price">€ {this.props.price}</div>
                            </div>
                            
                            <div className="magic-buttons"><div className="s3-item-cart"><button ><img src="images/minus.svg"/></button>4<button ><img src="images/plus.svg"/></button>
                        </div>
                    <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
               </div> </div>
                    </li>
        );
    }
}

export default OffersItem;
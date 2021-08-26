import react from "react";

class ComboItem extends react.Component{
    render(){
        return(
            <div className="s2-combo-item">
            <div className="s2-menu-all-content">
                <img className="s2-img-menu-item" src={this.props.image}/>
                <div className="s2-menu-item-content">
                    <div className="s2-menu-item-title">Combos {this.props.index}</div>
                    <div className="s2-menu-item-name">{this.props.name}</div>
                    <div className="s2-menu-item-price">€ {this.props.price}</div>
                    <div className="magic-buttons"><div className="s3-item-cart"><button ><img src="images/minus.svg"/></button>4<button ><img src="images/plus.svg"/></button>
                </div>
            <button className="s3-add-to-cart"> <img src="images/cart-white.svg"/>Add to Cart </button>
       </div></div>
            </div>
        </div>
        );
    }
}

export default ComboItem;
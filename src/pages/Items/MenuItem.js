import react from "react";
import { addToCart } from "../../data/cartData";

class PizzaItem extends react.Component{
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
    closer = () => {
        this.setState({modalIsOpenIngr: false})
    }

    render(){
        return(
            <div className="s3-item">
            <div className="s3-item-image"><img src={this.props.image}/></div>
            <div className="s3-item-name">{this.props.name}</div>
            <div className="s3-item-price">
                <div className="s3-item-price-cost">€ {this.props.price}</div>
                <div className="s3-item-price-rating"><img src="images/star.svg"/>{this.props.rating}</div>
            </div>
            <div className="s3-item-details">{this.props.details}</div>
            <div className="magic-buttons"><div className="s3-item-cart"><button onClick={() => this.quantityMinus()}><img src="images/minus.svg"/></button>{this.state.quantity}<button onClick={() => this.quantityPlus()}><img src="images/plus.svg"/></button>
            </div>
        <button className="s3-add-to-cart" onClick={() => addToCart(this.props.id,this.props.name,this.props.image,this.props.price,this.props.note,this.state.quantity)}
 > <img src="images/cart-white.svg"/>Add to Cart </button>
   </div>
   

      </div>
        );
    }
}

export default PizzaItem;
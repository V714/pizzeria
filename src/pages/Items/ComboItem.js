import react from "react";

class ComboItem extends react.Component{
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
            <div className="s2-combo-item">
            <div className="s2-menu-all-content">
                <img className="s2-img-menu-item" src={this.props.image}/>
                <div className="s2-menu-item-content">
                    <div className="s2-menu-item-title">Combos {this.props.index}</div>
                    <div className="s2-menu-item-name">{this.props.name}</div>
                    <div className="s2-menu-item-price">€ {this.props.price}</div>
            <div className="magic-buttons"><div className="s3-item-cart"><button onClick={() => this.quantityMinus()}><img src="images/minus.svg"/></button>{this.state.quantity}<button onClick={() => this.quantityPlus()}><img src="images/plus.svg"/></button>
            </div>
            <button className="s3-add-to-cart"  onClick={() => this.props.addProduct({

                id: this.props.id,
                name: this.props.name,
                image: this.props.image,
                price: this.props.price,
                note: this.props.note,
                quantity: this.state.quantity})}
            > <img src="images/cart-white.svg"/>Add to Cart </button>
       </div></div>
            </div>
        </div>
        );
    }
}

export default ComboItem;
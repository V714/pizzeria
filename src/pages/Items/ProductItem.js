import react from "react";

class ProductItem extends react.Component{
    constructor(props){
        super(props)
        this.state={
            quantity: 1,
            size: this.props.sizes[0].size,
            price: this.props.sizes[0].price
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

    pizzaSize = (size) => {
        this.setState({size: size, price: this.props.sizes.find(item => item.size === size).price})
    }

    selectButtonStyle = (size) => {
        if(this.state.size === size){return "size-button picked-size"}
        else{return "size-button"}
    }
    render(){
        return(
            <div className="s3-item">
            <div className="s3-item-image"><img src={this.props.image}/></div>
            <div className="s3-item-name">{this.props.name} {this.props.sizes.length===1 && "("+this.props.sizes[0].size+" "+this.props.sizes[0].sizeType+")"}</div>
            <div className="s3-item-price">
                <div className="s3-item-price-cost">€ {this.state.price}</div>
                <div className="s3-item-price-rating"><img src="images/star.svg"/>{this.props.rating}</div>
            </div>
            <div className="s3-item-details">{this.props.description}</div>
            <div className="s3-item-size">
                {this.props.sizes.length>1 && this.props.sizes.map(item => {
                   return( <button onClick={() => this.pizzaSize(item.size)} className={this.selectButtonStyle(item.size)} >{item.size}{item.sizeType}</button>)

                    })}
            </div>
            <div className="magic-buttons"><div className="s3-item-cart"><button onClick={() => this.quantityMinus()}><img src="images/minus.svg"/></button>{this.state.quantity}<button onClick={() => this.quantityPlus()}><img src="images/plus.svg"/></button>
            </div>
        <a className="s3-add-to-cart" href={"details?id="+this.props.id+"&size="+this.state.size}> <img src="images/cart-white.svg"/>Add to Cart </a>
   </div>
   
   

   
      
      
      </div>
        );
    }
}

export default ProductItem;
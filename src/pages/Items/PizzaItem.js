import react from "react";

const size = "size-button";
const sizePicked = "size-button picked-size";

class PizzaItem extends react.Component{
    constructor(props){
        super(props)
        this.state={
            quantity: 1,
            size1: false,
            size2: true,
            size3: false,
            size: 2
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
    pizzaSize = (sizeNumber) => {
        this.setState({size1 : false,size2 : false,size3 : false})
        switch(sizeNumber){
            case 1:
                this.setState({size1 : true})
                this.setState({size : 1})
                break;
            case 2:
                this.setState({size2 : true})
                this.setState({size : 2})
                break;
            case 3:
                this.setState({size3 : true})
                this.setState({size : 3})
                break;
        }
        
    }

    render(){
        return(
            <div className="s3-item">
            <div className="s3-item-image"><img src={this.props.image}/></div>
            <div className="s3-item-name">{this.props.name}</div>
            <div className="s3-item-price">
                <div className="s3-item-price-cost">€ {this.props.price[this.state.size-1]}</div>
                <div className="s3-item-price-rating"><img src="images/star.svg"/>{this.props.rating}</div>
            </div>
            <div className="s3-item-details">{this.props.details}</div>
            <div className="s3-item-size">
                <button onClick={() => this.pizzaSize(1)} className={this.state.size1 ? sizePicked : size}>33cm</button>
                <button onClick={() => this.pizzaSize(2)} className={this.state.size2 ? sizePicked : size}>40cm</button>
                <button onClick={() => this.pizzaSize(3)} className={this.state.size3 ? sizePicked : size}>55cm</button>
            </div>
            <div className="magic-buttons"><div className="s3-item-cart"><button onClick={() => this.quantityMinus()}><img src="images/minus.svg"/></button>{this.state.quantity}<button onClick={() => this.quantityPlus()}><img src="images/plus.svg"/></button>
            </div>
        <a className="s3-add-to-cart" href={"details?id="+this.props.id+"&size="+this.state.size}> <img src="images/cart-white.svg"/>Add to Cart </a>
   </div>
   
   

   
      
      
      </div>
        );
    }
}

export default PizzaItem;
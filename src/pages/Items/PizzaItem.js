import react from "react";

import Modal from 'react-modal';
import ModalIngredients from '../../Modals/Ingredients';
Modal.setAppElement('#root')

const size = "size-button";
const sizePicked = "size-button picked-size";

class PizzaItem extends react.Component{
    constructor(props){
        super(props)
        this.state={
            modalIsOpenIngr: false,
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
                <div className="s3-item-price-cost">€ {this.props.price}</div>
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
        <button className="s3-add-to-cart" onClick={() => this.setState({modalIsOpenIngr: true})
} > <img src="images/cart-white.svg"/>Add to Cart </button>
   </div>
   
   

   <Modal 
        isOpen={this.state.modalIsOpenIngr} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.setState({modalIsOpenIngr: false})}
        closeTimeoutMS={350}
        className={"ingredients_dialog"}
        style={{
          overlay: {
            position: 'fixed',
            transition: 'all 0.4s ease-in-out',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 9999
          }
        }}>
            <ModalIngredients 
                closer = {this.closer} 
                size={this.state.size}
                id={this.props.id}
                name={this.props.name}
                image={this.props.image}
                price={this.props.price}
                quantity={this.state.quantity}/>
      </Modal>
      
      
      </div>
        );
    }
}

export default PizzaItem;
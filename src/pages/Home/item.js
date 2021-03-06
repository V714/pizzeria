import react from "react";

import Modal from 'react-modal';
import ModalIngredients from '../../Modals/Ingredients';
Modal.setAppElement('#root')

class ProductItem extends react.Component{
    constructor(props){
        super(props)
        this.state={
            modalIsOpenIngr: false
        }
    }
    closer = () => {
        this.setState({modalIsOpenIngr: false})
    }

    render(){
        return(
            <div className="s3-item">
            <div className="s3-item-image"><img alt="item" src="images/item1.webp"/></div>
            <div className="s3-item-name">{this.props.name}</div>
            <div className="s3-item-price">
                <div className="s3-item-price-cost">€ {this.props.price}</div>
                <div className="s3-item-price-rating"><img alt="star icon" width="16" height="16"  src="images/star.svg"/>{this.props.rating}</div>
            </div>
            <div className="s3-item-details">{this.props.description}</div>
            <div className="s3-item-size">
                <button onclick="selectSize(this)" className="size-button">33cm</button>
                <button onclick="selectSize(this)" className="size-button active">40cm</button>
                <button onclick="selectSize(this)" className="size-button">55cm</button>
            </div>
            <div className="magic-buttons"><div className="s3-item-cart"><button ><img alt="minus icon" src="images/minus.svg"/></button>4<button ><img alt="plus icon" src="images/plus.svg"/></button>
            </div>
        <button className="s3-add-to-cart" onClick={() => this.setState({modaIsOpenIngr: true})
} > <img alt="cart icon" width="24" height="24" src="images/cart-white.svg"/>Add to Cart </button>
   </div>
   
   

   <Modal 
        isOpen={this.state.modaIsOpenIngr} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.setState({modaIsOpenIngr: false})}
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
            <ModalIngredients allProducts={this.props.allProducts} closer = {this.closer}/>
      </Modal>
      
      
      </div>
        );
    }
}

export default ProductItem;
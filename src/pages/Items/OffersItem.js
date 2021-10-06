import react from "react";
import ModalIngredients from '../../Modals/Ingredients';
import Modal from 'react-modal';
Modal.setAppElement('#root')


class OffersItem extends react.Component{
    constructor(props){
        super(props)
        this.state={
            quantity: 1,
            modalIsOpenIngr: false
        }
    }
    
    closer = () => {
        this.setState({modalIsOpenIngr: false})
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
                            <div className="s4-item-photo"><img src=""/></div>
                            <div className="s4-item-info">Package {this.props.index}</div>
                            <div className="s4-item-details">
                                <div className="s4-item-name-promo">
                                    <div className="s4-item-name">{this.props.item.packageName}</div>
                                    <div className="s4-item-promo">{this.props.description}</div>
                                </div>
                                <div className="s4-item-price">€ {this.props.item.price}</div>
                            </div>
                            
            <div className="magic-buttons-offers">
                    <button className="s3-add-to-cart" 
                     onClick={() => this.setState({modalIsOpenIngr: true})}
                    
                        
                        > <img src="images/cart-white.svg"/>Add to Cart </button>
               </div> </div>

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
            <ModalIngredients allProducts={this.props.allProducts}
            addProduct = {this.props.addProduct}
                closer = {this.closer} 
                item={this.props.item}/>
      </Modal>
                    </li>
        );
    }
}

export default OffersItem;
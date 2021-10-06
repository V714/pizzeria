import react from "react";
import ModalIngredients from '../../Modals/Ingredients';
import Modal from 'react-modal';
Modal.setAppElement('#root')


class ComboItem extends react.Component{
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
            <div className="s2-combo-item">
            <div className="s2-menu-all-content">
                <img className="s2-img-menu-item" src={this.props.item.imgPath}/>
                <div className="s2-menu-item-content">
                    <div className="s2-menu-item-title">Combos {this.props.index}</div>
                    <div className="s2-menu-item-name">{this.props.item.packageName}</div>
                    <div className="s2-menu-item-price">€ {this.props.item.price}</div>
            <div className="magic-buttons"><div className="s3-item-cart"><button onClick={() => this.quantityMinus()}><img src="images/minus.svg"/></button>{this.state.quantity}<button onClick={() => this.quantityPlus()}><img src="images/plus.svg"/></button>
            </div>
            <button className="s3-add-to-cart"  onClick={() => this.setState({modalIsOpenIngr: true})}
            > <img src="images/cart-white.svg"/>Add to Cart </button>
       </div></div>
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
            <ModalIngredients allProducts={this.props.allProducts}
            addProduct = {this.props.addProduct}
                closer = {this.closer} 
                item={this.props.item}/>
      </Modal>
        </div>
        );
    }
}

export default ComboItem;
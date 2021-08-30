import react from 'react';

import ModalNote from "../../Modals/Note";

import Modal from 'react-modal';
Modal.setAppElement('#root')

class CartItem extends react.Component{
    constructor(props){
        super(props)
        this.state={
            modalIsOpenNote: false,
            note: this.props.note
        }
    }
    
    closer = () => {
        this.setState({ modalIsOpenNote: false})
    }
    changeNote = (e) => {
        this.setState({note: e.target.value})
    }

    render(){
        return(<div className="cart-item-detail">
        <div className="cart-item-detail-photo">
            <div className="cart-item-detail-image"><img src={this.props.image}/></div>
            <div className="cart-item-detail-addNote"><button id="change_note" onClick={() => this.setState({modalIsOpenNote: true})}><img src="images/note.svg"/>Add Note</button></div>
        </div>
        <div className="cart-item-detail-text">
            <div className="cart-item-detail-name">{this.props.name}</div>
            <div className="cart-item-detail-price">€ {this.props.price}</div>
            <div className="cart-item-detail-note">
                <div className="cart-item-detail-note-text">{this.state.note}</div>
            </div>
        </div>
        <div className="cart-item-detail-quantity">
            <button onclick="deleteCartItem(this)"><img src="images/bin.svg"/></button>
            <div className="s3-item-cart">{this.props.quantity}</div>
        </div>
        <Modal 
        isOpen={this.state.modalIsOpenNote} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.closer()}
        closeTimeoutMS={350}
        className={"modal-dialog"}
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
            <ModalNote closer = { this.closer } changeNote={this.changeNote} note={this.state.note}/>
      </Modal>
    </div>)
    }
}

export default CartItem;
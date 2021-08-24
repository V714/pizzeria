import react from 'react';


class ModalBTC extends react.Component{
    render(){
        return(
            <div class="modal-dialog">
        <div class="bitcoin-modal">
            <button class="modal-x" onClick={() => this.props.closer()}><img src="images/x.svg"/></button>
            <div class="feedback-modal-inner">
                <div class="bitcoin-modal-images">
                    <img class="bitcoin-modal-imgs" src="images/bitcoin.webp"/>
                    <img class="bitcoin-modal-imgs" src="images/double-arrow.svg"/>
                    <img class="bitcoin-modal-imgs" src="images/pizza.svg"/>
                </div>
                <div class="modal-title">Hey! Have you ever seen a crypto turn into a slice of pizza?</div>
                <div class="modal-bitcoin-description">Jetzt akzeptieren wir Zahlungen per Kryptowährungen, sodass Sie Ihre Kryptowährungen gegen ein Stück Pizza eintauschen können</div> 
                <div class="modal-feedback-button">
                    <button class="modal-feedback-send" onClick={() =>  this.props.closer()}>Check it now</button>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default ModalBTC;
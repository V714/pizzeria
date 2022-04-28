import { useEffect } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root')

export default function ModalAd(props){

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('ad')) == null)
        {
          props.setModalIsOpenAd(true)
          localStorage.setItem("ad", JSON.stringify("false"));
        }},[])

        return(
            <Modal 
        isOpen={props.modalIsOpenAd} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => props.closer()}
        closeTimeoutMS={350}
        className={"bitcoin-modal"}
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
        <div class="modal-dialog">
        <div class="bitcoin-modal">
            <button class="modal-x" onClick={() => props.closer()}><img src="images/x.svg"/></button>
            <div class="feedback-modal-inner">
                <div class="bitcoin-modal-images">
                    <img class="bitcoin-modal-imgs" src="images/bitcoin.webp"/>
                    <img class="bitcoin-modal-imgs" src="images/double-arrow.svg"/>
                    <img class="bitcoin-modal-imgs" src="images/pizza.svg"/>
                </div>
                <div class="modal-title">Hey! Have you ever seen a crypto turn into a slice of pizza?</div>
                <div class="modal-bitcoin-description">Jetzt akzeptieren wir Zahlungen per Kryptowährungen, sodass Sie Ihre Kryptowährungen gegen ein Stück Pizza eintauschen können</div> 
                <div class="modal-feedback-button">
                    <button class="modal-feedback-send" onClick={() =>  props.closer()}>Check it now</button>
                </div>
            </div>
        </div>
    </div>
      </Modal>
      
        );

}

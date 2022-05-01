import { useEffect } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root')

export default function ModalAd(props){

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem('ad')) == null)
        {
          props.setModalIsOpenAd(true)
          localStorage.setItem("ad", JSON.stringify("false"));
        }},[props])

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
            <button class="modal-x" onClick={() => props.closer()}><img alt="close icon" src="images/x.svg"/></button>
            <div class="feedback-modal-inner">
                <div class="bitcoin-modal-images">
                    <img alt="bitcoin icon" class="bitcoin-modal-imgs" src="images/bitcoin.webp"/>
                    <img alt="arrows to the right" class="bitcoin-modal-imgs" src="images/double-arrow.svg"/>
                    <img alt="pizza icon" class="bitcoin-modal-imgs" src="images/pizza.svg"/>
                </div>
                <div class="modal-title">{props.lang.bitcoin.hey}</div>
                <div class="modal-bitcoin-description">{props.lang.bitcoin.desc}</div> 
                <div class="modal-feedback-button">
                    <button class="modal-feedback-send" onClick={() =>  props.closer()}>{props.lang.bitcoin.check}</button>
                </div>
            </div>
        </div>
    </div>
      </Modal>
      
        );

}

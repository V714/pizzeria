import Modal from 'react-modal';

Modal.setAppElement('#root')

function ModalFeedback (props){
    return(
        <Modal 
        isOpen={modalIsOpenFeed} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => props.closer()}
        closeTimeoutMS={350}
        className={"feedback-modal"}
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
        <div class="feedback-modal">
            <button class="modal-x" onClick={() => props.closer()}><img src="images/x.svg"/></button>
            <div class="feedback-modal-inner">
                <div class="modal-title">Leave us some feedback!</div>
                <div class="modal-feedback-title">Feedback</div>
                <textarea class="modal-textarea" ></textarea>
                <div class="modal-double-bottom">
                    <div class="modal-input-name">
                        <div class="modal-input-name-title">Your Name</div>
                        <input class="modal-input-area" type="text"/>
                    </div>
                    <div class="modal-input-email">
                        <div class="modal-input-name-title">Your E-mail</div>
                        <input class="modal-input-area" type="text"/>
                    </div>
                </div>
                <div class="modal-feedback-button">
                    <button class="modal-feedback-send" onClick={() => props.closer()}>Send Feedback</button>
                </div>
            </div>
        </div>
    </div>
      </Modal>
       
     
    );
}

export default ModalFeedback;
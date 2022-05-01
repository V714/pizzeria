import { useEffect, useState } from "react";

import Modal from 'react-modal';
Modal.setAppElement('#root')


function ModalNote(props){

  const changeNoteNow = () =>{
    props.changeNote()
    props.closer()
  }

        return( <Modal 
        isOpen={props.modalIsOpenNote} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => props.closer()}
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
            
            <div class="modal fade" id="feedback_modal" role="dialog">
    <div class="modal-dialog">
        <div class="feedback-modal">
            <button class="modal-x" onClick={() => props.closer()}><img alt="close icon" src="images/x.svg"/></button>
            <div class="feedback-modal-inner">
                <div class="modal-title">Note:</div>
                <textarea class="modal-textarea" onChange={(e) => props.changeNoteProp(e)}>{props.note}</textarea>
                
                <div class="modal-feedback-button">
                    <button class="modal-feedback-send" onClick={() => changeNoteNow()}>Confirm</button>
                </div>
            </div>
        </div>
    </div>
  </div>
      </Modal> 
        );
}

export default ModalNote;
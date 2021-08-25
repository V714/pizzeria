import react from 'react';

class ModalNote extends react.Component{
    render(){
        return(
            <div class="modal fade" id="feedback_modal" role="dialog">
    <div class="modal-dialog">
        <div class="feedback-modal">
            <button class="modal-x" onClick={() => this.props.closer()}><img src="images/x.svg"/></button>
            <div class="feedback-modal-inner">
                <div class="modal-title">Note:</div>
                <textarea class="modal-textarea" ></textarea>
                
                <div class="modal-feedback-button">
                    <button class="modal-feedback-send" onClick={() => this.props.closer()}>Confirm</button>
                </div>
            </div>
        </div>
    </div>
  </div>
        );
}}

export default ModalNote;
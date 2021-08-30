import react from "react";

class ModalFeedback extends react.Component{
    render(){
    return(
        <div class="modal-dialog">
        <div class="feedback-modal">
            <button class="modal-x" onClick={() => this.props.closer()}><img src="images/x.svg"/></button>
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
                    <button class="modal-feedback-send" onClick={() => this.props.closer()}>Send Feedback</button>
                </div>
            </div>
        </div>
    </div>
     
    );}
}

export default ModalFeedback;
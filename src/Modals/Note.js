import react from 'react';

class ModalNote extends react.Component{
    
    constructor(props){
        super(props)
        this.state={
            modalIsOpenNote: false,
            note: this.props.note
        }
    }
    render(){
        return(
            <div class="modal fade" id="feedback_modal" role="dialog">
    <div class="modal-dialog">
        <div class="feedback-modal">
            <button class="modal-x" onClick={() => this.props.closer()}><img src="images/x.svg"/></button>
            <div class="feedback-modal-inner">
                <div class="modal-title">Note:</div>
                <textarea class="modal-textarea" onChange={(e) => this.props.changeNote(e)}>{this.state.note}</textarea>
                
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
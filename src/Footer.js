import react from "react";


import ModalFeedback from './pages/Modals/Feedback';
import Modal from 'react-modal';

Modal.setAppElement('#root')

class Footer extends react.Component {
    constructor(props){
        super(props)
        this.state={
            modalIsOpenFeed: false
        }
    }
    closer = () => {
        this.setState({modaIsOpenFeed: false})
    }

    render(){
    return(
    <div className="foot">
        <div className="foot-left">
            <div className="foot-left-title"> RIANO</div>
            <div className="foot-left-description">
                we provide fast food with premium
                goods and fast and safe delivery. we are
                also accept payments in crypto.
            </div>
            <div className="foot-left-socials">
                <a><img src="images/instagram.svg"/></a>
                <a><img src="images/facebook.svg"/></a>
                <a><img src="images/twitter.svg"/></a>
            </div>
        </div>
        <div className="foot-right">
            <div className="foot-right-about">About
                <a href="uber">Uber Uns</a>
                <a href="home#section2">Features</a>
                <a id="news-href">News</a>
            </div>
            <div className="foot-right-support">Support
                <a id="feedback" onClick={() => this.setState({modaIsOpenFeed: true})} >Feedback</a>
                <a href="home#section5">Kontakt</a>
                <a>Cookies Information</a>
            </div>
            <div className="foot-right-touch">Get in Touch
                <a id="question" onClick={() => this.setState({modaIsOpenFeed: true})} >Question or feedback?</a>
                <a>We'd love to hear from you</a>
            </div>
        </div>


        <Modal 
        isOpen={this.state.modaIsOpenFeed} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.closer()}
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
        <ModalFeedback closer = {this.closer} />
      </Modal>
    </div>
    );}
}

export default Footer;
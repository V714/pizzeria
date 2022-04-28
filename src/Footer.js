import { useState } from "react";
import { useSelector } from "react-redux";

import ModalFeedback from './modals/Feedback.js';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function Footer(){
    const [modalIsOpenFeed, setModalIsOpenFeed] = useState(false)
    const lang = useSelector(state => state.language)
    const closer = () => {
        setModalIsOpenFeed(false)
    }
    return(<>
        {lang.footer && 
            <div className="foot"> <div className="foot-left">
            <div className="foot-left-title">{lang.name}</div>
            <div className="foot-left-description">
                {lang.footer.description}
            </div>
            <div className="foot-left-socials">
                <a><img src="images/instagram.svg"/></a>
                <a><img src="images/facebook.svg"/></a>
                <a><img src="images/twitter.svg"/></a>
            </div>
        </div>
        <div className="foot-right">
            <div className="foot-right-about">{lang.footer.about}
                <a href="uber">{lang.footer.about_us}</a>
                <a href="home#section2">{lang.footer.features}</a>
                <a id="news-href">{lang.footer.news}</a>
            </div>
            <div className="foot-right-support">{lang.footer.support}
                <a id="feedback" onClick={() => setModalIsOpenFeed(true)} >{lang.footer.feedback}</a>
                <a href="home#section5">{lang.footer.contact}</a>
                <a>{lang.footer.cookies}</a>
            </div>
            <div className="foot-right-touch">{lang.footer.get_in_touch}
                <a id="question" onClick={() => setModalIsOpenFeed(true)} >{lang.footer.question_or_feedback}</a>
                <a>{lang.footer.hear_from_you}</a>
            </div>
        </div>


        <Modal 
        isOpen={modalIsOpenFeed} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => closer()}
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
        <ModalFeedback closer = {closer} />
      </Modal></div>}
    </>
    )
}

export default Footer;
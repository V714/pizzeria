import { useState } from "react";
import { useSelector } from "react-redux";

import ModalFeedback from './modals/Feedback.js';

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
                <a role="button"><img width="38" height="38" alt="instagram" src="images/instagram.svg"/></a>
                <a role="button"><img width="38" height="38" alt="facebook" src="images/facebook.svg"/></a>
                <a role="button"><img width="38" height="38" alt="twitter" src="images/twitter.svg"/></a>
            </div>
        </div>
        <div className="foot-right">
            <div className="foot-right-about">{lang.footer.about}
                <a  href="uber">{lang.footer.about_us}</a>
                <a  href="home#section2">{lang.footer.features}</a>
                <a role="button" id="news-href">{lang.footer.news}</a>
            </div>
            <div className="foot-right-support">{lang.footer.support}
                <a role="button" id="feedback" onClick={() => setModalIsOpenFeed(true)} >{lang.footer.feedback}</a>
                <a href="home#section5">{lang.footer.contact}</a>
                <a role="button">{lang.footer.cookies}</a>
            </div>
            <div className="foot-right-touch">{lang.footer.get_in_touch}
                <a role="button" id="question" onClick={() => setModalIsOpenFeed(true)} >{lang.footer.question_or_feedback}</a>
                <a role="button">{lang.footer.hear_from_you}</a>
            </div>
        </div>
            <ModalFeedback modalIsOpenFeed={modalIsOpenFeed} closer={closer}/>

        </div>}
    </>
    )
}

export default Footer;


import '../styles/Footer.css';

function Footer() {
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
                <a href="uber.html">Uber Uns</a>
                <a href="home.html#section2">Features</a>
                <a id="news-href">News</a>
            </div>
            <div className="foot-right-support">Support
                <a id="feedback">Feedback</a>
                <a href="home.html#section5">Kontakt</a>
                <a>Cookies Information</a>
            </div>
            <div className="foot-right-touch">Get in Touch
                <a id="question">Question or feedback?</a>
                <a>We'd love to hear from you</a>
            </div>
        </div>
    </div>
    );
}

export default Footer;
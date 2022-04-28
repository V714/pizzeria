
import react, { useEffect } from 'react';
import GMap from './GoogleMaps';
import { useSelector } from 'react-redux';

const Section5 = () => {

    const contactInfo = useSelector(state => state.contact)
    const lang = useSelector(state => state.language)

    return(
        <div className="section5" id="section5">
        <div className="section5-inner">
            <div className="s5-map"><div id="map"><GMap/></div></div>
            <div className="s5-kontakt">
                <div className="s5-kontakt-texts-small">{lang.home.section5title}</div>
                <div className="s5-kontakt-texts-big">{lang.home.section5bold}</div> 
                <div className="s5-items">
                    <ul>
                        <li className="s5-item">
                            <div className="s5-item-inner">
                                <img src="images/smartphone.svg"/>
                                <div className="s5-kontakt-info">
                                    <div className="s5-kontakt-name">{lang.home.section5mobile}</div>
                                    <div className="s5-kontakt-details">{contactInfo.phoneNumber && [...contactInfo.phoneNumber].map((d, i) => (i) % 3 == 0 ? ' ' + d : d).join('').trim()}</div>
                                    </div>
                            </div>
                        </li>
                        <li className="s5-item">
                            <div className="s5-item-inner">
                                <img src="images/addresse.svg"/>
                                <div className="s5-kontakt-info">
                                    <div className="s5-kontakt-name">{lang.home.section5address}</div>
                                    <div className="s5-kontakt-details">{contactInfo.address}</div>
                                </div>
                            </div>
                        </li>
                        <li className="s5-item">
                            <div className="s5-item-inner">
                                <img src="images/telefonnummer.svg"/>
                                <div className="s5-kontakt-info">
                                    <div className="s5-kontakt-name">{lang.home.section5email}</div>
                                    <div className="s5-kontakt-details">{contactInfo.email}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="s5-item">
                            <div className="s5-item-inner">
                                <img src="images/booking.svg"/>
                                <div className="s5-kontakt-info">
                                    <div className="s5-kontakt-name">{lang.home.section5openhours}</div>
                                    <div className="s5-kontakt-details">{contactInfo.openingHours}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Section5;
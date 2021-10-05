
import react from 'react';
import GMap from './GoogleMaps';

class Section5 extends react.Component{
    constructor(props){
        super(props)
    }
    componentDidMount = () => {
        
        

            
    }

    render(){
    return(
        <div className="section5" id="section5">
        <div className="section5-inner">
            <div className="s5-map"><div id="map"><GMap/></div></div>
            <div className="s5-kontakt">
                <div className="s5-kontakt-texts-small">UNSER PROFIL</div>
                <div className="s5-kontakt-texts-big">Kontakt</div> 
                <div className="s5-items">
                    <ul>
                        <li className="s5-item">
                            <div className="s5-item-inner">
                                <img src="images/smartphone.svg"/>
                                <div className="s5-kontakt-info">
                                    <div className="s5-kontakt-name">Mobile</div>
                                    <div className="s5-kontakt-details">{[...this.props.contactInfo.phoneNumber].map((d, i) => (i) % 3 == 0 ? ' ' + d : d).join('').trim()}</div>
                                </div>
                            </div>
                        </li>
                        <li className="s5-item">
                            <div className="s5-item-inner">
                                <img src="images/addresse.svg"/>
                                <div className="s5-kontakt-info">
                                    <div className="s5-kontakt-name">Addresse</div>
                                    <div className="s5-kontakt-details">{this.props.contactInfo.address}</div>
                                </div>
                            </div>
                        </li>
                        <li className="s5-item">
                            <div className="s5-item-inner">
                                <img src="images/telefonnummer.svg"/>
                                <div className="s5-kontakt-info">
                                    <div className="s5-kontakt-name">E-Mail</div>
                                    <div className="s5-kontakt-details">{this.props.contactInfo.email}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="s5-item">
                            <div className="s5-item-inner">
                                <img src="images/booking.svg"/>
                                <div className="s5-kontakt-info">
                                    <div className="s5-kontakt-name">Öffnungszeiten</div>
                                    <div className="s5-kontakt-details">{this.props.contactInfo.openingHours}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );}
}

export default Section5;
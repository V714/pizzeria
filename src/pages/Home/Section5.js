
import '../../styles/Home.css'

function Section5 (){
    return(
        <div className="section5" id="section5">
        <div className="section5-inner">
            <div className="s5-map"><div id="map"></div></div>
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
                                    <div className="s5-kontakt-details">+43 (0) 699 103 11 888</div>
                                </div>
                            </div>
                        </li>
                        <li className="s5-item">
                            <div className="s5-item-inner">
                                <img src="images/addresse.svg"/>
                                <div className="s5-kontakt-info">
                                    <div className="s5-kontakt-name">Addresse</div>
                                    <div className="s5-kontakt-details">Gerasdorfer Str. 124, 1210 Wien, Austria</div>
                                </div>
                            </div>
                        </li>
                        <li className="s5-item">
                            <div className="s5-item-inner">
                                <img src="images/telefonnummer.svg"/>
                                <div className="s5-kontakt-info">
                                    <div className="s5-kontakt-name">Telefonnummer</div>
                                    <div className="s5-kontakt-details">+43 (0) 1 294 80 30</div>
                                </div>
                            </div>
                        </li>
                        <li className="s5-item">
                            <div className="s5-item-inner">
                                <img src="images/booking.svg"/>
                                <div className="s5-kontakt-info">
                                    <div className="s5-kontakt-name">Öffnungszeiten</div>
                                    <div className="s5-kontakt-details">Montag - Sonntag, 10:00 - 10:00</div>
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
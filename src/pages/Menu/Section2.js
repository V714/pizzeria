import ComboItem from "../Items/ComboItem";
import OffersItem from "../Items/OffersItem";

function Section2 (){
    return(
        <div className="section2">
        <div className="section2-inner">
            <div className="s2-menu-border"></div>
            <div className="s2-head">
                <div className="s2-head-left">
                    <div className="s2-head-left-small">UNSERE DEALS</div>
                    <div className="s2-head-left-big">RIANO DEALS</div>
                    <div className="s2-head-left-description">Wir bieten Kunden verschiedene Rabatte, denn unser Motto lautet Kundenzufriedenheit ist Nummer eins.  </div>
                </div>
            </div>
            <div className="s2-next-menu">
                <div className="s2-menu-left">
                    <div className="s2-menu-left-icon">01</div>
                    <div className="s2-menu-left-text">
                        <div className="s2-menu-left-text-big">Daily Deals</div>
                        <div className="s2-menu-left-text-small">Für bestimmte Tage haben wir bestimmte Angebote! Interessant, oder?</div>
                    </div>
                </div>
            </div>
            <div className="menu-s2-daily">
                <ul>
                    <li className="menu-s2-daily-item active">
                        <div className="menu-s2-daily-day">Crazy Monday</div>
                        <div className="menu-s2-daily-description">Jede Pasta</div>
                        <div className="menu-s2-daily-price">€ 6.00</div>       
                    </li>
                    <li className="menu-s2-daily-item">
                        <div className="menu-s2-daily-day">Tipsy Tuesday</div>
                        <div className="menu-s2-daily-description">Jede Pizza verbilligt um</div>
                        <div className="menu-s2-daily-price">€ 1.50</div>       
                    </li>
                    <li className="menu-s2-daily-item">
                        <div className="menu-s2-daily-day">Freaky Wednesday</div>
                        <div className="menu-s2-daily-description">Spare Ribs</div>
                        <div className="menu-s2-daily-price">€ 10.00</div>       
                    </li>
                    <li className="menu-s2-daily-item">
                        <div className="menu-s2-daily-day">Meaty Friday</div>
                        <div className="menu-s2-daily-description">Schnitzel + Pommes</div>
                        <div className="menu-s2-daily-price">€ 7.50</div>       
                    </li>
                </ul>
            </div>
            <div className="s2-menu-right-again">
                <div className="s2-menu-right-icon">02</div>
                <div className="s2-menu-right-text">
                    <div className="s2-menu-right-text-big">Combos</div>
                    <div className="s2-menu-right-text-small">Für Combos erhalten Sie verschiedene Speiseangebote ink. Getränke. Interessant, oder?</div>
                </div>
            </div>
           <div className="s2-menu-border-again"></div>
            <div className="s2-combo-items">

                <ComboItem id={22}
                            name="Johny Walker + 2x1,5L + 1 Pizza (33 cm)"
                            image="images/combo1.webp"
                            price="35,00"/>

                <ComboItem id={23}
                            name="Johny Walker + 2x1,5L + 1 Pizza (33 cm)"
                            image="images/combo2.webp"
                            price="35,00"/>
                
                <ComboItem id={24}
                            name="Johny Walker + 2x1,5L + 1 Pizza (33 cm)"
                            image="images/combo3.webp"
                            price="35,00"/>

            </div>
            <div className="s2-menu-left-again">
                <div className="s2-menu-left-icon">03</div>
                <div className="s2-menu-left-text">
                    <div className="s2-menu-left-text-big">Firmenangebote</div>
                    <div className="s2-menu-left-text-small">For company offers, only for legal companies in Austria, is your company legal?</div>
                </div>
            </div>
            <div className="s2-firme-items">
                <ul>
                <OffersItem     id={333}
                                image="images/aitem1.webp"
                                info="Packages 1"
                                name="Pizza + Pepsi"
                                promo="(Gösser 0,5L +0,50 €)"
                                price="6,50"/>

                    <OffersItem id={334}
                                image="images/aitem2.webp"
                                info="Packages 2"
                                name="Pasta + Pepsi"
                                promo="(Gösser 0,5L +0,50 €)"
                                price="6,50"/>

                    <OffersItem id={338}
                                image="images/aitem3.webp"
                                info="Packages 3"
                                name="Schnitzel + Pepsi"
                                promo="(Gösser 0,5L +0,50 €)"
                                price="7,00"/>

                </ul>
            </div>
        </div>
    </div>
    );
}

export default Section2;
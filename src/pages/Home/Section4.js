import react from "react";
import OffersItem from "../Items/OffersItem";

class Section4 extends react.Component{

    render(){
    return(
        <div className="section4">
        <div className="section4-inner">
            <div className="s4-head">
                <div className="s4-head-left">
                    <div className="s4-head-left-small">FIRMENANGEBOTE</div>
                    <div className="s4-head-left-big">Unsere Sonderangebote für  Unternehmen</div>
                </div>
                <div className="s4-head-right">
                    Sind Sie eine Anwaltskanzlei in Österreich? Holen  Sie sich jetzt ein Sonderangebot.  
                </div>
            </div>
            <div className="s4-items">
                <ul>
                    <OffersItem id={27}
                                image="images/aitem1.webp"
                                info="Packages 1"
                                name="Pizza + Pepsi"
                                promo="(Gösser 0,5L +0,50 €)"
                                price={6.50}/>

                    <OffersItem id={27}
                                image="images/aitem2.webp"
                                info="Packages 2"
                                name="Pasta + Pepsi"
                                promo="(Gösser 0,5L +0,50 €)"
                                price={6.50}/>

                    <OffersItem id={27}
                                image="images/aitem3.webp"
                                info="Packages 3"
                                name="Schnitzel + Pepsi"
                                promo="(Gösser 0,5L +0,50 €)"
                                price={7.00}/>

                </ul>
            </div>
      </div>
    </div>
    );
}}

export default Section4;
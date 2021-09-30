import React from "react";
import ComboItem from "../Items/ComboItem";
import OffersItem from "../Items/OffersItem";

class Section2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
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


            {this.props.allProducts && 
                    this.props.allProducts.filter(item => item.type=='COMBO').map((item) => (
                        <ComboItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                name={item.name} 
                                image={item.imgPath}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}/>

                    ))
                }
    
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
                {this.props.allProducts && 
                    this.props.allProducts.filter(item => item.type=='PACKAGES').map((item) => (
                        <OffersItem  products={this.props.products} addProduct={this.props.addProduct} id={431}
                                name={item.name} 
                                image={item.imgPath}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}/>

                    ))
                }

                </ul>
            </div>
        </div>
    </div>
    );}
}

export default Section2;
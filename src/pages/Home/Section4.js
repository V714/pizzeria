import react from "react";
import OffersItem from "../Items/OffersItem";

class Section4 extends react.Component{
    constructor(props){
        super(props);
    }
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

                    {this.props.allPackages && 
                    this.props.allPackages.map((item,index) => (
                        <OffersItem allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} index={index+1} item={item}/>
                    ))
                }
   

                </ul>
            </div>
      </div>
    </div>
    );
}}

export default Section4;
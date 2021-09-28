import react from "react";
import OffersItem from "../Items/OffersItem";
import {allProducts} from "../../data/Data";

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

                    {allProducts && 
                    allProducts.filter(item => item.section=='offer').map((item,index) => (
                        <OffersItem products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                image={item.image}
                                info={'Packages '+(index+1)}
                                name={item.name}
                                details={item.details}
                                price={item.price}/>
                    ))
                }
   

                </ul>
            </div>
      </div>
    </div>
    );
}}

export default Section4;
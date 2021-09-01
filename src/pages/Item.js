import Section1 from "./Item/Section1";
import Section2 from "./Item/Section2";
import react from "react";

class Item extends react.Component {
    constructor(props){
      super(props)
    }
      render(){
    return(
        
        <div>
            <Section1 products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote}/>
            <Section2 products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote}/>
        </div>

    );
}}

export default Item;
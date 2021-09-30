import Section1 from "./Item/Section1";
import Section2 from "./Item/Section2";
import react from "react";

class Item extends react.Component {
    constructor(props){
      super(props)
      this.state={
        extras: '',
      }
    }
      render(){
    return(
        
        <div>
            <Section1 allProducts={this.props.allProducts} addProduct={this.props.addProduct}/>
            <Section2 allProducts={this.props.allProducts} addProduct={this.props.addProduct}/>
        </div>

    );
}}

export default Item;
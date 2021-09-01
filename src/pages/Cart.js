
import react from 'react';
import Section1 from './Cart/Section1';
import Section2 from './Cart/Section2';

class Cart extends react.Component {
  constructor(props){
    super(props)
  }

  render(){
  return (

   <div>

        <Section1 totalPrice={this.props.totalPrice} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} deleteProduct={this.props.deleteProduct}/>
        <Section2 products={this.props.products} addProduct={this.props.addProduct} />

    </div>
);}
}

export default Cart;

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

        <Section1 getOrderPrice={this.props.getOrderPrice} allProducts={this.props.allProducts} deliveryPrice={this.props.deliveryPrice} address={this.props.address} changeAddress={this.props.changeAddress} totalPrice={this.props.totalPrice} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} deleteProduct={this.props.deleteProduct}/>
        <Section2 mostOrdered={this.props.mostOrdered} allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} />

    </div>
);}
}

export default Cart;
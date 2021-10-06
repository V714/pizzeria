
import React from 'react';
import Section1 from './Menu/Section1';
import Section2 from './Menu/Section2';
import Section3 from './Menu/Section3';

class Menu extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
  return (
    <div>

        <Section1 allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} />
        <Section2 allCombos={this.props.allCombos}  allPackages={this.props.allPackages} allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} /> 
        <Section3 allTypes={this.props.allTypes} allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} />

    </div>
  );
  
}}

export default Menu;
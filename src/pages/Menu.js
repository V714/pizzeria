
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

        <Section1 products={this.props.products} addProduct={this.props.addProduct} />
        <Section2 products={this.props.products} addProduct={this.props.addProduct} />
        <Section3 products={this.props.products} addProduct={this.props.addProduct} />

    </div>
  );
  
}}

export default Menu;

import React from 'react';
import Section1 from './Search/Section1';
import Section2 from './Search/Section2';

class Menu extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
  return (
    <div>

        <Section1 search={this.props.search} setSearch={this.props.setSearch} products={this.props.products} addProduct={this.props.addProduct} />
        <Section2 search={this.props.search} setSearch={this.props.setSearch} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote}/>

    </div>
  );
  
}}

export default Menu;
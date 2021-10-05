

import Section1 from './Home/Section1';
import Section2 from './Home/Section2';
import Section3 from './Home/Section3';
import Section4 from './Home/Section4';
import Section5 from './Home/Section5';
import Section6 from './Home/Section6';
import react from 'react';

class Home extends react.Component{
  constructor(props){
    super(props)
  }
  render() {

    return (
      <div>

          <Section1/>
          <Section2/>
          <Section3 allTypes={this.props.allTypes} allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote}/>
          <Section4 allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote}/>
          <Section5 contactInfo={this.props.contactInfo}/>
          <Section6/>

      </div>
    );
  }
}
export default Home;
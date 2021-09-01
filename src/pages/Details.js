
import Section1 from './Details/Section1';
import Section2 from './Details/Section2';
import Section3 from './Details/Section3';
import Section4 from './Details/Section4';
import React from 'react';

class Details extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div>

            <Section1/>
            <Section2/>
            <Section3/>
            <Section4 products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote}/>

        </div>
    );}
}

export default Details;
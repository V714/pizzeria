

import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import ProductItem from "../Items/ProductItem";

class Section3 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div className="section3">
        <div className="section3-inner">
            <div className="s2-head-left">
                <div className="s2-head-left-small">OUR MENÜ</div>
                <div className="s2-head-left-big">Our Offer</div>
                <div className="s2-head-left-description">Wir bieten verschiedene Gericht-Kategorien für unsere Kunden</div>
            </div>
            <Tabs>
            <TabList className="s3-menu-tabbing">
            {this.props.allTypes && this.props.allTypes.map(itema => {return(<Tab><img src="images/pizza.svg"/><div className="s3-menu-tabbing-text">{itema}</div></Tab>)})}

            </TabList>
            {this.props.allTypes && this.props.allTypes.map(itema => {return(<TabPanel className="s3-menu-tab-pizza tabContent">
                
            {this.props.allProducts && 
                    this.props.allProducts.filter(item => item.type==itema).map((item) => (
                        <ProductItem  products={this.props.products} addProduct={this.props.addProduct} 
                                id={item.id}
                                name={item.name} 
                                image={item.imgPath}
                                sizes={item.sizes}
                                rating={item.rating}
                                description={item.description}/>

                    ))
                }
                   
                </TabPanel>)})}

           
                    </Tabs>
        </div>
    </div>
    );
}}

export default Section3;
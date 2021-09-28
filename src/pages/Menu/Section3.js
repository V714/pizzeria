

import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import MenuItem from "../Items/MenuItem";
import PizzaItem from '../Items/PizzaItem';
import { allProducts } from '../../data/Data';

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
                <Tab><img src="images/pizza.svg"/><div className="s3-menu-tabbing-text">Pizza</div></Tab>
                <Tab><img src="images/risotto.svg"/><div className="s3-menu-tabbing-text">Risotto</div></Tab>
                <Tab><img src="images/spareribs.svg"/><div className="s3-menu-tabbing-text">Spare Ribs</div></Tab>
                <Tab><img src="images/indische.svg"/><div className="s3-menu-tabbing-text">Indische Gerichte</div></Tab>
                <Tab><img src="images/burgers.svg"/><div className="s3-menu-tabbing-text">Burgers</div></Tab>
                <Tab><img src="images/dessert.svg"/><div className="s3-menu-tabbing-text">Dessert</div></Tab>
            </TabList>
            <TabPanel className="s3-menu-tab-pizza tabContent">
                
            {allProducts && 
                    allProducts.filter(item => item.section=='pizza').map((item) => (
                        <PizzaItem  products={this.props.products} addProduct={this.props.addProduct} 
                                id={item.id}
                                name={item.name} 
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                details={item.details}/>

                    ))
                }
                   
                </TabPanel>

            <TabPanel className="s3-menu-tab-pizza tabContent">
                
            {allProducts && 
                    allProducts.filter(item => item.section=='risotto').map((item) => (
                        <MenuItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                name={item.name} 
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                details={item.details}/>

                    ))
                }
               
               
            </TabPanel>
            <TabPanel className="s3-menu-tab-pizza tabContent">
                
            {allProducts && 
                    allProducts.filter(item => item.section=='ribs').map((item) => (
                        <MenuItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                name={item.name} 
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                details={item.details}/>

                    ))
                }
                       
                    </TabPanel>
    
                <TabPanel className="s3-menu-tab-pizza tabContent">
                    
                {allProducts && 
                    allProducts.filter(item => item.section=='indische').map((item) => (
                        <MenuItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                name={item.name} 
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                details={item.details}/>

                    ))
                }
                   
                   
                </TabPanel>
                <TabPanel className="s3-menu-tab-pizza tabContent">
                
                {allProducts && 
                    allProducts.filter(item => item.section=='burger').map((item) => (
                        <MenuItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                name={item.name} 
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                details={item.details}/>

                    ))
                }
                       
                    </TabPanel>
    
                <TabPanel className="s3-menu-tab-pizza tabContent">
                    
                {allProducts && 
                    allProducts.filter(item => item.section=='dessert').map((item) => (
                        <MenuItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                name={item.name} 
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                details={item.details}/>

                    ))
                }
                   
                </TabPanel>
                    </Tabs>
        </div>
    </div>
    );
}}

export default Section3;
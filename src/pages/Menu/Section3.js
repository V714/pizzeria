

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
                <Tab><img src="images/pizza.svg"/><div className="s3-menu-tabbing-text">Pizza</div></Tab>
                <Tab><img src="images/risotto.svg"/><div className="s3-menu-tabbing-text">Risotto</div></Tab>
                <Tab><img src="images/spareribs.svg"/><div className="s3-menu-tabbing-text">Spare Ribs</div></Tab>
                <Tab><img src="images/indische.svg"/><div className="s3-menu-tabbing-text">Indische Gerichte</div></Tab>
                <Tab><img src="images/burgers.svg"/><div className="s3-menu-tabbing-text">Burgers</div></Tab>
                <Tab><img src="images/dessert.svg"/><div className="s3-menu-tabbing-text">Dessert</div></Tab>
            </TabList>
            <TabPanel className="s3-menu-tab-pizza tabContent">
                
            {this.props.allProducts && 
                    this.props.allProducts.filter(item => item.type=='PIZZA').map((item) => (
                        <ProductItem  products={this.props.products} addProduct={this.props.addProduct} 
                                id={item.id}
                                name={item.name} 
                                image={item.imgPath}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}/>

                    ))
                }
                   
                </TabPanel>

            <TabPanel className="s3-menu-tab-pizza tabContent">
                
            {this.props.allProducts && 
                    this.props.allProducts.filter(item => item.type=='RISOTTO').map((item) => (
                        <ProductItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                name={item.name} 
                                image={item.imgPath}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}/>

                    ))
                }
               
               
            </TabPanel>
            <TabPanel className="s3-menu-tab-pizza tabContent">
                
            {this.props.allProducts && 
                    this.props.allProducts.filter(item => item.type=='SPARERIBS').map((item) => (
                        <ProductItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                name={item.name} 
                                image={item.imgPath}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}/>

                    ))
                }
                       
                    </TabPanel>
    
                <TabPanel className="s3-menu-tab-pizza tabContent">
                    
                {this.props.allProducts && 
                    this.props.allProducts.filter(item => item.type=='INDIAN_VEGE' || item.type=='INDIAN_MEAT').map((item) => (
                        <ProductItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                name={item.name} 
                                image={item.imgPath}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}/>

                    ))
                }
                   
                   
                </TabPanel>
                <TabPanel className="s3-menu-tab-pizza tabContent">
                
                {this.props.allProducts && 
                    this.props.allProducts.filter(item => item.type=='BURGER').map((item) => (
                        <ProductItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                name={item.name} 
                                image={item.imgPath}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}/>

                    ))
                }
                       
                    </TabPanel>
    
                <TabPanel className="s3-menu-tab-pizza tabContent">
                    
                {this.props.allProducts && 
                    this.props.allProducts.filter(item => item.type=='DESSERT').map((item) => (
                        <ProductItem  products={this.props.products} addProduct={this.props.addProduct} id={item.id}
                                name={item.name} 
                                image={item.imgPath}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}/>

                    ))
                }
                   
                </TabPanel>
                    </Tabs>
        </div>
    </div>
    );
}}

export default Section3;
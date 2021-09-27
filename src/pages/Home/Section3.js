
import react from 'react';
import PizzaItem from '../Items/PizzaItem';
import MenuItem from '../Items/MenuItem';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import { allProducts } from '../../data/Data';

class Section3 extends react.Component{
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 1
        }

    }


    render(){
    return(
        <div className="section3">
        <div className="section3-inner">
            <Tabs className="section3-inner-again">
                <div className="s3-menu">
                    <div className="s3-menu-texts">
                        <div className="s3-menu-texts-small">UNSER MENÜ</div>
                        <div className="s3-menu-texts-big">Am meisten bestellt</div>
                        <div className="s3-menu-texts-description">There are over +230 Menüs with different categories</div>
                    </div>
                    <TabList className="s3-menu-scroll">
                        <ul>
                            <Tab id="gat1" className="s3-list-element">Burgers</Tab>
                            <Tab id="gat2" className="s3-list-element">Pizza</Tab>
                            <Tab id="gat3" className="s3-list-element">Risotto</Tab>
                            <Tab id="gat4" className="s3-list-element">Veggie</Tab>
                            <Tab id="gat5" className="s3-list-element">Drinks</Tab>
                        </ul>
                    </TabList>
                </div>
                <TabPanel id="pizza_tab2" className="s3-items">
                
                {allProducts && 
                    allProducts.filter(item => item.section=='burger').map((item) => (
                        <MenuItem  products={this.props.products} addProduct={this.props.addProduct} 
                                id={item.id}
                                name={item.name} 
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                details={item.details}/>

                    ))
                }
   
                </TabPanel>
                <TabPanel id="pizza_tab2" className="s3-items">
                   
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

                <TabPanel id="pizza_tab2" className="s3-items">
                {allProducts && 
                    allProducts.filter(item => item.section=='risotto').map((item) => (
                        <MenuItem  products={this.props.products} addProduct={this.props.addProduct} 
                                id={item.id}
                                name={item.name} 
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                details={item.details}/>

                    ))
                }
                </TabPanel>
                <TabPanel id="pizza_tab2" className="s3-items">
                   
                {allProducts && 
                    allProducts.filter(item => item.section=='veggie').map((item) => (
                        <MenuItem  products={this.props.products} addProduct={this.props.addProduct} 
                                id={item.id}
                                name={item.name} 
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                details={item.details}/>

                    ))
                }
                </TabPanel>

                <TabPanel id="pizza_tab2" className="s3-items">
                {allProducts && 
                    allProducts.filter(item => item.section=='drink').map((item) => (
                        <MenuItem  products={this.props.products} addProduct={this.props.addProduct} 
                                id={item.id}
                                name={item.name} 
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                details={item.details}/>

                    ))
                }
                </TabPanel>
                
            </Tabs>
            {/* <div className="s3-pagination">
                <div className="paginate-items">
                    <button id="left_scroll" className="circle1"><img id="paginate_left" src="images/scroll-left-dis.svg"/></button>
                    <button id="right_scroll" className="circle2"><img id="paginate_right" src="images/scroll-right.svg"/></button>
                </div>
            </div> */}
        </div>



















    </div>






    );}
}

export default Section3;
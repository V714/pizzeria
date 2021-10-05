
import react from 'react';
import ProductItem from '../Items/ProductItem';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

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
                        {this.props.allTypes && this.props.allTypes.map((itemb,index) => {return(
                        <Tab id={"gat"+toString(index+1)} className="s3-list-element">{itemb.label}</Tab>)})}
                        </ul>
                    </TabList>
                </div>


                {this.props.allTypes && this.props.allTypes.map(itema => {return(<TabPanel id="pizza_tab2" className="s3-items">
                
                {this.props.allProducts && 
                    this.props.allProducts.filter(item => item.type==itema.key).map((item) => (
                        <ProductItem  products={this.props.products} addProduct={this.props.addProduct} 
                                id={item.id}
                                name={item.name} 
                                image={item.imgPath}
                                sizes={item.sizes}
                                rating={item.rating}
                                description={item.description}/>

                    ))
                }
                </TabPanel>)} )

                }
   




         

               
           
                
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
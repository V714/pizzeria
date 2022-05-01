import ProductItem from '../../items/ProductItem';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import { useSelector } from 'react-redux';

const Section3 = () => {
    const allTypes = useSelector(state => state.types)
    const allProducts = useSelector(state => state.products)
    const lang = useSelector(state=>state.language)

    return(
        <div className="section3">
        <div className="section3-inner">
            <Tabs className="section3-inner-again" role="list">
                <div className="s3-menu">
                    <div className="s3-menu-texts">
                        <div className="s3-menu-texts-small">{lang.home.section3title}</div>
                        <div className="s3-menu-texts-big">{lang.home.section3bold}</div>
                        <div className="s3-menu-texts-description">{lang.home.section3thin}</div>
                    </div>
                    <TabList className="s3-menu-scroll" role="list">
                        <ul>
                        {allTypes && allTypes.map((itemb,index) => {return(
                        <Tab key={index} id={"gat"+toString(index+1)} role="listitem" className="s3-list-element">{itemb.label}</Tab>)})}
                        </ul>
                    </TabList>
                </div>

                {allTypes && allTypes.map((itema,index) => {return(
                    <TabPanel key={index} id="pizza_tab2" className="s3-items" role="list">
                    {allProducts && allProducts.filter(item => item.type===itema.key).map((item,index) => (
                            <ProductItem role="listitem" key={index} item={item}/>
                        ))}
                    </TabPanel>
                )})}
                
            </Tabs>
            {/* <div className="s3-pagination">
                <div className="paginate-items">
                    <button id="left_scroll" className="circle1"><img id="paginate_left" src="images/scroll-left-dis.svg"/></button>
                    <button id="right_scroll" className="circle2"><img id="paginate_right" src="images/scroll-right.svg"/></button>
                </div>
            </div> */}
        </div>


    </div>






    );
}

export default Section3;
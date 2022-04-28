

import React from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import { useSelector } from 'react-redux';
import ProductItem from "../../items/ProductItem";

function Section3(){
    
    const lang = useSelector(state => state.language)
    const allTypes = useSelector(state => state.types)
    const allProducts = useSelector(state => state.products)

    return(
        <div className="section3">
        <div className="section3-inner">
            <div className="s2-head-left">
                <div className="s2-head-left-small">{lang.menu.section3title}</div>
                <div className="s2-head-left-big">{lang.menu.section3bold}</div>
                <div className="s2-head-left-description">{lang.menu.section3thin}</div>
            </div>
            <Tabs>
            <TabList className="s3-menu-tabbing">
            {allTypes && allTypes.map(itema => {return(<Tab><img src={itema.imgPath}/><div className="s3-menu-tabbing-text">{itema.label}</div></Tab>)})}

            </TabList>
            {allTypes && allTypes.map(itema => {return(<TabPanel className="s3-menu-tab-pizza tabContent">
             
            {allProducts && 
                    allProducts.filter(item => item.type==itema.key).map((item) => (
                        <ProductItem item={item}/>

                    ))
                } 
                   
                </TabPanel>)})}

           
                    </Tabs>
        </div>
    </div>
    );
}

export default Section3;
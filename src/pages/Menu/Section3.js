

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import MenuItem from "../Items/MenuItem";
import PizzaItem from '../Items/MenuItem';

function Section3 (){
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
                
            <PizzaItem id={431}
                                name="MarinAAAAAAAAAAAAAara Pizza" 
                                image="images/item1.webp"
                                price="120,00" 
                                rating="4,2" 
                                details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <PizzaItem id={431}
                                name="Super Supreme" 
                                image="images/item1.webp"
                                price="190,00" 
                                rating="4,7" 
                                details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                    
                    <PizzaItem name="Marinara Pizza" 
                                image="images/item1.webp"
                                price="120,00" 
                                rating="4,2" 
                                details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
 <PizzaItem name="Super Supreme" 
                                image="images/item1.webp"
                                price="190,00" 
                                rating="4,7" 
                                details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                    
                    <PizzaItem name="Marinara Pizza" 
                                image="images/item1.webp"
                                price="120,00" 
                                rating="4,2" 
                                details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
 <PizzaItem name="Super Supreme" 
                                image="images/item1.webp"
                                price="190,00" 
                                rating="4,7" 
                                details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                    
                    <PizzaItem name="Marinara Pizza" 
                                image="images/item1.webp"
                                price="120,00" 
                                rating="4,2" 
                                details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <PizzaItem name="Super Supreme" 
                                image="images/item1.webp"
                                price="190,00" 
                                rating="4,7" 
                                details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                              
                    <PizzaItem id={431}
                                name="MarinAAAAAAAAAAAAAara Pizza" 
                                image="images/item1.webp"
                                price="120,00" 
                                rating="4,2" 
                                details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <PizzaItem name="Super Supreme" 
                                image="images/item1.webp"
                                price="190,00" 
                                rating="4,7" 
                                details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>     
                    
                    <PizzaItem name="Marinara Pizza" 
                                image="images/item1.webp"
                                price="120,00" 
                                rating="4,2" 
                                details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <PizzaItem name="Super Supreme" 
                                image="images/item1.webp"
                                price="190,00" 
                                rating="4,7" 
                                details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                              
                   
                </TabPanel>

            <TabPanel className="s3-menu-tab-pizza tabContent">
                
            <MenuItem id={431}
                                name="MarinAAAAAAAAAAAAAara Pizza" 
                                image="images/risotto.webp"
                                price="120,00" 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <MenuItem name="Super Supreme" 
                                image="images/risotto.webp"
                                price="190,00" 
                                rating="4,7" 
                                details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                    
                    <MenuItem name="Italian Risotto" 
                                image="images/risotto.webp"
                                price="120,00" 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <MenuItem name="Super Supreme" 
                                image="images/risotto.webp"
                                price="190,00" 
                                rating="4,7" 
                                details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                              
                    <MenuItem name="MarinAAAAAAAAAAAAAara Pizza" 
                                image="images/risotto.webp"
                                price="120,00" 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <MenuItem name="Super Supreme" 
                                image="images/risotto.webp"
                                price="190,00" 
                                rating="4,7" 
                                details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>     
                    
                    <MenuItem name="Italian Risotto" 
                                image="images/risotto.webp"
                                price="120,00" 
                                rating="4,2" 
                                details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>

                    <MenuItem name="Super Supreme" 
                                image="images/risotto.webp"
                                price="190,00" 
                                rating="4,7" 
                                details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                              
               
               
            </TabPanel>
            <TabPanel className="s3-menu-tab-pizza tabContent">
                
                <PizzaItem id={431}
                                name="MarinAAAAAAAAAAAAAara Pizza" 
                                    image="images/item1.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <PizzaItem id={224}
                                    name="Super Supreme" 
                                    image="images/item1.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                        
                        <PizzaItem id={411}
                                name="Marinara Pizza" 
                                    image="images/item1.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <PizzaItem id={224}
                                    name="Super Supreme" 
                                    image="images/item1.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                                  
                        <PizzaItem id={431}
                                name="MarinAAAAAAAAAAAAAara Pizza" 
                                    image="images/item1.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <PizzaItem id={224}
                                    name="Super Supreme" 
                                    image="images/item1.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>     
                        
                        <PizzaItem id={411}
                                name="Marinara Pizza" 
                                    image="images/item1.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <PizzaItem id={224}
                                    name="Super Supreme" 
                                    image="images/item1.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                                  
                       
                    </TabPanel>
    
                <TabPanel className="s3-menu-tab-pizza tabContent">
                    
                <MenuItem id={431}
                                name="MarinAAAAAAAAAAAAAara Pizza" 
                                    image="images/risotto.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <MenuItem id={224}
                                    name="Super Supreme" 
                                    image="images/risotto.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                        
                        <MenuItem id={401}
                                    name="Italian Risotto" 
                                    image="images/risotto.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <MenuItem id={224}
                                    name="Super Supreme" 
                                    image="images/risotto.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                                  
                        <MenuItem id={234}
                                    name="MarinAAAAAAAAAAAAAara Pizza" 
                                    image="images/risotto.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <MenuItem id={224}
                                    name="Super Supreme" 
                                    image="images/risotto.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>     
                        
                        <MenuItem id={401}
                                name="Italian Risotto" 
                                    image="images/risotto.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <MenuItem id={224}
                                    name="Super Supreme" 
                                    image="images/risotto.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                                  
                   
                   
                </TabPanel>
                <TabPanel className="s3-menu-tab-pizza tabContent">
                
                <PizzaItem id={431}
                                name="MarinAAAAAAAAAAAAAara Pizza" 
                                    image="images/item1.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <PizzaItem id={224}
                                    name="Super Supreme" 
                                    image="images/item1.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                        
                        <PizzaItem id={431}
                                name="Marinara Pizza" 
                                    image="images/item1.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <PizzaItem id={224}
                                    name="Super Supreme" 
                                    image="images/item1.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                                  
                        <PizzaItem id={421}
                                name="MarinAAAAAAAAAAAAAara Pizza" 
                                    image="images/item1.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <PizzaItem id={224}
                                    name="Super Supreme" 
                                    image="images/item1.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>     
                        
                        <PizzaItem id={431}
                                name="Marinara Pizza" 
                                    image="images/item1.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Marinara Pizza ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <PizzaItem id={224}
                                    id={224}
                                    name="Super Supreme" 
                                    image="images/item1.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                                  
                       
                    </TabPanel>
    
                <TabPanel className="s3-menu-tab-pizza tabContent">
                    
                <MenuItem id={431}
                                name="MarinAAAAAAAAAAAAAara Pizza" 
                                    image="images/risotto.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <MenuItem id={224}
                                    name="Super Supreme" 
                                    image="images/risotto.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                        
                        <MenuItem id={401}
                                name="Italian Risotto" 
                                    image="images/risotto.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <MenuItem id={224}
                                    name="Super Supreme" 
                                    image="images/risotto.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                                  
                        <MenuItem id={421}
                                name="MarinAAAAAAAAAAAAAara Pizza" 
                                    image="images/risotto.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <MenuItem id={224}
                                    name="Super Supreme" 
                                    image="images/risotto.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>     
                        
                        <MenuItem id={401}
                                name="Italian Risotto" 
                                    image="images/risotto.webp"
                                    price="120,00" 
                                    rating="4,2" 
                                    details="Italian Risotto ist unsere beliebteste Pizza. Es wurde mit Tomaten, Hühnchen, Käse und auch einem Spinat gemacht."/>
    
                        <MenuItem id={224}
                                    name="Super Supreme" 
                                    image="images/risotto.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                              
                        <MenuItem id={224}
                                    name="Super Supreme" 
                                    image="images/risotto.webp"
                                    price="190,00" 
                                    rating="4,7" 
                                    details="Hackfleisch, Rindfleischburger, Mozzarella, Pilze, Zwiebeln, rote und grüne Paprikaschoten."/>
                                      
                   
                   
                </TabPanel>
                    </Tabs>
        </div>
    </div>
    );
}

export default Section3;
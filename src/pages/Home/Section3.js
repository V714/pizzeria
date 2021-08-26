
import react from 'react';
import PizzaItem from '../Items/PizzaItem';

class Section3 extends react.Component{

    render(){
    return(
        <div className="section3">
        <div className="section3-inner">
            <div className="section3-inner-again">
                <div className="s3-menu">
                    <div className="s3-menu-texts">
                        <div className="s3-menu-texts-small">UNSER MENÜ</div>
                        <div className="s3-menu-texts-big">Am meisten bestellt</div>
                        <div className="s3-menu-texts-description">There are over +230 Menüs with different categories</div>
                    </div>
                    <div className="s3-menu-scroll">
                        <ul>
                            <li id="gat1" className="s3-list-element"><button onclick="showTab(1)">Burgers</button></li>
                            <li id="gat2" className="s3-list-element active"><button onclick="showTab(2)">Pizza</button></li>
                            <li id="gat3" className="s3-list-element"><button onclick="showTab(3)">Risotto</button></li>
                            <li id="gat4" className="s3-list-element"><button onclick="showTab(4)">Veggie</button></li>
                            <li id="gat5" className="s3-list-element"><button onclick="showTab(5)">Drinks</button></li>
                        </ul>
                    </div>
                </div>
                <div id="pizza_tab2"className="s3-items">
                   
                    <PizzaItem name="MarinAAAAAAAAAAAAAara Pizza" 
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
                              
                    <PizzaItem name="MarinAAAAAAAAAAAAAara Pizza" 
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
                              
                    
                  
                  


                </div>
                
            </div>
            <div className="s3-pagination">
                <div className="paginate-items">
                    <button id="left_scroll" className="circle1"><img id="paginate_left" src="images/scroll-left-dis.svg"/></button>
                    <button id="right_scroll" className="circle2"><img id="paginate_right" src="images/scroll-right.svg"/></button>
                </div>
            </div>
        </div>



















    </div>






    );}
}

export default Section3;
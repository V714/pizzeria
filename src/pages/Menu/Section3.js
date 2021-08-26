

import MenuItem from "../Items/MenuItem";

function Section3 (){
    return(
        <div className="section3">
        <div className="section3-inner">
            <div className="s2-head-left">
                <div className="s2-head-left-small">OUR MENÜ</div>
                <div className="s2-head-left-big">Our Offer</div>
                <div className="s2-head-left-description">Wir bieten verschiedene Gericht-Kategorien für unsere Kunden</div>
            </div>
            <div className="s3-menu-tabbing">
                <a id="tagtab1" onclick="showTab('tab1')" className="active"><img src="images/pizza.svg"/><div className="s3-menu-tabbing-text">Pizza</div></a>
                <a id="tagtab2" onclick="showTab('tab2')" ><img src="images/risotto.svg"/><div className="s3-menu-tabbing-text">Risotto</div></a>
                <a id="tagtab3" onclick="showTab('tab3')"><img src="images/spareribs.svg"/><div className="s3-menu-tabbing-text">Spare Ribs</div></a>
                <a id="tagtab4" onclick="showTab('tab4')"><img src="images/indische.svg"/><div className="s3-menu-tabbing-text">Indische Gerichte</div></a>
                <a id="tagtab5" onclick="showTab('tab5')"><img src="images/burgers.svg"/><div className="s3-menu-tabbing-text">Burgers</div></a>
                <a id="tagtab6" onclick="showTab('tab6')"><img src="images/dessert.svg"/><div className="s3-menu-tabbing-text">Dessert</div></a>
                <a><img src="images/bitcoin.webp"/><div className="s3-menu-tabbing-text">PAYMOREFORIT</div></a>
                <a><img src="images/bitcoin.webp"/><div className="s3-menu-tabbing-text">PAYMOREFORIT</div></a>
                <a><img src="images/bitcoin.webp"/><div className="s3-menu-tabbing-text">PAYMOREFORIT</div></a>
                <a><img src="images/bitcoin.webp"/><div className="s3-menu-tabbing-text">PAYMOREFORIT</div></a>
            </div>
            <div id="tab1" className="s3-menu-tab-pizza tabContent">
                
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
                              
               
               
            </div>
        </div>
    </div>
    );
}

export default Section3;

import '../../styles/Home.css'

function Section2 (){
    return(
        <div id="section2" className="section2">
    <div className="section2-inner">
        <div className="s2-head-left-small">WAS WIR ANBIETEN</div>
        <div className="s2-head">
            <div className="s2-head-left">
                <div className="s2-head-left-big">Unser Special Service</div>
            </div>
            <div className="s2-head-right">
                wir habenseit über 21 Jahre Erfahrung darin, Pizza mit einem unverwechselbaren und authentischen Geschmack zu servieren 
            </div>
        </div>
        <div >
            <div className="mobile-paginate" >
                <button id="left_scroll1" className="circle1"><img id="paginate_left1" src="images/scroll-left-dis.svg"/></button>       
            </div>
            <div className="s2-items">
                
                <ul>
                    <li className="service-element">
                        <div className="service-element-inner">
                            <div className="service-icon"><img src="images/service1.svg"/></div>
                            <div className="service-title">Premium Qualität</div>
                            <div className="service-description">Wir verwenden hochwertige Zutaten für die Herstellung unserer Pizzen, daher sind die Aromen authentischer als in anderen Geschäften!</div>
                            <div className="service-button"> <a>Mehr erfahren</a><img src="images/arrow-right.svg"/></div>
                        </div>
                    </li>
                    <li className="service-element">
                        <div className="service-element-inner">
                            <div className="service-icon"><img src="images/service2.svg"/></div>
                            <div className="service-title">Schnelle Lieferung</div>
                            <div className="service-description">Wir bieten kostenlose 
                                Lieferserices für Gebiete innerhalb von 10 km von uns.</div>
                            <div className="service-button"> <a>Mehr erfahren</a><img src="images/arrow-right.svg"/></div>
                        </div>
                    </li>
                    <li className="service-element">
                        <div className="service-element-inner">
                            <div className="service-icon"><img src="images/service3.svg"/></div>
                            <div className="service-title">Krypto Zahlung</div>
                            <div className="service-description">Wir bieten an, ein Stück Pizza mit Krypto zu kaufen. Verwandeln Sie jetzt Ihre Krypto’s in eine Pizza</div>
                            <div className="service-button"> <a>Mehr erfahren</a><img src="images/arrow-right.svg"/></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mobile-paginate" >
                <button id="right_scroll1" className="circle2"><img id="paginate_right1" src="images/scroll-right.svg"/></button>
            </div>
         </div>
 </div>
</div>
    );
}

export default Section2;
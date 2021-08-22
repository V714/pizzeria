
import '../../styles/Home.css'
import '../../styles/Keyframes.css'

function Section1 (){
    return(
        <div className="section1">
        <div className="section1-inner">
            <div className="s1-title">Bestelle jetzt, ein Stück Happiness</div>
            <div className="s1-description">Hab Sonne im Herzenund Pizza im Bauch.Dann bist du glücklichund satt bist du auch.</div>
            <div className="search-box">
                <div className="search-box-field">
                    <img src="images/search.svg"/>
                    <input className="search-input" type="search" placeholder="Suche deine Lieblingspizza..."/>
                </div>
            <button className="search-button" >Search</button>
            </div>
            <div id="bitcoin">
                <img src="images/btc.svg"/>
              </div>
        </div>
        <img className="pizza" src="images/pizza.webp"/>
    </div>
    );
}

export default Section1;
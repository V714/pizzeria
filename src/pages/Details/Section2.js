
function Section2 (){
    return(
        <div id="section2" className="section2">
        <div className="section2-inner">
            <div className="s3-title">Toppings</div>
            <div className="toppings-items">
                <ul>
                    <li className="one-topping">
                        <div className="magic-topping"><button id="crust"><img src="images/rotate.svg"/></button></div>
                        <div className="one-topping-image"><img src="images/crispy.svg"/></div>
                        Cryspy Crust
                    </li>
                    <li className="one-topping">
                        <div className="magic-topping"><button onclick="deleteTopping(this)">-</button></div>
                        <div className="one-topping-image"><img src="images/pizza-sauce.svg"/></div>
                        Pizza Sauce
                    </li>
                    <li className="one-topping">
                        <div className="magic-topping"><button onclick="deleteTopping(this)">-</button></div>
                        <div className="one-topping-image"><img src="images/chilli.svg"/></div>
                        Chilli Sauce
                    </li>
                    <li className="one-topping">
                        <div className="magic-topping"><button onclick="deleteTopping(this)">-</button></div>
                        <div className="one-topping-image"><img src="images/mayonnaise.svg"/></div>
                        Mayonnaise Sauce
                    </li>
                    <li className="one-topping">
                        <div className="magic-topping"><button onclick="deleteTopping(this)">-</button></div>
                        <div className="one-topping-image"><img src="images/blackpepper.svg"/></div>
                        Blackpepper Sauce (2x)
                    </li>
                    <li className="one-topping">
                        <div className="magic-topping"><button onclick="deleteTopping(this)">-</button></div>
                        <div className="one-topping-image"><img src="images/bacon.svg"/></div>
                        Bacon (2x)
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Section2;
import React from "react";

class Section3 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            toppings: [{
                id: 304,
                name: "Pizza Sauce",
                price: 2,
                image: "images/pizza-sauce.svg",
                quantity: 1
            },
            {
                id: 301,
                name: "Chilli Sauce",
                price: 3,
                image: "images/chilli.svg",
                quantity: 1
            },
            {
                id: 302,
                name: "Mayonnaise Sauce",
                price: 1,
                image: "images/mayonnaise.svg",
                quantity: 1
            },
            {
                id: 303,
                name: "Blackpepper Sauce",
                price: 2,
                image: "images/blackpepper.svg",
                quantity: 2
            },
            {
                id: 311,
                name: "Bacon",
                price: 2,
                image: "images/bacon.svg",
                quantity: 2
            }
        ]
        }
    }

    deleteTopping = (id) => {
        this.setState({
            toppings: this.state.toppings.filter(item => item.id != id)
        })
    }
    addTopping = (top) => {
        if(this.state.toppings.some(item => item.id == top.id)){
            this.setState({
                toppings: this.state.toppings.map(item => item.id == top.id? {...item, quantity: item.quantity+1} : item)
            })
        }
        else{
        this.setState({
            toppings: [...this.state.toppings, top]
        })}
    }
    render(){
    return( <>
    <div id="section2" className="section2">
    <div className="section2-inner">
        <div className="s3-title">Toppings</div>
        <div className="toppings-items">
            <ul>
            
            <li class="one-topping">
                            <div class="magic-topping"><button id="crust"><img src="images/rotate.svg"/></button></div>
                            <div class="one-topping-image"><img src="images/crispy.svg"/></div>
                            Cryspy Crust
                        </li>

                {this.state.toppings &&
					            this.state.toppings.map((item) => (
                                    <li className="one-topping">
                                    <div className="magic-topping"><button onClick={() => this.deleteTopping(item.id)}>-</button></div>
                                    <div className="one-topping-image"><img src={item.image}/></div>
                                    {item.name} {item.quantity > 1 && <>(x{item.quantity}) </>}
                                    </li>
                                ))}

            </ul>
        </div>
    </div>
</div>
        <div  className="section3">
            <div className="section3-inner">
                <div className="s3-title">Add Extra Toppings</div>
                <div className="extra-toppings">
                    <div className="extra-topping">
                        <div className="extra-topping-title">Pizza Topping</div>
                        <div className="extra-topping-list">
                                <div className="extra-option">
                                    <div className="crust-image"><img src="images/chilli.svg"/></div>
                                    <div className="delivery-details">
                                        <div className="delivery-details-title">Chilli Sauce</div>
                                        <div className="delivery-details-description">€ 3.00</div>
                                    </div>
                                    <button onClick={() => this.addTopping({id: 301, name: "Chilli Sauce", price: 3, image: "images/chilli.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                                </div>
                                <div className="extra-option">
                                    <div className="crust-image"><img src="images/mayonnaise.svg"/></div>
                                    <div className="delivery-details">
                                        <div className="delivery-details-title">Mayonnaise Sauce</div>
                                        <div className="delivery-details-description">€ 1.00</div>
                                    </div>
                                    <button onClick={() => this.addTopping({id: 302, name: "Mayonnaise", price: 1, image: "images/mayonnaise.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                                </div>
                                <div className="extra-option">
                                    <div className="crust-image"><img src="images/blackpepper.svg"/></div>
                                    <div className="delivery-details">
                                        <div className="delivery-details-title">Blackpepper Sauce</div>
                                        <div className="delivery-details-description">€ 2.00</div>
                                    </div>
                                    <button onClick={() => this.addTopping({id: 303, name: "Blackpepper Sauce", price: 2, image: "images/blackpepper.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                                </div>
                                <div className="extra-option">
                                    <div className="crust-image"><img src="images/pizza-sauce.svg"/></div>
                                    <div className="delivery-details">
                                        <div className="delivery-details-title">Pizza Sauce</div>
                                        <div className="delivery-details-description">€ 2.00</div>
                                    </div>
                                    <button onClick={() => this.addTopping({id: 304, name: "Pizza Sauce", price: 2, image: "images/pizza-sauce.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                                </div>
                        </div>
                    </div>
                    <div className="extra-topping">
                        <div className="extra-topping-title">Pizza Topping</div>
                        <div className="extra-topping-list">
                            <div className="extra-option">
                                <div className="crust-image"><img src="images/bacon.svg"/></div>
                                <div className="delivery-details">
                                    <div className="delivery-details-title">Bacon</div>
                                    <div className="delivery-details-description">€ 2.00</div>
                                </div>
                                <button onClick={() => this.addTopping({id: 311, name: "Bacon", price: 2, image: "images/bacon.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                            </div>
                            <div className="extra-option">
                                <div className="crust-image"><img src="images/pepperoni.svg"/></div>
                                <div className="delivery-details">
                                    <div className="delivery-details-title">Pepperoni</div>
                                    <div className="delivery-details-description">€ 3.00</div>
                                </div>
                                <button onClick={() => this.addTopping({id: 312, name: "Pepperoni", price: 3, image: "images/pepperoni.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                            </div>
                            <div className="extra-option">
                                <div className="crust-image"><img src="images/salami.svg"/></div>
                                <div className="delivery-details">
                                    <div className="delivery-details-title">Salami</div>
                                    <div className="delivery-details-description">€ 3.00</div>
                                </div>
                                <button onClick={() => this.addTopping({id: 313, name: "Salami", price: 3, image: "images/salami.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                            </div>
                            <div className="extra-option">
                                <div className="crust-image"><img src="images/sausage.svg"/></div>
                                <div className="delivery-details">
                                    <div className="delivery-details-title">Sausage</div>
                                    <div className="delivery-details-description">€ 3.00</div>
                                </div>
                                <button onClick={() => this.addTopping({id: 314, name: "Sausage", price: 3, image: "images/sausage.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}}

export default Section3;
import React from "react";

import Modal from 'react-modal';
Modal.setAppElement('#root')


class Section3 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            modalIsOpenCrust: false,
        }
    }
    handleChangeRadio = (e) => {
        let price=0;
        switch(e.target.value){
            case "default": price=0;break;
            case "crispy": price=2;break;
            case "stuffed":price=5;break;
            case "crown":price=5;break;
            case "pan":price=5;break;
            case "chilli_moz":price=5;break;
            case "cheese":price=5;break;
            case "double_cheese":price=5;break;
        }
        this.props.changeCrust(e.target.value,price)
    }
    render(){
    return( 
     <>
        {new URLSearchParams(window.location.search).get('id') && 
            <>
    <div id="section2" className="section2">
    <div className="section2-inner">
        <div className="s3-title">Toppings</div>
        <div className="toppings-items">
            <ul>
            
            <li class="one-topping">
                            <div class="magic-topping"><button onClick={() => this.setState({modalIsOpenCrust: true})} id="crust"><img src="images/rotate.svg"/></button></div>
                            <div class="one-topping-image"><img src="images/crispy.svg"/></div>
                            {this.props.crust}
                        </li>

                {this.props.item &&
					            this.props.item.addons.map((item) => (
                                    <li className="one-topping">
                                    <div className="one-topping-image"><img src="./images/mayonnaise.svg"/></div>
                                    {item.name} {item.quantity > 1 && <>(x{item.quantity}) </>}
                                    </li>
                                ))}
                {this.props.extraAddons &&
					            this.props.extraAddons.map((item) => (
                                    <li className="one-topping">
                                    <div className="magic-topping"><button onClick={() => this.props.deleteTopping(item.id)}>-</button></div>
                                    <div className="one-topping-image"><img src="./images/kcal.svg"/></div>
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
                                    <button onClick={() => this.props.addTopping({id: 2001, name: "Chilli Sauce", price: 3, image: "images/chilli.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                                </div>
                                <div className="extra-option">
                                    <div className="crust-image"><img src="images/mayonnaise.svg"/></div>
                                    <div className="delivery-details">
                                        <div className="delivery-details-title">Mayonnaise Sauce</div>
                                        <div className="delivery-details-description">€ 1.00</div>
                                    </div>
                                    <button onClick={() => this.props.addTopping({id: 2002, name: "Mayonnaise", price: 1, image: "images/mayonnaise.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                                </div>
                                <div className="extra-option">
                                    <div className="crust-image"><img src="images/blackpepper.svg"/></div>
                                    <div className="delivery-details">
                                        <div className="delivery-details-title">Blackpepper Sauce</div>
                                        <div className="delivery-details-description">€ 2.00</div>
                                    </div>
                                    <button onClick={() => this.props.addTopping({id: 2003, name: "Blackpepper Sauce", price: 2, image: "images/blackpepper.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                                </div>
                                <div className="extra-option">
                                    <div className="crust-image"><img src="images/pizza-sauce.svg"/></div>
                                    <div className="delivery-details">
                                        <div className="delivery-details-title">Pizza Sauce</div>
                                        <div className="delivery-details-description">€ 2.00</div>
                                    </div>
                                    <button onClick={() => this.props.addTopping({id: 2004, name: "Pizza Sauce", price: 2, image: "images/pizza-sauce.svg",quantity: 1})}><img src="images/plus.svg"/></button>
                                </div>
                        </div>
                    </div>
                    <div className="extra-topping">
                        <div className="extra-topping-title">Pizza Topping</div>
                        <div className="extra-topping-list">

                            {this.props.item.extraAddons.map(item => (

                                <div className="extra-option">
                                <div className="crust-image"><img src="images/bacon.svg"/></div>
                                <div className="delivery-details">
                                    <div className="delivery-details-title">{item.name}</div>
                                    <div className="delivery-details-description">€ {item.price}</div>
                                </div>
                                <button onClick={() => this.props.addTopping({id: item.id, name: item.name, price: item.price, image: item.imgPath,quantity: 1})}><img src="images/plus.svg"/></button>
                                </div>
                            ) )
                           
    }
                        </div>
                    </div>
                </div>
            </div>
        </div></>}


        <Modal 
        isOpen={this.state.modalIsOpenCrust} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.setState({modalIsOpenCrust: false})}
        closeTimeoutMS={350}
        className={"ingredients_dialog"}
        style={{
          overlay: {
            position: 'fixed',
            transition: 'all 0.4s ease-in-out',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 9999
          }
        }}>
            <div id="ingredients_dialog" className="modal-dialog">
        <div className="ingredients-modal">
            <button className="modal-x" onClick={() => this.setState({modalIsOpenCrust: false})} ><img src="images/x.svg"/></button>
            <div className="ingredients-modal-inner">
                <div className="ingredients-modal-selects">
                    <div className="ingredients-modal-selects-title">
                        Pizza Crust
                        <div className="ingredients-modal-selects-title-smaller">Choose 1</div>
                    </div>
                    <div className="ingredients-selection-list">
                    <label for="default_ingredients"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                         Default
                                        <div className="ingredients-details-title-right">+ € 0.00</div>
                                    </div>
                                 </div>
                                 <input type="radio" default name="extra_ingredients" id="default_ingredients"  value="default" onChange={(e) => this.handleChangeRadio(e)}  />
                             </div>
                         </label>
                        <label for="crispy_ingredients"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                         Crispy
                                        <div className="ingredients-details-title-right">+ € 2.00</div>
                                    </div>
                                 </div>
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeRadio(e)} id="crispy_ingredients"  value="crispy" />
                             </div>
                         </label>
                         <label for="stuffed_ingredients"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Stuffed Crust Cheese
                                        <div className="ingredients-details-title-right">+ € 5.00</div>
                                    </div>
                                 </div>
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeRadio(e)} id="stuffed_ingredients" value="stuffed" />
                             </div>
                         </label>

                         <label for="crown_ingredients"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Crown Crust
                                        <div className="ingredients-details-title-right">+ € 5.00</div>
                                    </div>
                                 </div>
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeRadio(e)} id="crown_ingredients" value="crown" />
                             </div>
                         </label>
                         <label for="pan_ingredients"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Pan Pizza
                                        <div className="ingredients-details-title-right">+ € 5.00</div>
                                    </div>
                                 </div>
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeRadio(e)} id="pan_ingredients" value="pan" />
                             </div>
                         </label>

                         <label for="chilli_ingredients"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Filled Chili Mozzarella
                                        <div className="ingredients-details-title-right">+ € 5.00</div>
                                    </div>
                                 </div>
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeRadio(e)} id="chilli_ingredients" value="chilli_moz" />
                             </div>
                         </label>

                         <label for="cheese_ingredients"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Cheese Burst
                                        <div className="ingredients-details-title-right">+ € 5.00</div>
                                    </div>
                                 </div>
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeRadio(e)}  id="cheese_ingredients" value="cheese" />
                             </div>
                         </label>
                         <label for="doublecheese_ingredients"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Double Cheese Burst
                                        <div className="ingredients-details-title-right">+ € 5.00</div>
                                    </div>
                                 </div>
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeRadio(e)}  id="doublecheese_ingredients" value="double_cheese" />
                             </div>
                         </label>
                    </div>
                </div>
                <button className="add-to-cart-button" 
                onClick={() => this.setState({modalIsOpenCrust: false})}>
                    Close</button>
                </div>
                </div></div>







      </Modal>
      
        </>
    );
}}

export default Section3;
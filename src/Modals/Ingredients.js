import react from "react";
import {addToCart,changeNote} from "../data/cartData"

class ModalIngredients extends react.Component{
    constructor(props){
        super(props)
        this.state={
            price:0,
            priceBuffor:0,
            extrasBuffor:'',
            extras:'',
            note: '',

            crispy:false,
            stuffed:false,
            crown:false,
            pan:false,
            chilli_poz:false,
            cheese:false,
            double_cheese:false,

            pizzaSauce:false,
            chilliSauce:false,
            mayoSauce:false,
            blackpepperSauce:false,
            bbqSauce:false,
            truffleSauce:false,
            mexicanSauce:false,
            butterSauce:false,

            hotTop:false,
            beefBlackTop:false,
            beefRasherTop:false,
            beefSausageTop:false,
            cornTop:false,
            jalapenoTop:false,
            greenTop:false,
            onionTop:false

        }
    }
    componentDidMount = () => {
        this.setState({price: this.props.price})
    }
    addToPizza = (price,extra) => {
        this.setState({price: this.props.price+this.state.priceBuffor,
                        extras: this.state.extrasBuffor})
    }
    
    changeNoteProp = (e) => {
        this.setState({note: e.target.value})
        changeNote(this.props.id,this.state.note)
    }
    
    handleChange = (name) => {
        this.setState({ name })
    }
    render(){
    return(
        <div id="ingredients_dialog" className="modal-dialog">
        <div className="ingredients-modal">
            <button className="modal-x" onClick={() => this.props.closer()} ><img src="images/x.svg"/></button>
            <div className="ingredients-modal-inner">
                <div className="ingredients-modal-title">Custom Ingredients</div>
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
                                 <input type="radio" name="ingredients_option" id="default_ingredients"  value="crispy_ingredients" />
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
                                 <input type="radio" name="ingredients_option" id="crispy_ingredients"  value="crispy_ingredients" />
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
                                 <input type="radio" name="ingredients_option" id="stuffed_ingredients" value="stuffed_ingredients" />
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
                                 <input type="radio" name="ingredients_option" id="crown_ingredients" value="crown_ingredients" />
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
                                 <input type="radio" name="ingredients_option" id="pan_ingredients" value="pan_ingredients" />
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
                                 <input type="radio" name="ingredients_option" id="chilli_ingredients" value="chilli_ingredients" />
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
                                 <input type="radio" name="ingredients_option" id="cheese_ingredients" value="cheese_ingredients" />
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
                                 <input type="radio" name="ingredients_option" id="doublecheese_ingredients" value="doublecheese_ingredients" />
                             </div>
                         </label>
                    </div>
                </div>













                <div className="ingredients-modal-selects">
                    <div className="ingredients-modal-selects-title">
                        Pizza Sauce
                        <div className="ingredients-modal-selects-title-smaller">max 3</div>
                    </div>
                    <div className="ingredients-selection-list">
                        <label for="pizza_sauce"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Pizza Sauce
                                        <div className="ingredients-details-title-right">+ € 3.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="pizza_sauce" value="pizza_sauce" />
                             </div>
                         </label>
                         <label for="chilli_sauce"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Chilli Sauce
                                        <div className="ingredients-details-title-right">+ € 1.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="chilli_sauce" value="chilli_sauce" />
                             </div>
                         </label>


                         <label for="mayonnaise_sauce"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Mayonnaise Sauce
                                        <div className="ingredients-details-title-right">+ € 2.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="mayonnaise_sauce" value="mayonnaise_sauce" />
                             </div>
                         </label>
                         <label for="blackpepper_sauce"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Blackpepper Sauce
                                        <div className="ingredients-details-title-right">+ € 2.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="blackpepper_sauce" value="blackpepper_sauce" />
                             </div>
                         </label>
                         <label for="spicy_bbq"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Spicy BBQ
                                        <div className="ingredients-details-title-right">+ € 2.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="spicy_bbq" value="spicy_bbq" />
                             </div>
                         </label>
                         <label for="truffle_sauce"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Truffle Mushroom Sauce
                                        <div className="ingredients-details-title-right">+ € 1.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="truffle_sauce" value="truffle_sauce" />
                             </div>
                         </label>
                         <label for="mexican_seasoning"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Mexican Seasoning
                                        <div className="ingredients-details-title-right">+ € 4.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="mexican_seasoning" value="mexican_seasoning" />
                             </div>
                         </label>
                         <label for="butterschatch_sauce"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Butterschotch Sauce
                                        <div className="ingredients-details-title-right">+ € 5.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="butterschatch_sauce" value="butterschatch_sauce" />
                             </div>
                         </label>
                    </div>
                </div>




                <div className="ingredients-modal-selects">
                    <div className="ingredients-modal-selects-title">
                        Pizza Toppings
                        <div className="ingredients-modal-selects-title-smaller">max 5</div>
                    </div>
                    <div className="ingredients-selection-list">
                        <label for="spicy_tuna"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Hot Spicy Tuna
                                        <div className="ingredients-details-title-right">+ € 4.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="spicy_tuna" value="spicy_tuna" />
                             </div>
                         </label>
                         <label for="beef_black"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Beef Black Pepper
                                        <div className="ingredients-details-title-right">+ € 3.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="beef_black" value="beef_black" />
                             </div>
                         </label>


                         <label for="beef_rasher"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Beef Rasher
                                        <div className="ingredients-details-title-right">+ € 2.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="beef_rasher" value="beef_rasher" />
                             </div>
                         </label>
                         <label for="beef_sausage"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Beef Sausage
                                        <div className="ingredients-details-title-right">+ € 3.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="beef_sausage" value="beef_sausage" />
                             </div>
                         </label>
                         <label for="corn"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Corn
                                        <div className="ingredients-details-title-right">+ € 2.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="corn" value="corn" />
                             </div>
                         </label>
                         <label for="jalapeno"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Jalapeno
                                        <div className="ingredients-details-title-right">+ € 1.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="jalapeno" value="jalapeno" />
                             </div>
                         </label>
                         <label for="green_pepper"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Green pepper
                                        <div className="ingredients-details-title-right">+ € 3.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" id="green_pepper" value="green_pepper" />
                             </div>
                         </label>
                         <label for="onion"> 
                            <div className="ingredients-option">
                                 <div className="ingredients-details">
                                     <div className="ingredients-details-title">
                                        Onion
                                        <div className="ingredients-details-title-right">+ € 2.00</div>
                                    </div>
                                 </div>
                                 <input type="checkbox" name="ingredients_option" onChange={(e) => this.handleChange(e)} checked={this.state.crispy}  id="onion" value="onion" />
                             </div>
                         </label>
                    </div>
                </div>

                <div className="ingredients-modal-selects-title">
                    Note :
                    <div className="ingredients-modal-selects-title-smaller">(optional)</div>
                </div>
                <input placeholder="Make it more spicy" onChange={(e) => this.changeNoteProp(e)} className="note-input-modal"/>
                <div className="ingredients-total">
                    Total Pizza
                    <div className="s3-item-cart">{this.props.quantity}</div>
                </div>
                <button className="add-to-cart-button" 
                onClick={() => addToCart(
                    this.props.id,
                    this.props.name,
                    this.props.image,
                    this.state.price,
                    this.state.note,
                    this.props.quantity,
                    this.props.size,
                    this.state.extras)
                    }>Add to Cart - €{this.state.price+this.state.priceBuffor}</button>
            </div>
        </div>
    </div>
     
    );}
}

export default ModalIngredients;
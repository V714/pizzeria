import react from "react";

class ModalIngredients extends react.Component{
    constructor(props){
        super(props)
        this.state={
            price:this.props.price,
            priceBuffor:0,
            note: '',
            crustPrice: 0,

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
    finishAdding = () => {
        let extras = '';

        this.state.pizzaSauce ? extras+="pizza sauce, " : extras=extras;
        this.state.chilliSauce ? extras+="chilli sauce, " : extras=extras;
        this.state.mayoSauce ? extras+="mayonnaise sauce, " : extras=extras;
        this.state.blackpepperSauce ? extras+="blackpepper sauce, " : extras=extras;
        this.state.bbqSauce ? extras+="spicy BBQ, " : extras=extras;
        this.state.truffleSauce ? extras+="truffle mushroom sauce, " : extras=extras;
        this.state.mexicanSauce ? extras+="mexican seasoning, " : extras=extras;
        this.state.butterSauce ? extras+="butterschotch sauce, " : extras=extras;

        this.state.hotTop ? extras+="hot spicy tuna, " : extras=extras;
        this.state.beefBlackTop ? extras+="beef black pepper, " : extras=extras;
        this.state.beefRasherTop ? extras+="beef rasher, " : extras=extras;
        this.state.beefSausageTop ? extras+="beef sausage, " : extras=extras;
        this.state.cornTop ? extras+="corn, " : extras=extras;
        this.state.jalapenoTop ? extras+="jalapeno, " : extras=extras;
        this.state.greenTop ? extras+="green pepper, " : extras=extras;
        this.state.onionTop ? extras+="onion, " : extras=extras;
        console.log(extras)
        this.props.addProduct({
                    
            id: this.props.id,
            name: this.props.name,
            image: this.props.image,
            price: this.props.price+this.state.crustPrice+this.state.priceBuffor,
            note: this.props.note,
            quantity: this.state.quantity,
            extras: extras,
            size: this.props.size})

    }
    changeNoteProp = (e) => {
        this.setState({note: e.target.value})
    }
    handleChangeRadio = (e) => {
        console.log([e.target.id])
        let price=0;
        switch(e.target.value){
            case "default": price=0;
            case "crispy": price=2;
            case "stuffed":price=5;
            case "crown":price=5;
            case "pan":price=5;
            case "chilli_moz":price=5;
            case "cheese":price=5;
            case "double_cheese":price=5;
        }
        if(this.state[e.target.id]){
            this.setState({crustPrice: price})
    }
    }
    handleChangeCheckbox = (e) => {
        let price=0;
        switch(e.target.name){

            case "pizzaSauce":price=3;break;
            case "chilliSauce":price=1;break;
            case "mayoSauce":price=2;break;
            case "blackpepperSauce":price=2;break;
            case "bbqSauce":price=2;break;
            case "truffleSauce":price=1;break;
            case "mexicanSauce":price=4;break;
            case "butterSauce":price=5;break;

            case "hotTop":price=4;break;
            case "beefBlackTop":price=3;break;
            case "beefRasherTop":price=2;break;
            case "beefSausageTop":price=3;break;
            case "cornTop":price=2;break;
            case "jalapenoTop":price=1;break;
            case "greenTop":price=3;break;
            case "onionTop":price=2;break;
        }
        if(this.state[e.target.name]){
            this.setState({priceBuffor: this.state.priceBuffor-price})
        }
        else{
            this.setState({priceBuffor: this.state.priceBuffor+price})}

        this.setState({[e.target.name]: !this.state[e.target.name]})
        console.log(e.target.name)
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
                                 <input type="radio" name="extra_ingredients" id="default_ingredients"  value="default" onChange={(e) => this.handleChangeCheckbox(e)}  />
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
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeCheckbox(e)} id="crispy_ingredients"  value="crispy" />
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
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeCheckbox(e)} id="stuffed_ingredients" value="stuffed" />
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
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeCheckbox(e)} id="crown_ingredients" value="crown" />
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
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeCheckbox(e)} id="pan_ingredients" value="pan" />
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
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeCheckbox(e)} id="chilli_ingredients" value="chilli_moz" />
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
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeCheckbox(e)}  id="cheese_ingredients" value="cheese" />
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
                                 <input type="radio" name="extra_ingredients" onChange={(e) => this.handleChangeCheckbox(e)}  id="doublecheese_ingredients" value="double_cheese" />
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
                                 <input type="checkbox" name="pizzaSauce" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.pizzaSauce} id="pizza_sauce" value="pizza_sauce" />
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
                                 <input type="checkbox" name="chilliSauce" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.chilliSauce} id="chilli_sauce" value="chilli_sauce" />
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
                                 <input type="checkbox" name="mayoSauce" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.mayoSauce}  id="mayonnaise_sauce" value="mayonnaise_sauce" />
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
                                 <input type="checkbox" name="blackpepperSauce" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.blackpepperSauce} id="blackpepper_sauce" value="blackpepper_sauce" />
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
                                 <input type="checkbox" name="bbqSauce" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.bbqSauce} id="spicy_bbq" value="spicy_bbq" />
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
                                 <input type="checkbox" name="truffleSauce" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.truffleSauce} id="truffle_sauce" value="truffle_sauce" />
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
                                 <input type="checkbox" name="mexicanSauce" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.mexicanSauce} id="mexican_seasoning" value="mexican_seasoning" />
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
                                 <input type="checkbox" name="butterSauce" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.butterSauce} id="butterschatch_sauce" value="butterschatch_sauce" />
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
                                 <input type="checkbox" name="hotTop" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.hotTop} id="spicy_tuna" value="spicy_tuna" />
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
                                 <input type="checkbox" name="beefBlackTop" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.beefBlackTop}  id="beef_black" value="beef_black" />
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
                                 <input type="checkbox" name="beefRasherTop" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.beefRasherTop} id="beef_rasher" value="beef_rasher" />
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
                                 <input type="checkbox" name="beefSausageTop" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.beefSausageTop} id="beef_sausage" value="beef_sausage" />
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
                                 <input type="checkbox" name="cornTop" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.cornTop} id="corn" value="corn" />
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
                                 <input type="checkbox" name="jalapenoTop" id="jalapeno" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.jalapenoTop} value="jalapeno" />
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
                                 <input type="checkbox" name="greenTop" id="green_pepper" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.greenTop} value="green_pepper" />
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
                                 <input type="checkbox" name="onionTop" onChange={(e) => this.handleChangeCheckbox(e)} checked={this.state.onionTop}  id="onion" value="onion" />
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
                onClick={() => this.finishAdding()}>
                    Add to Cart - €{this.state.price+this.state.crustPrice+this.state.priceBuffor}</button>
            </div>
        </div>
    </div>
     
    );}
}

export default ModalIngredients;
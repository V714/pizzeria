import react from "react";

class ModalIngredients extends react.Component{
    constructor(props){
        super(props)
        this.state={
            price:this.props.price,
            priceBuffor:0,
            note: '',
            crustPrice: 0,
            crust:'default crust, ',

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
        switch(this.props.size){
            case 1: extras='33cm, ';break;
            case 2: extras='40cm, ';break;
            case 3: extras='50cm, ';break;
        }
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
            note: this.state.note,
            quantity: this.props.quantity,
            extras: this.state.crust+extras,
            size: this.props.size})
        
        this.props.closer();
    }
    changeNoteProp = (e) => {
        this.setState({note: e.target.value})
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
        this.setState({crustPrice: price,crust: e.target.value+' crust, '})
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
    }
    render(){
    return(
        <div id="ingredients_dialog" className="modal-dialog">
        <div className="ingredients-modal">
            <button className="modal-x" onClick={() => this.props.closer()} ><img src="images/x.svg"/></button>
            <div className="ingredients-modal-inner">
                <div className="ingredients-modal-title">Package 1</div>
                    
                    
                {this.props.item && this.props.item.options.map(item => {return(
                <div className="ingredients-modal-selects">
                    <div className="ingredients-modal-selects-title">
                    {item.sectionName}:
                    <div className="ingredients-modal-selects-title-smaller">Choose 1</div>
                    </div>
                    <div className="ingredients-selection-list">


                    {item.availableProducts.map((item2,index) => {return(
                        

                        <label for={item2.optionId}> 
                        <div className="ingredients-option">
                            <div className="ingredients-details">
                                <div className="ingredients-details-title">
                                    {item2.product.name}
                                    {item2.extraPrice === 0 ? '' : <div className="ingredients-details-title-right">+ € {item2.extraPrice}</div>}
                                        
                                </div>
                            </div>
                            {index === 0 ? 
                                <input type="radio" name={item.sectionName} id={item2.optionId} defaultChecked /> : 
                                <input type="radio" name={item.sectionName} id={item2.optionId} />}
                            
                        </div>
                    </label>)

                    })

                    }
                    



                    </div>
                    </div>)


                })}
                    
                






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
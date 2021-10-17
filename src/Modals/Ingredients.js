import react from "react";

class ModalIngredients extends react.Component{
    constructor(props){
        super(props)
        this.state={
            note: '',
        }
    }
    finishAdding = () => {
        let idOfExtra = ''
        let extrasIds = []
        let extrasPrice = 0
        let extras = ''
        let options = []

        {this.props.item && this.props.item.options.map(item => {
            {   
                try{
                    idOfExtra = (Object.entries(this.state).find(item2 => item2[0] === item.sectionName)[1]).toString()
                }
                catch {
                    idOfExtra = item.availableProducts[0].product.id
                }
                extrasIds.push(idOfExtra)
                const extraProduct = item.availableProducts.find(item2 => item2.product.id===idOfExtra)
                
                extrasPrice += extraProduct.extraPrice
                extras += extraProduct.product.name+", "
                options.push({sectionId: item.sectionId, chosenOptionId: extraProduct.optionId})
                }})}


        this.props.addProduct({
            id: this.props.item.id,
            name: this.props.item.packageName,
            imgPath: this.props.image,
            price: this.props.item.price+extrasPrice,
            note: this.state.note,
            quantity: 1,
            packageSelectedOptions: options,
            extras: extras,
            extrasIds: extrasIds,
            type: 'Package'})

        this.props.closer();
    }
    changeNoteProp = (e) => {
        this.setState({note: e.target.value})
    }

    handleRadio = (e) => {
        this.setState({[e.target.name]: [e.target.value]})
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
                    <div className="ingredients-modal-selects-title"> {item.sectionName}:
                        <div className="ingredients-modal-selects-title-smaller">Choose 1</div>
                    </div>
                    <div className="ingredients-selection-list">

                    {item.availableProducts.map((item2,index) => {return(
                       
                        <label for={item.sectionName+item2.optionId}> 
                        <div className="ingredients-option">
                            <div className="ingredients-details">
                                <div className="ingredients-details-title">
                                    {item2.product.name}
                                    {item2.extraPrice === 0 ? '' : <div className="ingredients-details-title-right">+ € {item2.extraPrice}</div>}
                                        
                                </div>
                            </div>
                            {index === 0 ? 
                                <input type="radio" value={item2.product.id} onChange={e => this.handleRadio(e)} name={item.sectionName} id={item.sectionName+item2.optionId} defaultChecked /> : 
                                <input type="radio" value={item2.product.id} onChange={e => this.handleRadio(e)} name={item.sectionName} id={item.sectionName+item2.optionId} />}
                            
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
                    Add to Cart - €{this.props.item.price}</button>
            </div>
        </div>
    </div>
     
    );}
}

export default ModalIngredients;
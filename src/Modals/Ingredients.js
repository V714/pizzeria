/* import { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root')


function ModalIngredients (props){
    const [note,setNote] = useState('')

    const finishAdding = () => {
        let idOfExtra = ''
        let extrasIds = []
        let extrasPrice = 0
        let extras = ''
        let options = []

        {props.item && props.item.options.map(item => {
            {   
                try{
                    idOfExtra = (Object.entries(state).find(item2 => item2[0] === item.sectionName)[1]).toString()
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

        props.closer();
    }
    const changeNoteProp = (e) => {
        setNote(e.target.value)
    }

    const handleRadio = (e) => {
        switch(e.target.name){
            
        }
        setState({[e.target.name]: [e.target.value]})
    }
    
    return( <Modal 
        isOpen={state.modalIsOpenIngr} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => setState({modalIsOpenIngr: false})}
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
            <button className="modal-x" onClick={() => props.closer()} ><img src="images/x.svg"/></button>
            <div className="ingredients-modal-inner">
                <div className="ingredients-modal-title">Package 1</div>
                    
                    
                {props.item && props.item.options.map(item => {return(
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
                                <input type="radio" value={item2.product.id} onChange={e => handleRadio(e)} name={item.sectionName} id={item.sectionName+item2.optionId} defaultChecked /> : 
                                <input type="radio" value={item2.product.id} onChange={e => handleRadio(e)} name={item.sectionName} id={item.sectionName+item2.optionId} />}
                            
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
                <input placeholder="Make it more spicy" onChange={(e) => changeNoteProp(e)} className="note-input-modal"/>
                <div className="ingredients-total">
                    Total Pizza
                    <div className="s3-item-cart">{props.quantity}</div>
                </div>
                <button className="add-to-cart-button" 
                onClick={() => finishAdding()}>
                    Add to Cart - €{props.item.price}</button>
            </div>
        </div>
    </div>
      </Modal>
       
     
    );
}

export default ModalIngredients; */
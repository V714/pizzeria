import React, { useState } from "react";
import Modal from 'react-modal';
import { useSelector } from "react-redux";

Modal.setAppElement('#root')

function Section2(props){
    
    const [modalIsOpenCrust,setModalIsOpenCrust] = useState(false)
    const lang = useSelector(state=>state.language)

    return( 
     <>
        {props.item && 
            <>
    <div id="section2" className="section2">
    <div className="section2-inner">
        <div className="s3-title">{lang.details.section2toppings}</div>
        <div className="toppings-items">
            <ul>
            
            <li class="one-topping">
                            <div class="magic-topping"><button onClick={() => setModalIsOpenCrust(true)} id="crust"><img src="images/rotate.svg"/></button></div>
                            <div class="one-topping-image"><img src="images/crispy.svg"/></div>
                            {props.crust.name}
                        </li>
                {props.extraAddons &&
					            props.extraAddons.map((item) => (
                                    <li className="one-topping">
                                    <div className="magic-topping"><button onClick={() => props.deleteTopping(item.id)}>-</button></div>
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
                <div className="s3-title">{lang.details.section2extra_toppings}</div>
                <div className="extra-toppings">
                    <div className="extra-topping">
                        <div className="extra-topping-title">Pizza Sauce</div>
                        <div className="extra-topping-list">

                            {props.item.extraAddons.map(item => {if(item.type==='sauce')return(

                                <div className="extra-option">
                                <div className="crust-image"><img src={item.imgPath}/></div>
                                <div className="delivery-details">
                                    <div className="delivery-details-title">{item.name}</div>
                                    <div className="delivery-details-description">{lang.currency} {item.price}</div>
                                </div>
                                <button onClick={() => props.addTopping({id: item.id, name: item.name, price: item.price, image: item.imgPath,quantity: 1})}><img src="images/plus.svg"/></button>
                                </div>
                            )} )
                           
    }
                        </div>
                    </div>
                    
                    <div className="extra-topping">
                        <div className="extra-topping-title">Pizza Topping</div>
                        <div className="extra-topping-list">

                            {props.item.extraAddons.map(item => {if(item.type==='top')return(

                                <div className="extra-option">
                                <div className="crust-image"><img src={item.imgPath}/></div>
                                <div className="delivery-details">
                                    <div className="delivery-details-title">{item.name}</div>
                                    <div className="delivery-details-description">{lang.currency} {item.price}</div>
                                </div>
                                <button onClick={() => props.addTopping({id: item.id, name: item.name, price: item.price, image: item.imgPath,quantity: 1})}><img src="images/plus.svg"/></button>
                                </div>
                            )} )
                           
    }
                        </div>
                    </div>
                </div>
            </div>
        </div></>}


        <Modal 
        isOpen={modalIsOpenCrust} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => setModalIsOpenCrust(false)}
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
            <button className="modal-x" onClick={() => setModalIsOpenCrust(false)} ><img src="images/x.svg"/></button>
            <div className="ingredients-modal-inner">
                <div className="ingredients-modal-selects">
                    <div className="ingredients-modal-selects-title">
                        Pizza Crust
                        <div className="ingredients-modal-selects-title-smaller">Choose 1</div>
                    </div>
                    <div className="ingredients-selection-list">
                        {props.item.crust.map(_item=>{
                            return(
                                <label for={_item.id+"_ingredients"}> 
                                    <div className="ingredients-option">
                                         <div className="ingredients-details">
                                             <div className="ingredients-details-title">
                                                 {_item.name}
                                                <div className="ingredients-details-title-right">+ € {_item.price}</div>
                                            </div>
                                         </div>
                                         <input type="radio" default name="extra_ingredients" id={_item.id+"_ingredients"}  value="default" onChange={() => props.setCrust(_item)}  />
                                     </div>
                                 </label>
                            )
                        })}
                       
                    </div>
                </div>
                <button className="add-to-cart-button" 
                onClick={() => setModalIsOpenCrust(false)}>
                    Close</button>
                </div>
                </div></div>







      </Modal>
      
        </>
    );
}

export default Section2;
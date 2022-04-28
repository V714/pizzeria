import Modal from 'react-modal';


Modal.setAppElement('#root')
export default function ModalDelivery (props){
        return(
        <Modal 
            isOpen={props.modalIsOpenDeli} 
            shouldCloseOnOverlayClick={true} 
            onRequestClose={() => props.closer()}
            closeTimeoutMS={350}
            className={"delivery-modal"}
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
                <div class="modal fade" id="change_delivery_modal" role="dialog">
            <div class="modal-dialog">
                <div class="delivery-modal">
                    <button class="modal-x" onClick={() => props.closer() }><img src="images/x.svg"/></button>
                    <div class="delivery-modal-inner">
                        <div class="delivery-modal-title">{props.lang.cart.delivery.choose}</div>
                       <label for="delivery_radio"> 
                           <div class={"delivery-option " +(props.delivery?"delivery-active":"")}>
                                <div class="delivery-image"><img src="images/delivery-white.svg"/></div>
                                <div class="delivery-details">
                                    <div class="delivery-details-title">{props.lang.cart.delivery.delivery}</div>
                                    <div class="delivery-details-description">{props.lang.cart.delivery.delivery_desc}</div>
                                </div>
                                <input type="radio" name="delivery_option" onClick={() => props.setDelivery(true)} id="delivery_radio"  value="delivery_order" checked={props.delivery}  />
                            </div>
                        </label>
                        <label for="pickup_radio"> 
                            <div class={"delivery-option " +(props.delivery?"":"delivery-active")}>
                                 <div class="delivery-image"><img src="images/pickup.svg"/></div>
                                 <div class="delivery-details">
                                     <div class="delivery-details-title">{props.lang.cart.delivery.pickup}</div>
                                     <div class="delivery-details-description">{props.lang.cart.delivery.pickup_desc}</div>
                                 </div>
                                 <input type="radio" name="delivery_option" id="pickup_radio" onClick={() => props.setDelivery(false)} value="pickup_order" checked={!props.delivery}/>
                             </div>
                         </label>
                       
                         <div class="confirm-delivery" ><button onClick={() => props.closer() }>{props.lang.cart.delivery.confirm}</button></div>
                    </div>
                </div>
            </div>
          </div>
          </Modal>
            
        );
}

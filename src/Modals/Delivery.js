import react from 'react';

class ModalDelivery extends react.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="modal fade" id="change_delivery_modal" role="dialog">
            <div class="modal-dialog">
                <div class="delivery-modal">
                    <button class="modal-x" onClick={() => this.props.closer() }><img src="images/x.svg"/></button>
                    <div class="delivery-modal-inner">
                        <div class="delivery-modal-title">Choose Order Option</div>
                       <label for="delivery_radio"> 
                           <div class="delivery-option">
                                <div class="delivery-image"><img src="images/delivery-white.svg"/></div>
                                <div class="delivery-details">
                                    <div class="delivery-details-title">Delivery Order</div>
                                    <div class="delivery-details-description">You will get free delivery if the range is 21.Bezirk (District in Vienna)</div>
                                </div>
                                <input type="radio" name="delivery_option" onClick={() => this.props.changeDelivery(true)} id="delivery_radio"  value="delivery_order" checked={this.props.delivery}  />
                            </div>
                        </label>
                        <label for="pickup_radio"> 
                            <div class="delivery-option">
                                 <div class="delivery-image"><img src="images/pickup.svg"/></div>
                                 <div class="delivery-details">
                                     <div class="delivery-details-title">Pickup Order</div>
                                     <div class="delivery-details-description">For every self-pickup, you will get 0.33L Pepsi for free in 10€ minumum order</div>
                                 </div>
                                 <input type="radio" name="delivery_option" id="pickup_radio" onClick={() => this.props.changeDelivery(false)} value="pickup_order" checked={!this.props.delivery}/>
                             </div>
                         </label>
                       
                         <div class="confirm-delivery" ><button onClick={() => this.props.closer() }>Confirm</button></div>
                    </div>
                </div>
            </div>
          </div>
        );
}}

export default ModalDelivery;
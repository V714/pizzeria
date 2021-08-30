import react from 'react';

class ModalCheckout extends react.Component{
    render(){
        return(
    <div  id="checkoutNow_dialog" class="modal-dialog">
            <div class="checkoutNow-modal-inner">
                <button class="modal-x" onClick={() => this.props.closer()}><img src="images/x.svg"/></button>
                <div class="checkoutNow-modal-title">Choose Location</div>
                <button id="current_location" onclick="getLocation();" class="checkoutNow-modal-map"></button>
                <form>
                    <div class="checkoutNow-modal-info-double">
                        <div class="checkoutNow-modal-info-name">
                            Recipient's Name
                            <input placeholder="JohnDoeExample"/>
                        </div>
                        <div class="checkoutNow-modal-info-telp">
                            Telp Number
                            <input placeholder="+62 021-2029-2932"/>
                        </div>
                    </div>
                    <div class="checkoutNow-modal-info-addres">
                        Label Addres
                        <input placeholder="Company"/>
                        <div class="checkoutNow-modal-info-smaller">Example : House, Company, Apartment</div>
                    </div>
                    <div class="checkoutNow-modal-info-address">
                        Address
                        <input placeholder="21DistrictExample, Sun Resident"/>
                     </div>
                     <div class="checkoutNow-modal-buttons">
                         <button class="checkoutNow-modal-button">Cancel</button>
                         <button class="checkoutNow-modal-button actived">Confirm</button>
                     </div>
                </form>
            </div>
    </div>
        );
}}

export default ModalCheckout;
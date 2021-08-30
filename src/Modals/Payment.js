import react from 'react';

class ModalPayment extends react.Component{
    render(){
        return(
            <div class="modal fade" id="payment_modal" role="dialog">
                    <button class="modal-x" onClick={() => this.props.closer()}><img src="images/x.svg"/></button>
            <div  id="payment_dialog" class="modal-dialog">
                    <div class="payment-modal-inner">
                        <div class="delivery-modal-title">Payment</div>
                        <div class="delivery-modal-title-small">Choose Payment Method</div>
                       <label for="crypto_payment"> 
                           <div class="delivery-option">
                                <div class="delivery-image"><img src="images/crypto.svg"/></div>
                                <div class="delivery-details">
                                    <div class="delivery-details-title">Cryptocurrency</div>
                                    <div class="delivery-details-description">Krypto in eine Pizza</div>
                                </div>
                                <input type="radio" name="payment_option" id="crypto_payment" value="crypto_payment" checked />
                            </div>
                        </label>
                        <label for="kredit_payment"> 
                            <div class="delivery-option">
                                 <div class="delivery-image"><img src="images/kredit.svg"/></div>
                                 <div class="delivery-details">
                                     <div class="delivery-details-title">Kredit Karte / Debit</div>
                                     <div class="delivery-details-description">You Fast respon and 24/7</div>
                                 </div>
                                 <input type="radio" name="payment_option" id="kredit_payment" value="kredit_payment"  />
                             </div>
                         </label>
                         <label for="klarna_payment"> 
                            <div class="delivery-option">
                                 <div class="delivery-image"><img src="images/klarna.svg"/></div>
                                 <div class="delivery-details">
                                     <div class="delivery-details-title">Klarna</div>
                                     <div class="delivery-details-description">Klarna zahlung</div>
                                 </div>
                                 <input type="radio" name="payment_option" id="klarna_payment" value="klarna_payment"  />
                             </div>
                         </label>
                         <label for="cash_payment"> 
                            <div class="delivery-option">
                                 <div class="delivery-image"><img src="images/cash.svg"/></div>
                                 <div class="delivery-details">
                                     <div class="delivery-details-title">Payment by Delivery</div>
                                     <div class="delivery-details-description">Zahlen Sie, wenn das Essen kommt</div>
                                 </div>
                                 <input type="radio" name="payment_option" id="cash_payment" value="cash_payment"  />
                             </div>
                         </label>
                         <div class="checkoutNow-modal-info-addres">
                            Cashback Code
                            <input placeholder="Füge deinen Chargeback-Code"/>
                            <div class="checkoutNow-modal-info-smaller-double">
                                <div class="checkoutNow-modal-info-smaller-left">Noch kein Chargeback Kunde?</div>
                                <div class="checkoutNow-modal-info-smaller-right"><a><u>Hier Anmelden</u></a></div>
                            </div>
                        </div>
                        <div class="checkoutNow-modal-info-addres">
                            <u>Coupon Code</u>
                            <input placeholder="Gebe dein Coupon Code ein"/>
                        </div>
                        <div class="s1-cart-summary-modal">
                            <div class="s1-cart-summary-title">Payment Summary</div>
                            <div class="s1-cart-summary-price">
                                <div class="s1-cart-summary-price-left">Price (10 items)</div>
                                <div class="s1-cart-summary-price-right">€ 120.32</div>
                            </div>
                            <div class="s1-cart-summary-price">
                                <div class="s1-cart-summary-price-left">Delivery Fee</div>
                                <div class="s1-cart-summary-price-right">€ 3.00</div>
                            </div>
                            <div class="s1-cart-summary-total">
                                <div class="s1-cart-summary-total-left">Total</div>
                                <div class="s1-cart-summary-total-right">€ 123.32</div>
                        </div>
                        <button id="payment_go" class="checkout-now-button">Next</button>
                    </div>
                </div>
            </div>
          </div>
        );
}}

export default ModalPayment;
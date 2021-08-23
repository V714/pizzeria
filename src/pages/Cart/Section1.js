
function Section1 (){
    return(
        <div className="section1-item">
            <div className="section1-item-inner">
                <div className="page-links">
                    <ul>
                        <li><a href="home.html">Home</a></li>
                        <li><a className="actual"><img src="images/right-vector.svg"/>Shopping Cart</a></li>
                    </ul>
                </div>

                <div className="s1-cart">
                    <div className="s1-cart-left">
                        <div className="s1-cart-left-title">Shopping Cart</div>

                        <div className="s1-cart-left-list">
                            <label className="checkboxLabel"><input name="cart-item" type="checkbox" onclick="checkToggle(this)" /> <span className="checkmark"></span>
                                <div className="cart-item-detail">
                                    <div className="cart-item-detail-photo">
                                        <div className="cart-item-detail-image"><img src="images/risotto.webp"/></div>
                                        <div className="cart-item-detail-addNote"><button id="change_note"><img src="images/note.svg"/>Add Note</button></div>
                                    </div>
                                    <div className="cart-item-detail-text">
                                        <div className="cart-item-detail-name">Italian Risotto</div>
                                        <div className="cart-item-detail-price">€ 30.00</div>
                                        <div className="cart-item-detail-note">
                                            <div className="cart-item-detail-note-text"></div>
                                        </div>
                                    </div>
                                    <div className="cart-item-detail-quantity">
                                        <button onclick="deleteCartItem(this)"><img src="images/bin.svg"/></button>
                                        <div className="s3-item-cart">4</div>
                                    </div>
                                </div>
                            </label>
                            <label className="checkboxLabel"><input name="cart-item" type="checkbox" onclick="checkToggle(this)" /> <span className="checkmark"></span>
                                <div className="cart-item-detail">
                                    <div className="cart-item-detail-photo">
                                        <div className="cart-item-detail-image"><img src="images/combo1.webp"/></div>
                                        <div className="cart-item-detail-addNote"><button id="change_note"><img src="images/note.svg"/>Add Note</button></div>
                                    </div>
                                    <div className="cart-item-detail-text">
                                        <div className="cart-item-detail-name">Pizza + Pepsi (Company Offer 1)</div>
                                        <div className="cart-item-detail-price">€ 30.00</div>
                                        <div className="cart-item-detail-note">Note :
                                            <div className="cart-item-detail-note-text">
                                                Please add a little chilli powder in there and add some mayonese too
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-item-detail-quantity">
                                        <button onclick="deleteCartItem(this)"><img src="images/bin.svg"/></button>
                                        <div className="s3-item-cart">3</div>
                                    </div>
                                </div>
                            </label>
                            <label className="checkboxLabel"><input name="cart-item" type="checkbox" onclick="checkToggle(this)" /> <span className="checkmark"></span>
                                <div className="cart-item-detail">
                                    <div className="cart-item-detail-photo">
                                        <div className="cart-item-detail-image"><img src="images/combo2.webp"/></div>
                                        <div className="cart-item-detail-addNote"><button id="change_note"><img src="images/note.svg"/>Add Note</button></div>
                                    </div>
                                    <div className="cart-item-detail-text">
                                        <div className="cart-item-detail-name">Johny Walker + 2x1,5L + 1 Pizza (33 cm) </div>
                                        <div className="cart-item-detail-price">€ 30.00</div>
                                        <div className="cart-item-detail-note">Note :
                                            <div className="cart-item-detail-note-text">
                                                Please add a little chilli powder in there and add some mayonese too
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-item-detail-quantity">
                                        <button onclick="deleteCartItem(this)"><img src="images/bin.svg"/></button>
                                        <div className="s3-item-cart">2</div>
                                    </div>
                                </div>
                            </label>
                            <label className="checkboxLabel"><input name="cart-item" type="checkbox" onclick="checkToggle(this)" /> <span className="checkmark"></span>
                                <div className="cart-item-detail">
                                    <div className="cart-item-detail-photo">
                                        <div className="cart-item-detail-image"><img src="images/vodka.webp"/></div>
                                        <div className="cart-item-detail-addNote"><button id="change_note"><img src="images/note.svg"/>Add Note</button></div>
                                    </div>
                                    <div className="cart-item-detail-text">
                                        <div className="cart-item-detail-name">Vodka 1L</div>
                                        <div className="cart-item-detail-price">€ 30.00</div>
                                        <div className="cart-item-detail-note">
                                            <div className="cart-item-detail-note-text">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-item-detail-quantity">
                                        <button onclick="deleteCartItem(this)"><img src="images/bin.svg"/></button>
                                        <div className="s3-item-cart">1<img src="images/plus.svg"/>
                                         </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="s1-cart-right">
                        <div className="s1-cart-right-inner">
                            <div className="s1-cart-delivery">
                                <div className="s1-cart-delivery-info">
                                    <img src="images/delivery.svg"/> Delivery Order
                                </div>
                                <button id="change_delivery" className="delivery-change-button">Change</button>
                            </div>
                            <div className="s1-cart-summary">
                                <div className="s1-cart-summary-title">Payment Summary</div>
                                <div className="s1-cart-summary-price">
                                    <div className="s1-cart-summary-price-left">Price (10 items)</div>
                                    <div className="s1-cart-summary-price-right">€ 120.32</div>
                                </div>
                                <div className="s1-cart-summary-total">
                                    <div className="s1-cart-summary-total-left">Total</div>
                                    <div className="s1-cart-summary-total-right">€ 123.32</div>
                            </div>
                            <button id="checkoutNow" className="checkout-now-button">Checkout Now</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        </div>
    );
}

export default Section1;
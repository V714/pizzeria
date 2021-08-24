

function ModalCart(){
    return(
        <div className="notification-modal">
        <div className="notification-modal-inner">
            <div className="fm-head">
                <div className="fm-head-left">Cart (5)</div>
                <div className="fm-head-right"><a>View all</a></div>
            </div>
            <div className="cart-list">
                <ul>
                    <li>
                        <div className="cart-element-inner">
                            <div className="cart-element-left"><img src="images/risotto.webp"/>
                                <div className="cart-element-details">
                                    <div className="cart-element-name">Italian Risotto</div>
                                    <div className="cart-element-quantity">1 Items</div>
                                </div>
                            </div>
                            <div className="cart-element-right">€ 30.00</div>
                        </div>
                    </li>
                    <li>
                        <div className="cart-element-inner">
                            <div className="cart-element-left"><img src="images/combo3.webp"/>
                                <div className="cart-element-details">
                                    <div className="cart-element-name">Pizza + Pepsi (Comparison Janusz to D*ck) </div>
                                    <div className="cart-element-quantity">3 Items</div>
                                </div>
                            </div>
                            <div className="cart-element-right">€ 30.00</div>
                        </div>
                    </li>
                    <li>
                        <div className="cart-element-inner">
                            <div className="cart-element-left"><img src="images/combo1.webp"/>
                                <div className="cart-element-details">
                                    <div className="cart-element-name">Johny Walker + 2x1,5l ololool</div>
                                    <div className="cart-element-quantity">2 Items</div>
                                </div>
                            </div>
                            <div className="cart-element-right">€ 30.00</div>
                        </div>
                    </li>
                    <li>
                        <div className="cart-element-inner">
                            <div className="cart-element-left"><img src="images/vodka.webp"/>
                                <div className="cart-element-details">
                                    <div className="cart-element-name">Vodka 1L</div>
                                    <div className="cart-element-quantity">1 Items</div>
                                </div>
                            </div>
                            <div className="cart-element-right">€ 30.00</div>
                        </div>
                    </li>
                    <li>
                        <div className="cart-element-inner">
                            <div className="cart-element-left"><img src="images/risotto.webp"/>
                                <div className="cart-element-details">
                                    <div className="cart-element-name">Italian Risotto</div>
                                    <div className="cart-element-quantity">1 Items</div>
                                </div>
                            </div>
                            <div className="cart-element-right">€ 30.00</div>
                        </div>
                    </li>
                    <li>
                        <div className="cart-element-inner">
                            <div className="cart-element-left"><img src="images/risotto.webp"/>
                                <div className="cart-element-details">
                                    <div className="cart-element-name">Italian Risotto</div>
                                    <div className="cart-element-quantity">1 Items</div>
                                </div>
                            </div>
                            <div className="cart-element-right">€ 30.00</div>
                        </div>
                    </li>
                </ul>
            </div>
            <a href="cart.html" className="checkout-now-button">Checkout Now</a>
        </div>
    </div>
 
    );
}

export default ModalCart;
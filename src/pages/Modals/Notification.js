

function ModalNotification(){
    return(
        <div className="notification-modal">
            <div className="notification-modal-inner">
                <div className="fm-head">
                    <div className="fm-head-left">Notification (5)</div>
                    <div className="fm-head-right"><a>View all</a></div>
                </div>
                <div className="fm-tabs">
                    <button className="fm-tab active" id="tagmodal_tab1" onclick="showModalTab('modal_tab1')">Transaction</button>
                    <button className="fm-tab" id="tagmodal_tab2" onclick="showModalTab('modal_tab2')">News</button>
                </div>
                <div id="modal_tab1" className="modal-tab1">
                    <div className="modal-tab-title">Payment Procress</div>
                    <div className="modal-notifications-list">
                        <ul>
                            <li>
                                <div className="modal-notifications-element-inner">
                                    <div className="modal-image-circle"><img src="images/dish.svg"/></div>
                                    <div className="modal-notifications-element-text">
                                        <div className="modal-notifications-element-title">Dein Essen Its angekommen :)</div>
                                        <div className="modal-notifications-element-date">30 April <div className="dot"></div>19:20:02</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal-notifications-element-inner">
                                    <div className="modal-image-circle"><img src="images/delivery.svg"/></div>
                                    <div className="modal-notifications-element-text">
                                        <div className="modal-notifications-element-title">Ihr Essen wird geliefert</div>
                                        <div className="modal-notifications-element-date">30 April <div className="dot"></div>19:20:02</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal-notifications-element-inner">
                                    <div className="modal-image-circle"><img src="images/pot.svg"/></div>
                                    <div className="modal-notifications-element-text">
                                        <div className="modal-notifications-element-title">Ihre Bestellung wird bearbeitet</div>
                                        <div className="modal-notifications-element-date">30 April <div className="dot"></div>19:20:02</div>
                                    </div>
                                </div>
                            </li>
                            <li className="checked-noti">
                                <div className="modal-notifications-element-inner">
                                    <div className="modal-image-circle"><img src="images/check-circle.svg"/></div>
                                    <div className="modal-notifications-element-text">
                                        <div className="modal-notifications-element-title">#1290 Zahlung erfolgreich</div>
                                        <div className="modal-notifications-element-date">30 April <div className="dot"></div>19:20:02</div>
                                    </div>
                                </div>
                            </li>
                            <li >
                                <div className="modal-notifications-element-inner">
                                    <div className="modal-image-circle"><img src="images/dish.svg"/></div>
                                    <div className="modal-notifications-element-text">
                                        <div className="modal-notifications-element-title">#1290 Zahlung erfolgreich</div>
                                        <div className="modal-notifications-element-date">30 April <div className="dot"></div>19:20:02</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-order-history">
                        <div className="modal-order-history-title">View Order History</div>
                        <input placeholder="Enter the code here"/>
                    </div>
                </div>
                <div id="modal_tab2" className="modal-tab2">
                    <div className="modal-news-list">
                        <ul>
                            <li>
                                <div className="modal-news-element-inner">
                                    <div className="promo-info">New Promo</div>
                                    <div className="promo-details">
                                        <img src="images/newpromo1.webp"/>
                                        <div className="modal-notifications-element-text">
                                            <div className="modal-notifications-element-title">Hunger Monday!</div>
                                            <div className="modal-notifications-element-date">let's enjoy this Hunger Monday, get mozzarella and vodka pizza only € 10</div>
                                        </div>
                                 </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal-news-element-inner">
                                    <div className="promo-info">New Promo</div>
                                    <div className="promo-details">
                                        <img src="images/newpromo1.webp"/>
                                        <div className="modal-notifications-element-text">
                                            <div className="modal-notifications-element-title">Hunger Monday!</div>
                                            <div className="modal-notifications-element-date">let's enjoy this Hunger Monday, get mozzarella and vodka pizza only € 10</div>
                                        </div>
                                 </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal-news-element-inner">
                                    <div className="promo-info">New Promo</div>
                                    <div className="promo-details">
                                        <img src="images/newpromo1.webp"/>
                                        <div className="modal-notifications-element-text">
                                            <div className="modal-notifications-element-title">Hunger Monday!</div>
                                            <div className="modal-notifications-element-date">let's enjoy this Hunger Monday, get mozzarella and vodka pizza only € 10</div>
                                        </div>
                                 </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal-news-element-inner">
                                    <div className="promo-info">New Promo</div>
                                    <div className="promo-details">
                                        <img src="images/newpromo1.webp"/>
                                        <div className="modal-notifications-element-text">
                                            <div className="modal-notifications-element-title">Hunger Monday!</div>
                                            <div className="modal-notifications-element-date">let's enjoy this Hunger Monday, get mozzarella and vodka pizza only € 10</div>
                                        </div>
                                 </div>
                                </div>
                            </li>
                            <li className="checked-noti">
                                <div className="modal-news-element-inner">
                                    <div className="promo-info">New Promo</div>
                                    <div className="promo-details">
                                        <img src="images/newpromo1.webp"/>
                                        <div className="modal-notifications-element-text">
                                            <div className="modal-notifications-element-title">Hunger Monday!</div>
                                            <div className="modal-notifications-element-date">let's enjoy this Hunger Monday, get mozzarella and vodka pizza only € 10</div>
                                        </div>
                                 </div>
                                </div>
                            </li>
                            <li>
                                <div className="modal-news-element-inner">
                                    <div className="promo-info">New Promo</div>
                                    <div className="promo-details">
                                        <img src="images/newpromo1.webp"/>
                                        <div className="modal-notifications-element-text">
                                            <div className="modal-notifications-element-title">Hunger Monday!</div>
                                            <div className="modal-notifications-element-date">let's enjoy this Hunger Monday, get mozzarella and vodka pizza only € 10</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button className="modal-mark-as-read" >Mark as read</button>
                </div>
            </div>
        </div>
    );
}

export default ModalNotification;
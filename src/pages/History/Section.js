function Section(){
    return(
        <div className="section1-mid">
            <div className="section1-mid-inner">
                <div className="s1-mid-title">Order History</div>
                <div className="s1-mid-text">Enter the transaction code below to see you previous order</div>
                <input placeholder="Enter the code here"></input>
            </div>
            <div className="history">
                <div className="history-head">
                    <div className="history-head-left">Order id “<b>#1290</b>”</div>
                    <div className="history-head-right">Sunday, 24 April 2021 | 19:20:02</div>
                </div>
                <div className="user-data">
                    <div className="user-data-head">User Data</div>
                    <div className="user-data-details">
                        <div className="user-data-detail">
                            <div className="user-data-detail-1">Order Type</div>
                            <div className="user-data-detail-2">:</div>
                            <div className="user-data-detail-3">Delivery</div>
                        </div>
                        <div className="user-data-detail">
                            <div className="user-data-detail-1">Name</div>
                            <div className="user-data-detail-2">:</div>
                            <div className="user-data-detail-3">JohnDoe (Apartment)</div>
                        </div>
                        <div className="user-data-detail">
                            <div className="user-data-detail-1">Telp Number</div>
                            <div className="user-data-detail-2">:</div>
                            <div className="user-data-detail-3">+62 219-1209-1029</div>
                        </div>
                        <div className="user-data-detail">
                            <div className="user-data-detail-1">City</div>
                            <div className="user-data-detail-2">:</div>
                            <div className="user-data-detail-3">Vienna</div>
                        </div>
                        <div className="user-data-detail">
                            <div className="user-data-detail-1">Address</div>
                            <div className="user-data-detail-2">:</div>
                            <div className="user-data-detail-3">21 District Vienna, Sun City, 2910</div>
                        </div>
                    </div>
                </div>
                <div className="order-item">
                    <div className="order-item-head">Order Item</div>
                    <table id="history_table" className="history-table">
                        <tr>
                            <th className="history-table-number">#</th>
                            <th className="history-table-food">Food</th>
                            <th className="history-table-amount">Amount</th>
                            <th className="history-table-note">Note</th>
                            <th className="history-table-price">Price</th>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Italian Risotto</td>
                            <td>2</td>
                            <td>Please add some chilli there</td>
                            <td>€ 30.00</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Meaty Pizza</td>
                            <td>3</td>
                            <td>-</td>
                            <td>€ 22.31</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Cheese Lovers</td>
                            <td>1</td>
                            <td>1</td>
                            <td>€ 12.20</td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Tuna Melt</td>
                            <td>2</td>
                            <td>-</td>
                            <td>€ 40.00</td>
                        </tr>
                    </table>
                    <div className="under-table">
                        <button className="under-table-button"><img src="images/printer.svg"/>Print</button>
                        <button className="under-table-button-filled">Re-order Food</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Section;
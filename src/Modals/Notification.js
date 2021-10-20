import react from "react";

class ModalNotification extends react.Component{
    constructor(props){
        super(props)
    }
    render(){return(
        <div className="notification-modal">
            <div className="notification-modal-inner">
                
            <div className="fm-head-right"><a>View all</a></div>
                    <div className="modal-news-list">
                        <ul>
                            {this.props.news && this.props.news.map(item => {
                                return(<li>
                                    <div className="modal-news-element-inner">
                                        <div className="promo-info">{item.type}</div>
                                        <div className="promo-details">
                                            <img src={item.imgPath}/>
                                            <div className="modal-notifications-element-text">
                                                <div className="modal-notifications-element-title">{item.title}</div>
                                                <div className="modal-notifications-element-date">{item.text}</div>
                                            </div>
                                     </div>
                                    </div>
                                </li>)
                            })}
                            
                        </ul>
                    </div>
                    
                    <div className="modal-order-history">
                        <div className="modal-order-history-title">View Order History</div>
                        <input placeholder="Enter the code here"/>
                    </div>
            </div>
        </div>
    );}
}

export default ModalNotification;
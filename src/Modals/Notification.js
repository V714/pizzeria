
import Modal from 'react-modal';


Modal.setAppElement('#root')

export default function ModalNotification (props){
    return(
        <Modal 
        isOpen={props.modalIsOpenNoti} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => props.closer()}
        closeTimeoutMS={350}
        className={"notification-modal"}
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
        <div className="notification-modal">
            <div className="notification-modal-inner">
                
            <div className="fm-head-right"><a>View all</a></div>
                    <div className="modal-news-list">
                        <ul>
                            {/* {news && news.map(item => {
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
                            })} */}
                            
                        </ul>
                    </div>
                    
                    <div className="modal-order-history">
                        <div className="modal-order-history-title">View Order History</div>
                        <input placeholder="Enter the code here"/>
                    </div>
            </div>
        </div>
      </Modal>
        
    );
}

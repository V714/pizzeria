import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

import Home from './pages/Home';
import Menu from './pages/Menu';
import Uber from './pages/Uber';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Details from './pages/Details';
import Item from './pages/Item';
import History from './pages/History';

import ModalNotification from './pages/Modals/Notification';
import ModalCart from './pages/Modals/Cart';
import ModalBTC from './pages/Modals/Bitcoin';


import react from 'react'
import Modal from 'react-modal';
Modal.setAppElement('#root')

class Header extends react.Component {
  constructor(props){
    super(props)
    this.state={
        modalIsOpenNoti: false,
        modalIsOpenCart: false,
        modalIsOpenBTC: true
    }
}
closer = () => {
    this.setState({modalIsOpenNoti: false});
    this.setState({modalIsOpenCart: false});
    this.setState({modalIsOpenBTC: false});
}

  render(){
  return (
    <Router>
      <header className="top-menu">
        <div className="top-menu-title">RIANO</div>
        <nav>
          <ul className="top-menu-select">
            <li><NavLink className="top-tab" to="/home" activeClassName="selected">Home</NavLink></li>
            <li><NavLink className="top-tab" to="/menu" activeClassName="selected">Menu</NavLink></li>
            <li><NavLink className="top-tab" to="/uber" activeClassName="selected">Uber Uns</NavLink></li>
            <li><a className="top-tab" href="home#section5">Kontakt</a></li>
          </ul>
        </nav>
        <div className="top-menu-icons">
            <button onClick={() => this.setState({modalIsOpenNoti: true})} id="notification"><img src="images/bell.svg"/></button>
            <button onClick={() => this.setState({modalIsOpenCart: true})} id="cart"><div className="new-notification">5</div><img src="images/cart.svg"/></button>
        </div>
      </header>
      <div className="page-inner">
        
     <Switch>
      <Route exact path="/">
      <Redirect to="/home" />
      </Route>

        <Route path="/cart"><Cart/></Route>
        <Route path="/checkout"><Checkout/></Route>
        <Route path="/details"><Details/></Route>
        <Route path="/item"><Item/></Route>
        <Route path="/history"><History/></Route>


        <Route path="/home"><Home/></Route>
        <Route path="/menu"><Menu/></Route>
        <Route path="/uber"><Uber/></Route>
        <Route path="/home#section5"><Home/></Route>
      </Switch>
      </div>
      

















      <Modal 
        isOpen={this.state.modalIsOpenNoti} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.closer()}
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
        <ModalNotification/>
      </Modal>
     
     
     
      <Modal 
        isOpen={this.state.modalIsOpenCart} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.closer()}
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
        <ModalCart/>
      </Modal>

      <Modal 
        isOpen={this.state.modalIsOpenBTC} 
        shouldCloseOnOverlayClick={true} 
        onRequestClose={() => this.closer()}
        closeTimeoutMS={350}
        className={"bitcoin-modal"}
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
        <ModalBTC closer = {this.closer}/>
      </Modal>

    </Router>
  );
  
}}

export default Header;

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
import Search from "./pages/Search";

import ModalNotification from './Modals/Notification';
import ModalCart from './Modals/Cart';
import ModalBTC from './Modals/Bitcoin';

import react from 'react'
import Modal from 'react-modal';

import ReactGA from 'react-ga';


Modal.setAppElement('#root')
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);


class Header extends react.Component {
  constructor(props){
    super(props)
    this.state={
        modalIsOpenNoti: false,
        modalIsOpenCart: false,
        modalIsOpenBTC: false,
        search:''
    }
}

closer = () => {
    this.setState({modalIsOpenNoti: false});
    this.setState({modalIsOpenCart: false});
    this.setState({modalIsOpenBTC: false});
}
 async componentDidMount() {
  if(JSON.parse(localStorage.getItem('bitcoinModal')) == null){
    this.setState({
      modalIsOpenBTC: true
    })
    localStorage.setItem("bitcoinModal", JSON.stringify("false"));
  }
}
setSearch = (e) =>{
 this.setState({search: e.target.value})
}

  render(){
  return (
    <Router>
      <header className="top-menu">
        <div className="top-menu-title"><NavLink to="/home" >RIANO</NavLink></div>
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
            <button onClick={() => this.setState({modalIsOpenCart: true})} id="cart">
              {this.props.products !== null &&
              this.props.products.length > 0 && <div className="new-notification">{this.props.products.length}</div>}
              
              <img src="images/cart.svg"/></button>
        </div>
      </header>
      <div className="page-inner">
        
     <Switch>
      <Route exact path="/">
      <Redirect to="/home" />
      </Route>

        <Route path="/cart"><Cart allProducts={this.props.allProducts} deliveryPrice={this.props.deliveryPrice} address={this.props.address} changeAddress={this.props.changeAddress} totalPrice={this.props.totalPrice} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} deleteProduct={this.props.deleteProduct}/></Route>
        <Route path="/checkout"><Checkout allProducts={this.props.allProducts} deliveryPrice={this.props.deliveryPrice} changeAddress={this.props.changeAddress} totalPrice={this.props.totalPrice} products={this.props.products} /></Route>
        <Route path="/details"><Details allProducts={this.props.allProducts}addProduct={this.props.addProduct} /></Route>
        <Route path="/item"><Item allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote}/></Route>
        <Route path="/history"><History/></Route>


        <Route path="/home"><Home allTypes={this.props.allTypes} allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote}/></Route>
        <Route path="/search"><Search allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} search={this.state.search} setSearch={this.setSearch}/></Route>
        <Route path="/menu"><Menu allTypes={this.props.allTypes} allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct}/></Route>
        <Route path="/uber"><Uber/></Route>
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
        <ModalCart products={this.props.products} totalPrice={this.props.totalPrice} />
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

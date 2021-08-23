import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

import Home from './Home';
import Menu from './Menu';
import Uber from './Uber';
import Cart from './Cart';
import Checkout from './Checkout';
import Details from './Details';
import Item from './Item';
import History from './History';

function Header() {
  return (
    <Router>
      <header className="top-menu">
        <div className="top-menu-title">RIANO</div>
        <nav>
          <ul className="top-menu-select">
            <li><NavLink className="top-tab" to="/home" activeClassName="selected">Home</NavLink></li>
            <li><NavLink className="top-tab" to="/menu" activeClassName="selected">Menu</NavLink></li>
            <li><NavLink className="top-tab" to="/uber" activeClassName="selected">Uber Uns</NavLink></li>
            <li><NavLink className="top-tab" to="/home#section5">Kontakt</NavLink></li>
          </ul>
        </nav>
        <div className="top-menu-icons">
            <a id="notification"><img src="images/bell.svg"/></a>
            <a id="cart"><div className="new-notification">5</div><img src="images/cart.svg"/></a>
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
      
    </Router>
  );
  
}

export default Header;

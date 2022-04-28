import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import Header from "./Header";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

/* 
import History from './pages/History';
import Search from "./pages/Search"; */


import ReactGA from 'react-ga';

import { useState } from 'react'
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

function Content (){
  const [search, setSearch] = useState('')


  return (
    <Router>
      <Header/>

      <div className="page-inner">
        
     <Switch>
      <Route exact path="/"><Redirect to="/home" /></Route>
     
        <Route path="/cart"><Cart /></Route>
        
        <Route path="/checkout"><Checkout/></Route>
        {/*
        <Route path="/history"><History/></Route>
      */}  
      <Route path="/details"><Details/></Route>
      


        <Route path="/home"><Home/></Route>
        {/* <Route path="/search"><Search allProducts={this.props.allProducts} products={this.props.products} addProduct={this.props.addProduct} changeNote={this.props.changeNote} search={this.state.search} setSearch={this.setSearch}/></Route>
        */}<Route path="/menu"><Menu /></Route>
       <Route path="/about"><About/></Route>
      </Switch>
      </div>
      
    </Router>
  )
}

export default Content;
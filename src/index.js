import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer'; 
import Body from './Body';
import './styles/Riano.css';

import store from './redux/Store';
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <Body/>
      <Footer />
    </Provider>
    
  </React.StrictMode>,

  document.getElementById('root')
);
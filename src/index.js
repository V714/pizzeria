import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer'; 
import Body from './Body';
import store from './redux/Store';
import { Provider } from 'react-redux'
import './styles/Riano.css';

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <Body/>
      <Footer />
    </Provider>

  </React.StrictMode>,

  document.getElementById('root')
);
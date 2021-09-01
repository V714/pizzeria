import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import './styles/Riano.css';

ReactDOM.render(
  <React.StrictMode>

    <Body/>
    <Footer />
    
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './component/Header';
import Footer from './component/Footer';



ReactDOM.render(
  <React.StrictMode>
  <Header/>
  <App/>
  <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

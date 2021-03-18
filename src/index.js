import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import CandyShop from './components/CandyShop';
import CandyInfo from './components/CandyInfo';
import NavBar from './components/NavBar';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <NavBar/>
      <Route exact path="/" component={App}/>
      <Route path="/candyshop" component={CandyShop}/>
      <Route path="/candy:id" component={CandyInfo}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

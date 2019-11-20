import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import {Switch, Route } from 'react-router-dom';
import CheckoutPage from './containers/CheckoutPage/CheckoutPage';
import Orders from './containers/Orders/Orders';

class App extends Component {

  render(){

    
    return(

 
      <div className="App">
      <Layout>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/CheckoutPage" component={CheckoutPage} />
        <Route path="/Orders" component={Orders} />
       </Layout>
              </div>  );
  }
}

export default App;

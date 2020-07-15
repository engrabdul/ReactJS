import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout Page</h1>
          </Route>
          <Route path="/login">
            <h1>LOGIN PAGE</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>HOME PAGE!!!</h1>
          </Route>
        </Switch>
      </div>   
    </Router> 
  );
}

export default App;
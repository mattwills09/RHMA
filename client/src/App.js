import React, { Component } from "react";
// import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BusinessAnalysis from "./pages/BusinessAnalysis";
import ExpenseReport from "./pages/ExpenseReport";
import Nav from "./components/Nav";
import ShoppingItems from "./pages/ShoppingItems";
// import SignUp from "./pages/SignUp"
// import LogIn from "./pages/LogIn";
// import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/BusinessAnalysis" component={BusinessAnalysis} />
          <Route exact path="/ShoppingItems" component={ShoppingItems} />
          <Route component={ExpenseReport} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

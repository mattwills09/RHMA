import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import BusinessAnalysis from "./pages/BusinessAnalysis";
import ExpenseReport from "./pages/ExpenseReport";
import Nav from "./components/Nav";
import ShoppingItems from "./pages/ShoppingItems";
// import ShoppingItems from "./components/ShoppingItems/ShoppingItems";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/BusinessAnalysis" component={BusinessAnalysis} />
          <Route exact path="/shoppingitems" component={ShoppingItems} />
          {/* <Route component={ShoppingItems} /> */}
          <Route component={ExpenseReport} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

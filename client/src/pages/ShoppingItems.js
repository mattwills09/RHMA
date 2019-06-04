import React, { Component } from "react";
import ShoppingItems from "../components/ShoppingItems/ShoppingItems";
import "../components/ShoppingItems/ShoppingItems.css";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
// import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Expense from "../components/Expense";
import Book from "../components/Book";
import Visual from "../components/Visual";

class ShoppingList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value = "";
    }
    console.log(this.state.items);
    e.preventDefault();

  }
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (

      // <Jumbotron>
      //   <h1 className="text-center">
      //     <strong>Learn Your True Cost of Doing Business</strong>
      //   </h1>
      //   <h2 className="text-center">Input Your Expenses for Data Insights</h2>
    

      <div className="ListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Enter Your Items!">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <ShoppingItems entries={this.state.items} delete={this.deleteItem} />
        
      </div>
    );
  }
}

export default ShoppingList;
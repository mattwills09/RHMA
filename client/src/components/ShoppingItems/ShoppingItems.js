import React, { Component } from "react";

// var listItems = ""; 

class ShoppingItems extends Component {
    constructor(props) {
        super(props);
     
        this.createList = this.createList.bind(this);
    }
    createList(item) {
        return <li onClick={() => this.delete(item.key)} 
                    key={item.key}>{item.text}</li>
    }
    
    delete(key) {
        this.props.delete(key);
    }
  render() {
    var listEntries = this.props.entries;
    var listItems = listEntries.map(this.createList);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default ShoppingItems;
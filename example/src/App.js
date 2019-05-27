import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GetAuthorOfBook from "./GetAuthorOfBook.js";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GetAuthorOfBook />
        <img
          width="300"
          height="300"
          src="https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png"
        />
      </div>
    );
  }
}

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GetAuthorOfBook from "./GetAuthorOfBook.js";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GetAuthorOfBook />
      </div>
    );
  }
}

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GetTitle from "./GetTitle.js";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GetTitle />
      </div>
    );
  }
}

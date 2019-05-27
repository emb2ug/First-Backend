import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

export default class GetTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bookAuthor: "" };
  }

  componentDidMount = () => {};

  getAuthor = () => {
    let title = document.getElementById("inputTitle").value;
    console.log(title);
    let url = "http://localhost:9000/books/" + title;
    console.log(url);
    axios
      .get(url)

      .then(res => {
        console.log(res.data);
        this.setState({ bookAuthor: res.data });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <br />
          <input type="text" id="inputTitle" placeholder="Enter Title" />
          <br />
          <button onClick={() => this.getAuthor()}>Search</button>
          <br />
          {this.state.bookAuthor.length > 0 ? (
            <p>{this.state.bookAuthor}</p>
          ) : (
            <div />
          )}
        </header>
      </div>
    );
  }
}

// in render
// hit button

// getAuthor(user typed in input).then(
//     display on page)
// )

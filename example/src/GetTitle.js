import React from "react";
import logo from "./logo.svg";
import "./App.css";

export default class GetTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getAuthor = title => {
    axios.get("localhost:3000/book?title=" + title);
  };

  render() {
    return <div />;
  }
}

// in render
// hit button

// getAuthor(user typed in input).then(
//     display on page)
// )

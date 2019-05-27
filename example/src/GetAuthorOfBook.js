import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./GetAuthorOfBook.css";

export default class GetTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bookAuthor: "" };
  }

  componentDidMount = () => {};

  getAuthor = () => {
    let title = document.getElementById("inputTitle").value;
    console.log(title);
    let url = "http://localhost:9000/allbooks/" + title;
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
          <h4>Search for an Author by Book Title</h4>
          <div>
            <input
              height="50"
              width="200"
              type="text"
              id="inputTitle"
              placeholder="Enter Title"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.getAuthor()}
            >
              Search
            </Button>
          </div>
          {this.state.bookAuthor.length > 0 ? (
            <p>Author: {this.state.bookAuthor}</p>
          ) : (
            <div />
          )}

          <img
            width="300"
            height="300"
            src="https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png"
          />
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

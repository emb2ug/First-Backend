const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 9000;

books = {
  "1984": "George Orwell",
  HarryPotter: "JK Rowling"
};

// app.get("/", (req, res) => res.send("Hellooooooooooo World!"));

// app.get("/test", (req, res) => res.send("got here"));

// app.get("/books", (req, res) => res.send(books));

// app.get("/books/:title"),
//   (req, res) => {
//     console.log(req.params.title);
//     const ans = books["" + req.params.title];
//     res.send(ans);
//   };

app.get("/:title", (req, res) => {
  const ans = books[req.params.title];
  if (ans) {
    res.send(ans);
  } else {
    res.send("Cannot find author for " + req.params.title);
  }
});

app.get("/books/:title", (req, res) => {
  const ans = books[req.params.title];
  if (ans) {
    res.send(ans);
  } else {
    res.send("Cannot find author for " + req.params.title);
  }
});

// app.get('/getGeocode:address', (req, res) => {
//     axios.get(google api url).then(
//         // access google api with req.params.address
//             res.send(response from google)
//     )
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

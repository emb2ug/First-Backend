const express = require("express");
const app = express();
const port = 3000;

books = {
  "1984": "George Orwell"
};

//app.get("/", (req, res) => res.send("Hello World!"));

app.get("/book:title"),
  (req, res) => {
    const ans = books[req.params.title];
    res.send(ans);
  };

// app.get('/getGeocode:address', (req, res) => {
//     axios.get(google api url).then(
//         // access google api with req.params.address
//             res.send(response from google)
//     )
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

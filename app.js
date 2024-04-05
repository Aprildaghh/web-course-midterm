const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// CONTROLLERS

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname+"/public/templates/home.html");
})


app.get("/search", (req, res) => {
  // get the query parameter with: req.query.q

  res.status(200).sendFile(__dirname+"/public/templates/search.html");
})


app.get("/detail", (req, res) => {
  res.status(200).sendFile(__dirname+"/public/templates/detail.html");
})


// REST CONTROLLERS

app.get("/test", (req, res) => {
  res.status(200).send("test");
})



// START APPLICATION
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
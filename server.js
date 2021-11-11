// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

// =======================================
//              MIDDLEWARE
// =======================================

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false}));

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods', (req, res) => {
  res.render("index.ejs", {bakedGoods});
});

// new route
app.get("/bakedgoods/new", (req, res) => {
  res.render("new.ejs");
});

// create route
app.post("/bakedgoods", (req, res) => {
  bakedGoods.push(req.body);
  res.redirect("/bakedgoods");
});

// show route
app.get('/bakedgoods/:id', (req, res) => {
  const foundBakedGood = bakedGoods[req.params.id];
  res.render("show.ejs", {foundBakedGood});
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});

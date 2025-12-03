const path = require("path");

const fs = require("fs");

const express = require("express");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/confirm", function (req, res) {
  res.render("confirm");
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
});

app.post("/recommend", function (req, res) {
  const restaurantData = req.body;
  const databasePath = path.join(__dirname, "database", "restaurants.json");
  const databaseContent = fs.readFileSync(databasePath);
  const restaurantsArray = JSON.parse(databaseContent);

  restaurantsArray.push(restaurantData); // restaurantData is a JS object
  fs.writeFileSync(databasePath, JSON.stringify(restaurantsArray));

  res.redirect("/confirm");
});

app.get("/restaurants", function (req, res) {
  const databasePath = path.join(__dirname, "database", "restaurants.json");
  const databaseContent = fs.readFileSync(databasePath);
  const restaurantsArray = JSON.parse(databaseContent);

  res.render("restaurants", {
    numberOfRestaurants: restaurantsArray.length,
    restaurants: restaurantsArray,
  });
});

app.listen(3000);

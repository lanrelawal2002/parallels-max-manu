const path = require("path");

const express = require("express");
const uuid = require("uuid");

const restaurantImport = require("./utility/restaurant-data");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.status(200).render("index");
});

app.get("/about", function (req, res) {
  const allCities = ["Jos", "Abuja", "Lagos", "Akure", "PortHarcourt"];
  res.status(200).render("about", { cities: allCities });
});

app.get("/confirm", function (req, res) {
  res.status(200).render("confirm");
});

app.get("/recommend", function (req, res) {
  res.status(200).render("recommend");
});

app.post("/recommend", function (req, res) {
  const restaurantData = req.body;
  restaurantData.id = uuid.v4();

  const restaurantsArray = restaurantImport.getAllRestaurants();

  restaurantsArray.push(restaurantData); // restaurantData is a JS object
  restaurantImport.updateRestaurantDatabase(restaurantsArray);

  res.redirect("/confirm");
});

app.get("/restaurants", function (req, res) {
  const restaurantsArray = restaurantImport.getAllRestaurants();

  res.status(200).render("restaurants", {
    numberOfRestaurants: restaurantsArray.length,
    restaurants: restaurantsArray,
  });
});

app.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;

  const restaurantsArray = restaurantImport.getAllRestaurants();

  for (const restaurant of restaurantsArray) {
    if (restaurant.id === restaurantId) {
      return res
        .status(200)
        .render("restaurant-detail", { restaurant: restaurant });
    }
  }

  res.status(404).render("404");
});

app.use(function (req, res) {
  res.status(404).render("404");
});

app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

app.listen(3000);

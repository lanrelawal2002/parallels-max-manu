const express = require("express");
const uuid = require("uuid");

const restaurantImport = require("../utility/restaurant-data");

const router = express.Router();

router.get("/confirm", function (req, res) {
  res.status(200).render("confirm");
});

router.get("/recommend", function (req, res) {
  res.status(200).render("recommend");
});

router.post("/recommend", function (req, res) {
  const restaurantData = req.body;
  restaurantData.id = uuid.v4();

  const restaurantsArray = restaurantImport.getAllRestaurants();

  restaurantsArray.push(restaurantData); // restaurantData is a JS object
  restaurantImport.updateRestaurantDatabase(restaurantsArray);

  res.redirect("/confirm");
});

router.get("/restaurants", function (req, res) {
  const restaurantsArray = restaurantImport.getAllRestaurants();

  res.status(200).render("restaurants", {
    numberOfRestaurants: restaurantsArray.length,
    restaurants: restaurantsArray,
  });
});

router.get("/restaurants/:id", function (req, res) {
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

module.exports = router;

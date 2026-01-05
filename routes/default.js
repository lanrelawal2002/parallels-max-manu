const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).render("index");
});

router.get("/about", function (req, res) {
  const allCities = ["Jos", "Abuja", "Lagos", "Akure", "PortHarcourt"];
  res.status(200).render("about", { cities: allCities });
});

module.exports = router;

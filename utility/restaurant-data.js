const fs = require("fs");
const path = require("path");

const databasePath = path.join(__dirname, "..", "database", "restaurants.json");

function getAllRestaurants() {
  const databaseContent = fs.readFileSync(databasePath);
  const restaurantsArray = JSON.parse(databaseContent);

  return restaurantsArray;
}

function updateRestaurantDatabase(currentRestaurantArray) {
  fs.writeFileSync(databasePath, JSON.stringify(currentRestaurantArray));
}

module.exports = {
  getAllRestaurants: getAllRestaurants,
  updateRestaurantDatabase: updateRestaurantDatabase,
};

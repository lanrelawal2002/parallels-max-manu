const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<p>You reached the landing page.</p>");
});

app.get("/current-time", function (req, res) {
  res.send("<p>" + new Date().toISOString() + "</p>");
});

app.listen(3000);

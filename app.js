const express = require("express");

const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Hello, Taski Technologies");
});

module.exports = app;
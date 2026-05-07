const express = require("express");

const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("Hello, Taski Technologies");
});

// Start server
app.listen(3000, () => {
  console.log("server running on port 3000");
});

module.exports = app;
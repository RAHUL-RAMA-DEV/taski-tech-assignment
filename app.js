const express = require("express");
const app = express();

app.get("/",(req,res) => {
   res.send("Hello, Taski Technologies");
});

module.exports =  app; 

//External module
const express = require('express');

//Local module 
const homeRouter = express.Router();

const rootDir = rfequire ('../utils/pathUtil');

homeRoute.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join (rootDir, "views", "home.html"));
})

module.exports = homeRouter;
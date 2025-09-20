//External module
const express = require('express');

//Local module 
const contactRouter = express.Router();

const rootDir = rfequire ('../utils/pathUtil');

contactRoute.get("/contact-us", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join (rootDir, "views", "contact-us.html"));
})

contactRoute.post("/contact-us", (req, res, next) => {
  console.log(`path.join (rootDir, "views", "contact-success.html"
  `)});

module.exports = contactRouter;
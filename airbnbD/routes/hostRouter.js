// Core Module
const path = require("path");

// External Module
const express = require("express");
const hostRouter = express.Router();

//Local Module
const rootDir = require("../utils/pathUtils");


hostRouter.get("/add-home", (req, res, next) => {
  res.render("add-home",{pageTitle:'Add home to airbnb'});
});

const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log ("Home Registration successfull  for: ", req.body,req.body.houseName);
  registeredHomes.push ({houseName: req.body.houseName});
res.render('homeAdded',{pageTitle:'Home added successfully'});
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;

const express = require('express');
const hostRouter = express.Router();

//Local Module
const homesController = require("../controllers/homes")

hostRouter.post("/add-home",homesController.postAddHome);

exports.hostRouter = hostRouter;

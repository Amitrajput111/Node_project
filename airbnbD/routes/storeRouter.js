
const express =  require('express');

const storeRouter = express.Router();

const homesController = require("../controllers/homes")
storeRouter.get("/",homesController.getHomes);

module.exports = storeRouter;
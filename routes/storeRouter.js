
const express =  require('express');

const storeRouter = express.Router();

const homesController = require("../controllers/storeController");
storeRouter.get("/",homesController.getHomes);
storeRouter.get("/Homes" , homesController.getHomes);
storeRouter.get("/bookings" , homesController.getBookings);
storeRouter.get("/favourites", homesController.getfavouriteList);


module.exports = storeRouter;
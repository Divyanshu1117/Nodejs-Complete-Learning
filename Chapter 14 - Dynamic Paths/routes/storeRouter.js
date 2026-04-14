// Core Modules
const path = require('path');

// External Module
const express = require('express');
const storeRouter = express.Router();

// // Local Module
// const { registeredHomes } = require('./hostRouter');
const homesController = require("../controllers/storeControler");

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/homes", homesController.getHomes);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/favourites", homesController.getFavouriteList);

module.exports = storeRouter;
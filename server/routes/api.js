const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
const Restaurant = require('../models/restaurant-model.js');

// Connect to MongoDB
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/SampleDB')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

// Get restaurants

/* GET all Restaurants */

router.get('/restaurants', function(req, res, next) {
  Restaurant.find(function (err, restaurants) {
    if (err) return next(err);
    res.json(restaurants);
  });
});

/* GET a signle restaurant by restaurantId */

router.get('/restaurants/:restaurant_id', function(req, res, next) {
  Restaurant.findById(req.params.restaurant_id, function (err, restaurants) {
    if (err) return next(err);
    res.json(restaurants);
  });
});

module.exports = router;


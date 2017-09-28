var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  restaurant_id: String,
  name: String,
  cuisine: String,
  address: Object
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);

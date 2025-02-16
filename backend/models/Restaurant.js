const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  restaurantId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  managerName: String,
  menu: {
    starters: [{
      name: String,
      description: String,
      price: Number,
      isVeg: Boolean,
      isSpecial: Boolean,
      image: String
    }],
    mainCourse: [{
      name: String,
      description: String,
      price: Number,
      isVeg: Boolean,
      isSpecial: Boolean,
      image: String
    }],
    desserts: [{
      name: String,
      description: String,
      price: Number,
      isVeg: Boolean,
      isSpecial: Boolean,
      image: String
    }]
  },
  tables: [{
    tableNumber: Number,
    capacity: Number,
    isAvailable: Boolean
  }],
  ratings: {
    average: Number,
    count: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Restaurant', restaurantSchema); 
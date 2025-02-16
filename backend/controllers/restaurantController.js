const Restaurant = require('../models/Restaurant');

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find()
      .select('-password')
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      restaurants
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching restaurants',
      error: error.message
    });
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id)
      .select('-password');
    
    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: 'Restaurant not found'
      });
    }
    
    res.json({
      success: true,
      restaurant
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching restaurant',
      error: error.message
    });
  }
};

exports.createRestaurant = async (req, res) => {
  try {
    const newRestaurant = new Restaurant(req.body);
    await newRestaurant.save();
    
    res.status(201).json({
      success: true,
      restaurant: newRestaurant
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating restaurant',
      error: error.message
    });
  }
};

exports.updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    
    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: 'Restaurant not found'
      });
    }
    
    res.json({
      success: true,
      restaurant
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating restaurant',
      error: error.message
    });
  }
}; 
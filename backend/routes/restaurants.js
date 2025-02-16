const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find()
      .select('-licenseNumber -shopNumber')
      .sort('-createdAt');
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get restaurant by ID
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create restaurant
router.post('/', async (req, res) => {
  const restaurant = new Restaurant(req.body);
  try {
    const newRestaurant = await restaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update restaurant
router.patch('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(restaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update seating status
router.patch('/:id/tables/:tableNumber', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    const table = restaurant.seatingCapacity.tables.find(
      t => t.number === parseInt(req.params.tableNumber)
    );
    if (!table) {
      return res.status(404).json({ message: 'Table not found' });
    }

    table.isOccupied = req.body.isOccupied;
    table.isBlocked = req.body.isBlocked || false;

    await restaurant.save();
    res.json(restaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 
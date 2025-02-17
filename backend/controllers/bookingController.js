const Booking = require('../models/Booking');
const Restaurant = require('../models/Restaurant');
const User = require('../models/User');

exports.createBooking = async (req, res) => {
  try {
    const { restaurantId, date, time, guests, specialRequests } = req.body;
    const userId = req.user.id; // From auth middleware

    const booking = new Booking({
      user: userId,
      restaurant: restaurantId,
      date,
      time,
      guests,
      specialRequests
    });

    await booking.save();

    // Add booking reference to user
    await User.findByIdAndUpdate(userId, {
      $push: { bookings: booking._id }
    });

    res.status(201).json({
      success: true,
      booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating booking',
      error: error.message
    });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('restaurant', 'name location cuisine')
      .sort({ date: -1 });

    res.json({
      success: true,
      bookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching bookings',
      error: error.message
    });
  }
};

exports.getRestaurantBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ restaurant: req.params.restaurantId })
      .populate('user', 'name phoneNumber')
      .sort({ date: -1 });

    res.json({
      success: true,
      bookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching restaurant bookings',
      error: error.message
    });
  }
};

exports.updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.json({
      success: true,
      booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating booking status',
      error: error.message
    });
  }
}; 
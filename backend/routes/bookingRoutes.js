const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const auth = require('../middleware/auth');

router.post('/', auth, bookingController.createBooking);
router.get('/user', auth, bookingController.getUserBookings);
router.get('/restaurant/:restaurantId', auth, bookingController.getRestaurantBookings);
router.patch('/:id/status', auth, bookingController.updateBookingStatus);

module.exports = router; 
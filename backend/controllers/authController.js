const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

exports.sendOTP = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    
    // Generate OTP
    const otp = generateOTP();
    
    // In production, you would send this OTP via SMS
    // For development, we'll just return it
    
    // Store OTP in user document or separate collection
    let user = await User.findOne({ phoneNumber });
    if (!user) {
      user = new User({ phoneNumber });
      await user.save();
    }
    
    // In production, store OTP securely with expiration
    
    res.json({
      success: true,
      message: 'OTP sent successfully',
      otp // Remove this in production
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error sending OTP',
      error: error.message
    });
  }
};

exports.verifyOTP = async (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    
    // In production, verify OTP from secure storage
    // For development, we'll accept any OTP
    
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      success: true,
      token,
      user: {
        _id: user._id,
        phoneNumber: user.phoneNumber,
        name: user.name
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error verifying OTP',
      error: error.message
    });
  }
};

exports.restaurantLogin = async (req, res) => {
  try {
    const { restaurantId, password } = req.body;
    
    const restaurant = await Restaurant.findOne({ restaurantId });
    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: 'Restaurant not found'
      });
    }
    
    // Compare password
    const isMatch = await bcrypt.compare(password, restaurant.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { restaurantId: restaurant._id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      success: true,
      token,
      restaurant: {
        _id: restaurant._id,
        name: restaurant.name,
        location: restaurant.location,
        cuisine: restaurant.cuisine
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error logging in',
      error: error.message
    });
  }
}; 
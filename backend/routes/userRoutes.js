const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/send-otp', async (req, res) => {
  try {
    const { phone } = req.body;
    
    if (!phone || phone.length !== 10) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid phone number' 
      });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store OTP in database/cache with expiry
    // await storeOTP(phone, otp);
    
    // In development, just log the OTP
    console.log(`OTP for ${phone}: ${otp}`);

    res.json({ 
      success: true, 
      message: 'OTP sent successfully' 
    });
  } catch (error) {
    console.error('Send OTP Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send OTP' 
    });
  }
});

router.post('/verify-otp', async (req, res) => {
  try {
    const { phone, otp } = req.body;
    
    if (!phone || !otp) {
      return res.status(400).json({ 
        success: false, 
        message: 'Phone and OTP are required' 
      });
    }

    // Verify OTP from database/cache
    // const isValid = await verifyOTP(phone, otp);
    const isValid = true; // For development

    if (!isValid) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid OTP' 
      });
    }

    // Generate JWT token
    const token = 'dummy_token'; // Replace with actual JWT token

    res.json({
      success: true,
      token,
      user: {
        phone,
        // Add other user details
      }
    });
  } catch (error) {
    console.error('Verify OTP Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to verify OTP' 
    });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    // Validate input
    if (!name || !phone || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Validate phone number
    if (!/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number'
      });
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address'
      });
    }

    // Check if user already exists
    // const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    // if (existingUser) {
    //   return res.status(400).json({
    //     success: false,
    //     message: 'User with this email or phone already exists'
    //   });
    // }

    // For development, just log the registration attempt
    console.log('Registration attempt:', {
      name,
      phone,
      email,
      password: '********'
    });

    // In production, you would:
    // 1. Hash the password
    // 2. Create user in database
    // 3. Generate JWT token
    // 4. Send verification email/SMS

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      user: {
        name,
        phone,
        email
      }
    });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({
      success: false,
      message: 'Registration failed'
    });
  }
});

module.exports = router; 
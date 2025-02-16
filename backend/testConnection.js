const mongoose = require('mongoose');
require('dotenv').config();

const testConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    console.log('MongoDB connection successful');
    console.log('Connection state:', mongoose.connection.readyState);
    process.exit(0);
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

testConnection(); 
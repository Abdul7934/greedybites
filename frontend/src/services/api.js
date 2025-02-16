import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  sendOTP: (phoneNumber) => api.post('/auth/send-otp', { phoneNumber }),
  verifyOTP: (phoneNumber, otp) => api.post('/auth/verify-otp', { phoneNumber, otp }),
  restaurantLogin: (credentials) => api.post('/auth/restaurant/login', credentials)
};

// Restaurant API
export const restaurantAPI = {
  getAll: () => api.get('/restaurants'),
  getById: (id) => api.get(`/restaurants/${id}`),
  create: (data) => api.post('/restaurants', data),
  update: (id, data) => api.put(`/restaurants/${id}`, data)
};

// Booking API
export const bookingAPI = {
  create: (data) => api.post('/bookings', data),
  getUserBookings: () => api.get('/bookings/user'),
  getRestaurantBookings: (restaurantId) => api.get(`/bookings/restaurant/${restaurantId}`),
  updateStatus: (id, status) => api.patch(`/bookings/${id}/status`, { status })
};

export default api; 
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Grid,
  Divider,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
  MenuItem
} from '@mui/material';
import {
  RestaurantMenu,
  Email,
  Phone,
  Store,
  Badge,
  LocationOn,
  Visibility,
  VisibilityOff,
  Person,
  Business
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import axios from '../../utils/axios';
import { styled } from '@mui/material/styles';

// Demo registration data for Coastal Flavors
const DEMO_REGISTRATION = {
  restaurantName: "Coastal Flavors",
  ownerName: "Rajesh Kumar",
  email: "contact@coastalflavors.com",
  phone: "9876543210",
  address: "42, Marine Drive",
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400001",
  cuisine: "Seafood & Coastal",
  seatingCapacity: "120",
  fssaiLicense: "12345678901234",
  gstNumber: "27AABCT3518Q1Z2"
};

const CUISINES = [
  "North Indian",
  "South Indian",
  "Chinese",
  "Italian",
  "Seafood & Coastal",
  "Multi-Cuisine",
  "Fast Food",
  "Street Food"
];

const CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune"
];

const STATES = [
  "Maharashtra",
  "Delhi",
  "Karnataka",
  "Tamil Nadu",
  "West Bengal",
  "Telangana"
];

// Add these styled components
const SignupContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4),

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,65,108,0.1) 0%, rgba(255,75,43,0.1) 100%)',
    animation: 'pulse 15s ease infinite',
  }
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(4),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(5px)',
    borderRadius: theme.spacing(1),
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  }
}));

// Add floating particles effect
const FloatingParticles = () => (
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          width: Math.random() * 4 + 1,
          height: Math.random() * 4 + 1,
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </Box>
);

const RestaurantSignup = () => {
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    cuisine: '',
    seatingCapacity: '',
    fssaiLicense: '',
    gstNumber: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      // For demo purposes, simulate successful registration
      if (formData.restaurantName === DEMO_REGISTRATION.restaurantName) {
        // Store restaurant data in localStorage
        localStorage.setItem('restaurantData', JSON.stringify({
          id: 'COAST002',
          name: formData.restaurantName,
          location: `${formData.address}, ${formData.city}`,
          managerName: formData.ownerName,
          email: formData.email,
          phone: formData.phone,
          cuisine: formData.cuisine,
          isLoggedIn: true
        }));

        // Show success message
        setError('');
        
        // Navigate to login page
        setTimeout(() => {
          navigate('/restaurant/login', { 
            state: { 
              message: 'Registration successful! Please login with your credentials.' 
            }
          });
        }, 1500);
      } else {
        // If not using demo data, try to register with the API
        const response = await axios.post('/api/restaurants/register', {
          restaurantName: formData.restaurantName,
          ownerName: formData.ownerName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          cuisine: formData.cuisine,
          seatingCapacity: formData.seatingCapacity,
          fssaiLicense: formData.fssaiLicense,
          gstNumber: formData.gstNumber
        });

        if (response.data.success) {
          navigate('/restaurant/login', { 
            state: { 
              message: 'Registration successful! Please login with your credentials.' 
            }
          });
        }
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoFill = () => {
    setFormData({
      ...formData,
      ...DEMO_REGISTRATION,
      password: 'coastal2024',
      confirmPassword: 'coastal2024'
    });
  };

  return (
    <SignupContainer>
      <FloatingParticles />
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Register Your Restaurant
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Join our platform and reach more customers
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <GlassCard>
                  {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                      {error}
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          fullWidth
                          label="Restaurant Name"
                          name="restaurantName"
                          value={formData.restaurantName}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          fullWidth
                          label="Owner Name"
                          name="ownerName"
                          value={formData.ownerName}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          fullWidth
                          label="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          fullWidth
                          label="Phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <StyledTextField
                          fullWidth
                          label="Address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          multiline
                          rows={2}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <StyledTextField
                          fullWidth
                          select
                          label="City"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        >
                          {CITIES.map((city) => (
                            <MenuItem key={city} value={city}>
                              {city}
                            </MenuItem>
                          ))}
                        </StyledTextField>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <StyledTextField
                          fullWidth
                          select
                          label="State"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        >
                          {STATES.map((state) => (
                            <MenuItem key={state} value={state}>
                              {state}
                            </MenuItem>
                          ))}
                        </StyledTextField>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <StyledTextField
                          fullWidth
                          label="Pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <StyledTextField
                          fullWidth
                          select
                          label="Cuisine Type"
                          name="cuisine"
                          value={formData.cuisine}
                          onChange={handleChange}
                          required
                        >
                          {CUISINES.map((cuisine) => (
                            <MenuItem key={cuisine} value={cuisine}>
                              {cuisine}
                            </MenuItem>
                          ))}
                        </StyledTextField>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <StyledTextField
                          fullWidth
                          label="Seating Capacity"
                          name="seatingCapacity"
                          type="number"
                          value={formData.seatingCapacity}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <StyledTextField
                          fullWidth
                          label="FSSAI License Number"
                          name="fssaiLicense"
                          value={formData.fssaiLicense}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <StyledTextField
                          fullWidth
                          label="GST Number"
                          name="gstNumber"
                          value={formData.gstNumber}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <StyledTextField
                          fullWidth
                          label="Password"
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <StyledTextField
                          fullWidth
                          label="Confirm Password"
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                    </Grid>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={isLoading}
                      sx={{
                        mt: 4,
                        mb: 2,
                        background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                        fontSize: '1.1rem',
                        padding: '12px',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                        }
                      }}
                    >
                      {isLoading ? <CircularProgress size={24} /> : 'Register Restaurant'}
                    </Button>
                  </Box>
                </GlassCard>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <GlassCard>
                  <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                    Demo Registration
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                    Try our demo registration data
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Fill the form with demo data to test the registration process
                    </Typography>
                  </Box>

                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={handleDemoFill}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        background: 'rgba(255, 255, 255, 0.1)',
                      }
                    }}
                  >
                    Fill Demo Data
                  </Button>

                  <Box sx={{ mt: 3, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Already have an account?{' '}
                      <Button
                        color="primary"
                        onClick={() => navigate('/restaurant/login')}
                        sx={{ 
                          textTransform: 'none',
                          '&:hover': { background: 'rgba(255, 255, 255, 0.1)' }
                        }}
                      >
                        Login here
                      </Button>
                    </Typography>
                  </Box>
                </GlassCard>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </SignupContainer>
  );
};

export default RestaurantSignup; 
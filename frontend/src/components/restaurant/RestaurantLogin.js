import { useState } from 'react';
import {
  Container,
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  IconButton,
  InputAdornment,
  Divider,
  Card,
  CardContent,
  Grid,
  CircularProgress
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Restaurant,
  Lock
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

// Demo credentials for Coastal Flavors
const DEMO_CREDENTIALS = {
  restaurantId: "COAST002",
  password: "coastal2024",
  restaurantName: "Coastal Flavors",
  location: "Marine Drive, Mumbai",
  managerName: "Rajesh Kumar",
  role: "Restaurant Manager"
};

// Add these styled components
const LoginContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
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

const RestaurantLogin = () => {
  const [formData, setFormData] = useState({
    restaurantId: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      console.log('Login attempt with:', formData);
      // For demo, check against hardcoded credentials
      if (formData.restaurantId === DEMO_CREDENTIALS.restaurantId && 
          formData.password === DEMO_CREDENTIALS.password) {
        
        // Store restaurant session data
        const restaurantData = {
          id: DEMO_CREDENTIALS.restaurantId,
          name: DEMO_CREDENTIALS.restaurantName,
          location: DEMO_CREDENTIALS.location,
          managerName: DEMO_CREDENTIALS.managerName,
          role: DEMO_CREDENTIALS.role,
          isLoggedIn: true
        };
        
        console.log('Setting restaurant data:', restaurantData);
        localStorage.setItem('restaurantData', JSON.stringify(restaurantData));

        // Use only navigate, remove window.location.href
        console.log('Attempting to navigate to dashboard...');
        navigate('/restaurant/dashboard', { replace: true });
      } else {
        console.log('Invalid credentials provided');
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setFormData({
      restaurantId: DEMO_CREDENTIALS.restaurantId,
      password: DEMO_CREDENTIALS.password
    });
  };

  return (
    <LoginContainer>
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
              Restaurant Partner Login
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              Manage your restaurant and delight your customers
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
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
                    <StyledTextField
                      margin="normal"
                      required
                      fullWidth
                      label="Restaurant ID"
                      name="restaurantId"
                      value={formData.restaurantId}
                      onChange={(e) => setFormData({ ...formData, restaurantId: e.target.value })}
                      sx={{ mb: 3 }}
                    />

                    <StyledTextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                              sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

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
                      {isLoading ? <CircularProgress size={24} /> : 'Login'}
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
                    Demo Restaurant Account
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                    Try our demo restaurant account
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" gutterBottom sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Restaurant ID: {DEMO_CREDENTIALS.restaurantId}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Password: {DEMO_CREDENTIALS.password}
                    </Typography>
                  </Box>

                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={handleDemoLogin}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        background: 'rgba(255, 255, 255, 0.1)',
                      }
                    }}
                  >
                    Try Demo Account
                  </Button>
                </GlassCard>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Don't have an account?{' '}
                    <Button
                      color="primary"
                      onClick={() => navigate('/restaurant/signup')}
                      sx={{ 
                        textTransform: 'none',
                        '&:hover': { background: 'rgba(255, 255, 255, 0.1)' }
                      }}
                    >
                      Register Restaurant
                    </Button>
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </LoginContainer>
  );
};

export default RestaurantLogin; 
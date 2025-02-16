import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Avatar,
  Grid,
  IconButton,
  CircularProgress,
  useTheme,
  useMediaQuery,
  Chip,
  Button,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Tabs,
  Tab,
  Tooltip,
  Alert,
  Snackbar,
  Paper
} from '@mui/material';
import {
  Edit as EditIcon,
  Favorite as FavoriteIcon,
  Restaurant as RestaurantIcon,
  History as HistoryIcon,
  Settings as SettingsIcon,
  AccessTime,
  People,
  Cancel,
  CheckCircle,
  LocationOn,
  RateReview as RateReviewIcon,
  Email,
  Phone,
  PersonIcon,
  Event
} from '@mui/icons-material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { styled as muiStyled } from '@mui/material/styles';

// Magical Background Component
const MagicalBackground = () => (
  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
    {/* Main Gradient */}
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        zIndex: -2,
      }}
    />

    {/* Floating Particles */}
    {[...Array(50)].map((_, i) => (
      <Box
        key={i}
        component={motion.div}
        sx={{
          position: 'fixed',
          width: Math.random() * 4 + 1,
          height: Math.random() * 4 + 1,
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          zIndex: -1,
        }}
        animate={{
          y: [-20, 20],
          x: [-10, 10],
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: Math.random() * 10 + 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ))}

    {/* Glowing Orbs */}
    {[...Array(5)].map((_, i) => (
      <Box
        key={`orb-${i}`}
        component={motion.div}
        sx={{
          position: 'fixed',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          background: `radial-gradient(circle, ${
            ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d', '#e056fd'][i]
          } 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </Box>
);

// Add these styled components at the top
const ProfileContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(8),

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
  padding: theme.spacing(3),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
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

const AnimatedAvatar = styled(motion.div)({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -5,
    left: -5,
    right: -5,
    bottom: -5,
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    animation: 'rotate 10s linear infinite',
  }
});

const StatsCard = styled(motion.div)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    background: 'rgba(255, 255, 255, 0.1)',
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

// Main Profile Component
const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [bookings, setBookings] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [bookingTabValue, setBookingTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  useEffect(() => {
    // Load bookings from localStorage (replace with API call in production)
    const savedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(savedBookings);
  }, []);

  const handleCancelBooking = (booking) => {
    const updatedBookings = bookings.map(b =>
      b.id === booking.id ? { ...b, status: 'Cancelled' } : b
    );
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    setAlertMessage('Booking cancelled successfully');
    setShowAlert(true);
  };

  const filteredBookings = bookings.filter(booking => {
    if (bookingTabValue === 0) return booking.status === 'Confirmed';
    if (bookingTabValue === 1) return booking.status === 'Cancelled';
    return true;
  });

  const profileStats = [
    { label: 'Orders', value: '24', icon: <RestaurantIcon /> },
    { label: 'Reviews', value: '12', icon: <RateReviewIcon /> },
    { label: 'Bookings', value: bookings.length, icon: <HistoryIcon /> }
  ];

  return (
    <ProfileContainer>
      <FloatingParticles />
      <Container maxWidth="lg">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard sx={{ mb: 4 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
                <AnimatedAvatar
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Avatar
                    src="https://source.unsplash.com/random/200x200/?portrait"
                    sx={{
                      width: 150,
                      height: 150,
                      border: '4px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    }}
                  />
                </AnimatedAvatar>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                  John Doe
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
                  Food Enthusiast | Member since 2024
                </Typography>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Chip 
                    icon={<LocationOn />} 
                    label="Mumbai"
                    sx={{ 
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      mb: 1
                    }}
                  />
                  <Chip 
                    icon={<Email />} 
                    label="john@example.com"
                    sx={{ 
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      mb: 1
                    }}
                  />
                  <Chip 
                    icon={<Phone />} 
                    label="+91 98765 43210"
                    sx={{ 
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      mb: 1
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </GlassCard>
        </motion.div>

        {/* Stats Section with enhanced animations */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[
            { icon: <RestaurantIcon />, label: 'Orders', value: '24' },
            { icon: <RateReviewIcon />, label: 'Reviews', value: '12' },
            { icon: <FavoriteIcon />, label: 'Favorites', value: '8' }
          ].map((stat, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <StatsCard
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <Typography variant="h3" sx={{ my: 2 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="subtitle1">
                      {stat.label}
                    </Typography>
                  </Box>
                </StatsCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Main content with tabs */}
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard>
                <List>
                  {['Profile', 'My Bookings'].map((text, index) => (
                    <ListItem
                      button
                      key={text}
                      selected={activeTab === index}
                      onClick={() => setActiveTab(index)}
                      sx={{
                        borderRadius: 2,
                        mb: 1,
                        '&.Mui-selected': {
                          background: 'linear-gradient(45deg, rgba(255,65,108,0.2), rgba(255,75,43,0.2))',
                        },
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.1)',
                        }
                      }}
                    >
                      <ListItemIcon sx={{ color: 'white' }}>
                        {index === 0 ? <PersonIcon /> : <HistoryIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </GlassCard>
            </motion.div>
          </Grid>

          {/* Main content area */}
          <Grid item xs={12} md={9}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard>
                {activeTab === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Profile Content */}
                    <Typography variant="h5" gutterBottom>
                      Profile Information
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          defaultValue="John Doe"
                          sx={{ mb: 2 }}
                        />
                        <TextField
                          fullWidth
                          label="Email"
                          defaultValue="john@example.com"
                          sx={{ mb: 2 }}
                        />
                        <TextField
                          fullWidth
                          label="Phone"
                          defaultValue="+91 98765 43210"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Location"
                          defaultValue="Mumbai"
                          sx={{ mb: 2 }}
                        />
                        <TextField
                          fullWidth
                          label="Favorite Cuisine"
                          defaultValue="Italian"
                          sx={{ mb: 2 }}
                        />
                        <Button
                          variant="contained"
                          startIcon={<EditIcon />}
                          sx={{
                            background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                            }
                          }}
                        >
                          Update Profile
                        </Button>
                      </Grid>
                    </Grid>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Bookings Content */}
                    <Typography variant="h5" gutterBottom sx={{ mb: 3, color: 'white' }}>
                      My Bookings
                    </Typography>

                    <Tabs
                      value={bookingTabValue}
                      onChange={(e, newValue) => setBookingTabValue(newValue)}
                      sx={{
                        mb: 4,
                        '& .MuiTab-root': {
                          color: 'rgba(255, 255, 255, 0.7)',
                          '&.Mui-selected': {
                            color: 'white'
                          }
                        }
                      }}
                    >
                      <Tab 
                        icon={<CheckCircle />} 
                        label="Confirmed" 
                        iconPosition="start"
                      />
                      <Tab 
                        icon={<Cancel />} 
                        label="Cancelled" 
                        iconPosition="start"
                      />
                      <Tab 
                        icon={<Event />} 
                        label="All Bookings" 
                        iconPosition="start"
                      />
                    </Tabs>

                    {filteredBookings.length > 0 ? (
                      <Stack spacing={3}>
                        {filteredBookings.map((booking, index) => (
                          <BookingCard 
                            key={booking.id || index} 
                            booking={booking}
                            onCancel={handleCancelBooking}
                          />
                        ))}
                      </Stack>
                    ) : (
                      <Box sx={{ textAlign: 'center', py: 4 }}>
                        <RestaurantIcon sx={{ fontSize: 60, color: 'rgba(255, 255, 255, 0.7)', mb: 2 }} />
                        <Typography variant="h6" sx={{ color: 'white' }}>
                          No {bookingTabValue === 0 ? 'confirmed' : bookingTabValue === 1 ? 'cancelled' : ''} bookings found
                        </Typography>
                        <Button
                          variant="contained"
                          onClick={() => navigate('/restaurants')}
                          sx={{
                            mt: 2,
                            background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                            }
                          }}
                        >
                          Explore Restaurants
                        </Button>
                      </Box>
                    )}
                  </motion.div>
                )}
              </GlassCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowAlert(false)} 
          severity="success"
          variant="filled"
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </ProfileContainer>
  );
};

export default Profile; 
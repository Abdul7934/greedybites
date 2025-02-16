import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Button,
  IconButton,
  Tooltip,
  Alert,
  Snackbar
} from '@mui/material';
import {
  Restaurant as RestaurantIcon,
  AccessTime,
  People,
  LocationOn,
  Cancel,
  CheckCircle,
  NavigateBefore,
  Event
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

// Reuse the GlassCard component
const GlassCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Box
      sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '20px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      {children}
    </Box>
  </motion.div>
);

const BookingCard = ({ booking, onCancel }) => (
  <GlassCard>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Box
          component="img"
          src={booking.restaurantImage || 'https://source.unsplash.com/random/400x300/?restaurant'}
          sx={{
            width: '100%',
            height: 200,
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              {booking.restaurantName}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Tooltip title="Date & Time">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccessTime color="primary" />
                  <Typography>
                    {format(new Date(booking.date), 'MMM dd, yyyy')} at {booking.time}
                  </Typography>
                </Box>
              </Tooltip>
              <Tooltip title="Number of Guests">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <People color="primary" />
                  <Typography>
                    {booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}
                  </Typography>
                </Box>
              </Tooltip>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <LocationOn color="primary" />
              <Typography>{booking.location}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Tooltip title={`Status: ${booking.status}`}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  bgcolor: booking.status === 'Confirmed' ? 'success.main' : 'error.main',
                  color: 'white',
                  px: 2,
                  py: 0.5,
                  borderRadius: '20px',
                  mb: 2
                }}
              >
                {booking.status === 'Confirmed' ? <CheckCircle /> : <Cancel />}
                <Typography>{booking.status}</Typography>
              </Box>
            </Tooltip>
            {booking.status === 'Confirmed' && (
              <Button
                variant="contained"
                color="error"
                startIcon={<Cancel />}
                onClick={() => onCancel(booking)}
                sx={{
                  background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                  }
                }}
              >
                Cancel Booking
              </Button>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  </GlassCard>
);

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
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
    if (activeTab === 0) return booking.status === 'Confirmed';
    if (activeTab === 1) return booking.status === 'Cancelled';
    return true;
  });

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: 'white',
      pt: 4,
      pb: 8
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton 
            onClick={() => navigate(-1)}
            sx={{ color: 'white' }}
          >
            <NavigateBefore />
          </IconButton>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            My Bookings
          </Typography>
        </Box>

        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
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
          <Grid container spacing={3}>
            {filteredBookings.map((booking, index) => (
              <Grid item xs={12} key={booking.id || index}>
                <BookingCard 
                  booking={booking}
                  onCancel={handleCancelBooking}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <GlassCard>
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <RestaurantIcon sx={{ fontSize: 60, opacity: 0.7, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                No {activeTab === 0 ? 'confirmed' : activeTab === 1 ? 'cancelled' : ''} bookings found
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
          </GlassCard>
        )}
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
    </Box>
  );
};

export default BookingsPage; 
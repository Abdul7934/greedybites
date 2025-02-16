import { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  Chip,
  IconButton,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Avatar,
  Stack,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar
} from '@mui/material';
import {
  AccessTime,
  People,
  Restaurant,
  LocalOffer,
  Favorite,
  Share,
  PlayCircle,
  CalendarToday,
  Message
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const RestaurantBooking = ({ restaurant }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [guests, setGuests] = useState(2);
  const [specialRequest, setSpecialRequest] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBooking = () => {
    // Handle booking logic here
    setShowSuccess(true);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${restaurant.coverImage})`,
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.5)',
            }}
          />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  {restaurant.name}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {restaurant.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip 
                    icon={<Restaurant />} 
                    label={restaurant.cuisine} 
                    color="primary"
                  />
                  <Chip 
                    icon={<AccessTime />} 
                    label={restaurant.availability} 
                    color={restaurant.availability === 'Available' ? 'success' : 'warning'}
                  />
                </Stack>
                <Rating value={restaurant.rating} readOnly precision={0.5} />
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Booking Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Make a Reservation
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Select Date"
                      value={selectedDate}
                      onChange={setSelectedDate}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Select Time"
                      value={selectedTime}
                      onChange={setSelectedTime}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Number of Guests</InputLabel>
                    <Select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <MenuItem key={num} value={num}>{num} Guests</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Special Requests"
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={handleBooking}
                    sx={{
                      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                      color: 'white',
                      height: 48,
                      padding: '0 30px',
                      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    }}
                  >
                    Book Now
                  </Button>
                </Grid>
              </Grid>
            </Paper>

            {/* Menu Section */}
            {/* Add menu component here */}

            {/* Reviews Section */}
            {/* Add reviews component here */}
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Today's Specials */}
            <Paper sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Today's Specials
              </Typography>
              {/* Add specials list here */}
            </Paper>

            {/* Similar Restaurants */}
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Similar Restaurants
              </Typography>
              {/* Add similar restaurants list here */}
            </Paper>
          </Grid>
        </Grid>
      </motion.div>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Booking confirmed! We'll send you a confirmation email shortly.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RestaurantBooking; 
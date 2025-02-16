import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Alert,
  Collapse
} from '@mui/material';
import {
  AccessTime,
  CalendarToday,
  People,
  Cancel,
  CheckCircle,
  Info
} from '@mui/icons-material';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false);
  const [cancelSuccess, setCancelSuccess] = useState(false);

  useEffect(() => {
    // Load bookings from localStorage (replace with API call)
    const loadedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(loadedBookings.reverse()); // Show newest first
  }, []);

  const handleCancelBooking = async (booking) => {
    try {
      // Here you would make an API call to cancel the booking
      const updatedBookings = bookings.filter(b => 
        b.date !== booking.date || b.time !== booking.time
      );
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      setBookings(updatedBookings);
      setCancelSuccess(true);
      setCancelDialogOpen(false);
      setTimeout(() => setCancelSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to cancel booking:', error);
    }
  };

  return (
    <Paper 
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{ p: 3, mt: 3 }}
    >
      <Typography variant="h5" gutterBottom>
        Your Bookings
      </Typography>

      <Collapse in={cancelSuccess}>
        <Alert 
          severity="success" 
          sx={{ mb: 2 }}
          onClose={() => setCancelSuccess(false)}
        >
          Booking cancelled successfully
        </Alert>
      </Collapse>

      {bookings.length === 0 ? (
        <Typography color="text.secondary" align="center" sx={{ py: 4 }}>
          No bookings found
        </Typography>
      ) : (
        <List>
          <AnimatePresence>
            {bookings.map((booking, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <ListItem
                  sx={{
                    mb: 2,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 1,
                    '&:hover': {
                      bgcolor: 'action.hover',
                      transform: 'translateY(-2px)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                  secondaryAction={
                    <IconButton 
                      edge="end" 
                      color="error"
                      onClick={() => {
                        setSelectedBooking(booking);
                        setCancelDialogOpen(true);
                      }}
                    >
                      <Cancel />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="h6">
                          {booking.restaurantName}
                        </Typography>
                        <Chip 
                          size="small" 
                          label="Confirmed" 
                          color="success"
                          icon={<CheckCircle />}
                        />
                      </Box>
                    }
                    secondary={
                      <Box sx={{ mt: 1 }}>
                        <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CalendarToday sx={{ fontSize: 16, mr: 0.5 }} />
                            {format(new Date(booking.date), 'MMM dd, yyyy')}
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTime sx={{ fontSize: 16, mr: 0.5 }} />
                            {format(new Date(`2000-01-01T${booking.time}`), 'h:mm a')}
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <People sx={{ fontSize: 16, mr: 0.5 }} />
                            {booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}
                          </Box>
                        </Box>
                        {booking.specialRequests && (
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <Info sx={{ fontSize: 16, mr: 0.5, color: 'info.main' }} />
                            <Typography variant="body2" color="text.secondary">
                              {booking.specialRequests}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    }
                  />
                </ListItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </List>
      )}

      {/* Cancel Booking Dialog */}
      <Dialog
        open={cancelDialogOpen}
        onClose={() => setCancelDialogOpen(false)}
      >
        <DialogTitle>Cancel Booking</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to cancel your booking at {selectedBooking?.restaurantName}?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Date: {selectedBooking && format(new Date(selectedBooking.date), 'MMMM d, yyyy')}
            <br />
            Time: {selectedBooking && format(new Date(`2000-01-01T${selectedBooking.time}`), 'h:mm a')}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setCancelDialogOpen(false)}>
            Keep Booking
          </Button>
          <Button 
            onClick={() => handleCancelBooking(selectedBooking)}
            color="error"
            variant="contained"
          >
            Cancel Booking
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default BookingHistory; 
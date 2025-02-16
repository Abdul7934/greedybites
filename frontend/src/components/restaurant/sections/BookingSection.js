import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Typography
} from '@mui/material';
import {
  Check as CheckIcon,
  Close as CloseIcon,
  AccessTime as PendingIcon
} from '@mui/icons-material';

const bookings = [
  {
    id: 1,
    customerName: 'John Doe',
    date: '2024-03-20',
    time: '19:00',
    guests: 4,
    tableNumber: 'T12',
    status: 'pending'
  },
  // Add more sample bookings
];

const BookingSection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Recent Bookings
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Guests</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.customerName}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.time}</TableCell>
                <TableCell>{booking.guests}</TableCell>
                <TableCell>{booking.tableNumber}</TableCell>
                <TableCell>
                  <Chip
                    label={booking.status}
                    color={
                      booking.status === 'confirmed' ? 'success' :
                      booking.status === 'pending' ? 'warning' : 'error'
                    }
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton color="success">
                    <CheckIcon />
                  </IconButton>
                  <IconButton color="error">
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BookingSection; 
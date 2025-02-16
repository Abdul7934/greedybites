import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Chip
} from '@mui/material';

const payments = [
  {
    id: 'PAY001',
    date: '2024-03-20',
    customer: 'John Doe',
    amount: 150.00,
    method: 'Credit Card',
    status: 'completed'
  },
  {
    id: 'PAY002',
    date: '2024-03-20',
    customer: 'Jane Smith',
    amount: 85.50,
    method: 'UPI',
    status: 'pending'
  },
  // Add more payment records
];

const PaymentSection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Payment History
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Payment ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.customer}</TableCell>
                <TableCell align="right">
                  ${payment.amount.toFixed(2)}
                </TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>
                  <Chip
                    label={payment.status}
                    color={payment.status === 'completed' ? 'success' : 'warning'}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PaymentSection; 
import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid,
  Paper,
  Button,
  Tooltip
} from '@mui/material';
import { 
  TableBar,
  CheckCircle,
  Cancel
} from '@mui/icons-material';

const TableView = ({ isOccupied, tableNumber }) => {
  return (
    <Tooltip title={`Table ${tableNumber} - ${isOccupied ? 'Occupied' : 'Available'}`}>
      <Button
        variant="outlined"
        startIcon={<TableBar />}
        color={isOccupied ? 'error' : 'success'}
        sx={{
          width: 100,
          height: 100,
          m: 1,
          flexDirection: 'column',
          '& .MuiButton-startIcon': {
            margin: 0,
            fontSize: '2rem'
          }
        }}
      >
        {tableNumber}
        {isOccupied ? 
          <Cancel fontSize="small" sx={{ mt: 1 }} /> : 
          <CheckCircle fontSize="small" sx={{ mt: 1 }} />
        }
      </Button>
    </Tooltip>
  );
};

const Restaurant3DView = ({ seatingData = {} }) => {
  // Provide default values if seatingData is undefined
  const {
    totalTables = 0,
    occupied = 0,
    available = 0
  } = seatingData;

  // Generate tables array with default values if seatingData is undefined
  const tables = Array.from({ length: totalTables }).map((_, index) => ({
    isOccupied: Math.random() > 0.5,
    number: index + 1
  }));

  if (!seatingData) {
  return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          Seating data not available
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, minHeight: 500 }}>
          <Typography variant="h6" gutterBottom>
            Restaurant Layout
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 400
          }}>
            {tables.map((table, index) => (
              <TableView
                key={index}
                isOccupied={table.isOccupied}
                tableNumber={table.number}
              />
            ))}
      </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Seating Information
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Total Tables: {totalTables}
          </Typography>
          <Typography variant="subtitle2" color="success.main">
            Available: {available}
          </Typography>
          <Typography variant="subtitle2" color="error.main">
            Occupied: {occupied}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Restaurant3DView; 
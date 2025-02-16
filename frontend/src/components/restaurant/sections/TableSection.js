import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton,
  Chip,
  Tooltip
} from '@mui/material';
import {
  EventSeat as SeatIcon,
  Block as BlockIcon,
  Edit as EditIcon,
  CheckCircle as AvailableIcon
} from '@mui/icons-material';

const tables = [
  {
    id: 1,
    number: 'T1',
    capacity: 4,
    isOccupied: false,
    isBlocked: false
  },
  {
    id: 2,
    number: 'T2',
    capacity: 2,
    isOccupied: true,
    isBlocked: false
  },
  {
    id: 3,
    number: 'T3',
    capacity: 6,
    isOccupied: false,
    isBlocked: true
  },
  // Add more tables as needed
];

const TableSection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Table Management
      </Typography>
      <Grid container spacing={3}>
        {tables.map((table) => (
          <Grid item xs={12} sm={6} md={4} key={table.id}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                bgcolor: table.isBlocked ? 'grey.100' : 'background.paper'
              }}
            >
              <IconButton
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8
                }}
              >
                <EditIcon />
              </IconButton>

              <SeatIcon sx={{ fontSize: 40, mb: 1, color: 'primary.main' }} />
              <Typography variant="h6">
                Table {table.number}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Capacity: {table.capacity} seats
              </Typography>

              <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                <Chip
                  icon={table.isOccupied ? <SeatIcon /> : <AvailableIcon />}
                  label={table.isOccupied ? 'Occupied' : 'Available'}
                  color={table.isOccupied ? 'error' : 'success'}
                />
                {table.isBlocked && (
                  <Chip
                    icon={<BlockIcon />}
                    label="Blocked"
                    color="warning"
                  />
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TableSection; 
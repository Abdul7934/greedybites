import {
  Box,
  Grid,
  Paper,
  Typography,
  LinearProgress,
  Stack
} from '@mui/material';
import {
  TrendingUp,
  People,
  RestaurantMenu,
  Star
} from '@mui/icons-material';

const stats = [
  {
    title: "Today's Revenue",
    value: "$1,250",
    icon: <TrendingUp />,
    color: "#4CAF50"
  },
  {
    title: "Total Bookings",
    value: "45",
    icon: <People />,
    color: "#2196F3"
  },
  {
    title: "Available Tables",
    value: "8/12",
    icon: <RestaurantMenu />,
    color: "#FF9800"
  },
  {
    title: "Average Rating",
    value: "4.5",
    icon: <Star />,
    color: "#F44336"
  }
];

const OverviewSection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Dashboard Overview
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -10,
                  right: -10,
                  opacity: 0.1,
                  transform: 'rotate(30deg)'
                }}
              >
                {stat.icon}
              </Box>
              
              <Typography color="text.secondary" variant="subtitle2">
                {stat.title}
              </Typography>
              <Typography variant="h4" sx={{ my: 1, color: stat.color }}>
                {stat.value}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{
                  mt: 'auto',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: stat.color
                  }
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OverviewSection; 
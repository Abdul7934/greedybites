import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const AdminDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography>Welcome to Admin Dashboard</Typography>
            {/* Add your admin dashboard content here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard; 
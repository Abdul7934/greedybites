import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const BloggerDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Blogger Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography>Welcome to Blogger Dashboard</Typography>
            {/* Add your blogger dashboard content here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BloggerDashboard; 
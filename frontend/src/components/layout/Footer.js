import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  TextField, 
  Button, 
  IconButton,
  Divider,
  Stack
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Send as SendIcon,
  Restaurant,
  PersonAdd
} from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About FoodDelivery
            </Typography>
            <Typography variant="body2">
              Your favorite food delivery platform. We connect you with the best restaurants in your area.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" component="a" href="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
                Home
              </Typography>
              <Typography variant="body2" component="a" href="/restaurants" sx={{ color: 'inherit', textDecoration: 'none' }}>
                Restaurants
              </Typography>
              <Typography variant="body2" component="a" href="/about" sx={{ color: 'inherit', textDecoration: 'none' }}>
                About Us
              </Typography>
              <Typography variant="body2" component="a" href="/contact" sx={{ color: 'inherit', textDecoration: 'none' }}>
                Contact
              </Typography>
            </Stack>
          </Grid>

          {/* Restaurant Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              For Restaurants
            </Typography>
            <Stack spacing={2} sx={{ mt: 2 }}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<Restaurant />}
                  onClick={() => navigate('/restaurant/login')}
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                    fontWeight: 'bold',
                    borderRadius: 2
                  }}
                >
                  Restaurant Login
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<PersonAdd />}
                  onClick={() => navigate('/restaurant/signup')}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'grey.100',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    },
                    fontWeight: 'bold',
                    borderRadius: 2
                  }}
                >
                  Register Restaurant
                </Button>
              </motion.div>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bottom Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} FoodDelivery. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="/privacy" color="inherit" underline="hover" sx={{ opacity: 0.7 }}>
              Privacy Policy
            </Link>
            <Link href="/terms" color="inherit" underline="hover" sx={{ opacity: 0.7 }}>
              Terms & Conditions
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 
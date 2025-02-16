import { useEffect } from 'react';
import { Container, Grid, Typography, Box, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import AOS from 'aos';

// Import components
import Banner from '../layout/Banner';
import CategorySection from '../sections/CategorySection';
import PopularDishes from '../sections/PopularDishes';
import FeaturedRestaurants from '../sections/FeaturedRestaurants';
import Features from '../sections/Features';
import Testimonials from '../sections/Testimonials';
import Footer from '../layout/Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner />

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box mb={3} data-aos="fade-up">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Explore Categories
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center">
            Discover food from your favorite cuisines
          </Typography>
        </Box>
        <CategorySection />
      </Container>

      {/* Popular Dishes */}
      <Box sx={{ bgcolor: 'grey.50', py: 4 }}>
        <Container maxWidth="lg">
          <Box mb={3} data-aos="fade-up">
            <Typography variant="h4" component="h2" gutterBottom align="center">
              Popular Dishes
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" align="center">
              Most ordered dishes by our customers
            </Typography>
          </Box>
          <PopularDishes />
        </Container>
      </Box>

      {/* Featured Restaurants */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box mb={3} data-aos="fade-up">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Featured Restaurants
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center">
            Top-rated restaurants in your area
          </Typography>
        </Box>
        <FeaturedRestaurants />
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 4 }}>
        <Container maxWidth="lg">
          <Box mb={3} data-aos="fade-up">
            <Typography variant="h4" component="h2" gutterBottom align="center">
              Why Choose Us
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" align="center">
              We offer the best food delivery experience
            </Typography>
          </Box>
          <Features />
        </Container>
      </Box>

      {/* Testimonials */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box mb={3} data-aos="fade-up">
          <Typography variant="h4" component="h2" gutterBottom align="center">
            What Our Customers Say
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center">
            Read reviews from our satisfied customers
          </Typography>
        </Box>
        <Testimonials />
      </Container>

      {/* Download App Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white',
          py: 4
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Typography variant="h4" gutterBottom>
                Download Our Mobile App
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Get the best food delivery experience with our mobile app. 
                Available for iOS and Android.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <motion.img 
                  src="/images/app-store.png" 
                  alt="App Store"
                  style={{ height: 40, cursor: 'pointer' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
                <motion.img 
                  src="/images/play-store.png" 
                  alt="Play Store"
                  style={{ height: 40, cursor: 'pointer' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <motion.img
                src="/images/app-mockup.png"
                alt="Mobile App"
                style={{ width: '100%', maxWidth: 400, display: 'block', margin: 'auto' }}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </motion.div>
  );
};

export default Home; 
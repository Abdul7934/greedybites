import { Grid, Card, CardMedia, CardContent, Typography, Box, Rating, Chip, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Favorite, Share, RestaurantMenu } from '@mui/icons-material';
import { images } from '../../assets/images';
import ParallaxWrapper from '../utils/ParallaxWrapper';
import Card3D from '../utils/Card3D';
import ScrollAnimation from '../utils/ScrollAnimation';
import ParticleBackground from '../utils/ParticleBackground';
import GradientBackground from '../utils/GradientBackground';

const restaurants = [
  {
    name: 'Meat Haven',
    cuisine: 'BBQ & Grill',
    rating: 4.5,
    image: images.restaurants.restaurant1,
    priceRange: '₹₹₹'
  },
  {
    name: 'Green Garden',
    cuisine: 'Vegetarian',
    rating: 4.3,
    image: images.restaurants.restaurant2,
    priceRange: '₹₹'
  },
  {
    name: 'Spice Route',
    cuisine: 'Indian',
    rating: 4.7,
    image: images.restaurants.restaurant3,
    priceRange: '₹₹₹'
  },
  {
    name: 'Pizza Paradise',
    cuisine: 'Italian',
    rating: 4.4,
    image: images.restaurants.restaurant4,
    priceRange: '₹₹'
  },
  {
    name: 'Sushi Station',
    cuisine: 'Japanese',
    rating: 4.6,
    image: images.restaurants.restaurant5,
    priceRange: '₹₹₹₹'
  },
  {
    name: 'Veggie Delight',
    cuisine: 'Multi-cuisine',
    rating: 4.2,
    image: images.restaurants.restaurant6,
    priceRange: '₹₹'
  }
];

const FeaturedRestaurants = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticleBackground />
      <GradientBackground />
      
      <Grid container spacing={3}>
        {restaurants.map((restaurant, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ParallaxWrapper offset={30}>
              <ScrollAnimation animation={index % 2 === 0 ? "slideLeft" : "slideRight"}>
                <Card3D>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card 
                        sx={{ 
                          height: '100%',
                          position: 'relative',
                          overflow: 'hidden',
                          '&:hover .overlay': {
                            opacity: 1
                          },
                          '&:hover .restaurant-actions': {
                            transform: 'translateY(0)'
                          }
                        }}
                      >
                        {/* Overlay gradient */}
                        <Box
                          className="overlay"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '200px',
                            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            zIndex: 1
                          }}
                        />

                        <CardMedia
                          component="img"
                          height="200"
                          image={restaurant.image}
                          alt={restaurant.name}
                        />

                        {/* Quick action buttons */}
                        <Box
                          className="restaurant-actions"
                          sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            display: 'flex',
                            gap: 1,
                            transform: 'translateY(-100%)',
                            transition: 'transform 0.3s ease',
                            zIndex: 2
                          }}
                        >
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <IconButton 
                              sx={{ 
                                bgcolor: 'white',
                                '&:hover': { bgcolor: 'white' }
                              }}
                            >
                              <Favorite color="error" />
                            </IconButton>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <IconButton 
                              sx={{ 
                                bgcolor: 'white',
                                '&:hover': { bgcolor: 'white' }
                              }}
                            >
                              <Share color="primary" />
                            </IconButton>
                          </motion.div>
                        </Box>

                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            {restaurant.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              {restaurant.cuisine}
                            </Typography>
                            <Box sx={{ mx: 1 }}>•</Box>
                            <Typography variant="body2" color="text.secondary">
                              {restaurant.priceRange}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Rating value={restaurant.rating} precision={0.1} readOnly size="small" />
                            <Typography variant="body2" sx={{ ml: 1 }}>
                              {restaurant.rating}
                            </Typography>
                          </Box>

                          {/* View Menu Button */}
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 1,
                                bgcolor: 'primary.main',
                                color: 'white',
                                py: 1,
                                borderRadius: 1,
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                                '&:hover': {
                                  bgcolor: 'primary.dark'
                                }
                              }}
                            >
                              <RestaurantMenu />
                              <Typography variant="button">
                                View Menu
                              </Typography>
                            </Box>
                          </motion.div>
                        </CardContent>

                        {/* Status Badge */}
                        <Chip
                          label="Open Now"
                          color="success"
                          size="small"
                          sx={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                            zIndex: 2
                          }}
                        />
                      </Card>
                    </motion.div>
                  </motion.div>
                </Card3D>
              </ScrollAnimation>
            </ParallaxWrapper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedRestaurants; 
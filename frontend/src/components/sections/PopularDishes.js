import { Grid, Card, CardMedia, CardContent, Typography, Rating, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { images } from '../../assets/images';

const dishes = [
  { 
    name: 'Classic Burger', 
    image: images.dishes.burger, 
    rating: 4.6, 
    category: 'American'
  },
  { 
    name: 'Fresh Sushi Roll', 
    image: images.dishes.sushi, 
    rating: 4.9, 
    category: 'Japanese'
  },
  { 
    name: 'Chicken Biryani', 
    image: images.dishes.biryani, 
    rating: 4.7, 
    category: 'Indian'
  },
  { 
    name: 'Pasta Alfredo', 
    image: images.dishes.pasta, 
    rating: 4.5, 
    category: 'Italian'
  },
  { 
    name: 'Garden Salad', 
    image: images.dishes.salad, 
    rating: 4.4, 
    category: 'Healthy'
  },
  { 
    name: 'Pad Thai Noodles', 
    image: images.dishes.noodles, 
    rating: 4.6, 
    category: 'Thai'
  },
  { 
    name: 'Chocolate Donut', 
    image: images.dishes.dessert, 
    rating: 4.7, 
    category: 'Dessert'
  },
  {
    name: 'Butter Chicken',
    image: images.dishes.butterChicken,
    rating: 4.8,
    category: 'Indian'
  },
  {
    name: 'Margherita Pizza',
    image: images.dishes.pizza,
    rating: 4.7,
    category: 'Italian'
  }
];

const PopularDishes = () => {
  return (
    <Grid container spacing={3}>
      {dishes.map((dish, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card sx={{ height: '100%', position: 'relative' }}>
              <CardMedia
                component="img"
                height="200"
                image={dish.image}
                alt={dish.name}
                sx={{
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {dish.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  gutterBottom
                >
                  {dish.category}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  mt: 2 
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating 
                      value={dish.rating} 
                      precision={0.1} 
                      readOnly 
                      size="small" 
                    />
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ ml: 1 }}
                    >
                      ({dish.rating})
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default PopularDishes; 
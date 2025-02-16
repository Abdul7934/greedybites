import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { images } from '../../assets/images';

const categories = [
  { name: 'Indian Cuisine', image: images.categories.indian },
  { name: 'Chinese Cuisine', image: images.categories.chinese },
  { name: 'Italian Cuisine', image: images.categories.italian },
  { name: 'Mexican Cuisine', image: images.categories.mexican },
  { name: 'Japanese Cuisine', image: images.categories.japanese },
  { name: 'Thai Cuisine', image: images.categories.thai },
  { name: 'Mediterranean', image: images.categories.mediterranean },
  { name: 'Desserts', image: images.categories.desserts }
];

const CategorySection = () => {
  return (
    <Grid container spacing={3}>
      {categories.map((category, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card sx={{ height: '100%', cursor: 'pointer' }}>
              <CardMedia
                component="img"
                height="200"
                image={category.image}
                alt={category.name}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategorySection; 
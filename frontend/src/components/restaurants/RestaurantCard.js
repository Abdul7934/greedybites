import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Chip, 
  Rating 
} from '@mui/material';
import { Restaurant, LocationOn, AccessTime } from '@mui/icons-material';
import { motion } from 'framer-motion';

const RestaurantCard = ({ restaurant }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        sx={{ 
          maxWidth: 345,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: 2
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={restaurant.images.profile || 'https://source.unsplash.com/random/345x200/?restaurant'}
          alt={restaurant.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {restaurant.name}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Rating value={restaurant.rating} precision={0.5} readOnly />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              ({restaurant.rating})
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {restaurant.address.city}, {restaurant.address.state}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
            {restaurant.cuisine.map((type, index) => (
              <Chip
                key={index}
                label={type}
                size="small"
                sx={{ 
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': { bgcolor: 'primary.dark' }
                }}
              />
            ))}
          </Box>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography variant="body2" color="text.secondary">
              {restaurant.seatingCapacity.total - restaurant.seatingCapacity.tables.filter(t => t.isOccupied).length} tables available
            </Typography>
            <Chip
              icon={<AccessTime />}
              label="Open Now"
              color="success"
              size="small"
            />
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RestaurantCard; 
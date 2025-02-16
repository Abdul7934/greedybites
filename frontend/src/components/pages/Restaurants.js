import { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Rating,
  Box,
  Chip,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  InputAdornment,
  Slider,
  Paper,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  CircularProgress,
  CardActions
} from '@mui/material';
import Restaurant from '@mui/icons-material/Restaurant';
import Circle from '@mui/icons-material/Circle';
import AccessTime from '@mui/icons-material/AccessTime';
import LocationOn from '@mui/icons-material/LocationOn';
import Search from '@mui/icons-material/Search';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import LocalDining from '@mui/icons-material/LocalDining';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import DiningIcon from '../common/DiningIcon';
import RestaurantBanner from '../restaurants/RestaurantBanner';
import RestaurantBloggerPreview from '../restaurants/RestaurantBloggerPreview';
import { motion } from 'framer-motion';
import { images } from '../../assets/images';
import Footer from '../layout/Footer';
import { VideoLibrary, Group } from '@mui/icons-material';
import { useSelector } from 'react-redux';

export const DUMMY_RESTAURANTS = [
  // Mumbai Restaurants
  {
    id: 1,
    name: 'Royal Tandoor',
    cuisine: 'North Indian',
    rating: 4.6,
    type: 'both',
    image: images.restaurants.restaurant7,
    description: 'Authentic North Indian cuisine with royal ambiance',
    waitTime: '35-45 min',
    distance: 3.8,
    priceRange: '₹₹₹',
    address: 'Bandra West, Mumbai',
    city: 'Mumbai'
  },
  {
    id: 2,
    name: 'Coastal Flavors',
    cuisine: 'Seafood',
    rating: 4.6,
    type: 'nonveg',
    image: images.restaurants.restaurant11,
    description: 'Fresh seafood and coastal delicacies',
    waitTime: '35-45 min',
    distance: 3.0,
    priceRange: '₹₹₹',
    address: 'Marine Drive, Mumbai',
    city: 'Mumbai'
  },
  {
    id: 3,
    name: 'Pure Veg Paradise',
    cuisine: 'Gujarati',
    rating: 4.5,
    type: 'veg',
    image: images.restaurants.restaurant2,
    description: 'Traditional Gujarati thali and snacks',
    waitTime: '25-35 min',
    distance: 2.5,
    priceRange: '₹₹',
    address: 'Juhu, Mumbai',
    city: 'Mumbai'
  },
  {
    id: 4,
    name: 'Mumbai Spice',
    cuisine: 'Street Food',
    rating: 4.4,
    type: 'veg',
    image: images.restaurants.restaurant6,
    description: 'Famous Mumbai street food and chaat',
    waitTime: '20-30 min',
    distance: 1.5,
    priceRange: '₹',
    address: 'Colaba, Mumbai',
    city: 'Mumbai'
  },

  // Delhi Restaurants
  {
    id: 5,
    name: 'The Great Punjab',
    cuisine: 'North Indian',
    rating: 4.7,
    type: 'both',
    image: images.restaurants.restaurant1,
    description: 'Premium North Indian cuisine',
    waitTime: '30-45 min',
    distance: 2.5,
    priceRange: '₹₹₹',
    address: 'Connaught Place, Delhi',
    city: 'Delhi'
  },
  {
    id: 6,
    name: 'Delhi Darbar',
    cuisine: 'Mughlai',
    rating: 4.5,
    type: 'nonveg',
    image: images.restaurants.restaurant3,
    description: 'Royal Mughlai cuisine',
    waitTime: '35-50 min',
    distance: 3.2,
    priceRange: '₹₹₹',
    address: 'Hauz Khas, Delhi',
    city: 'Delhi'
  },
  {
    id: 7,
    name: 'Saatvik Kitchen',
    cuisine: 'North Indian',
    rating: 4.3,
    type: 'veg',
    image: images.restaurants.restaurant4,
    description: 'Pure vegetarian North Indian dishes',
    waitTime: '25-40 min',
    distance: 2.0,
    priceRange: '₹₹',
    address: 'Vasant Kunj, Delhi',
    city: 'Delhi'
  },
  {
    id: 8,
    name: 'Delhi Chaat House',
    cuisine: 'Street Food',
    rating: 4.4,
    type: 'veg',
    image: images.restaurants.restaurant8,
    description: 'Famous Delhi street food',
    waitTime: '15-25 min',
    distance: 1.8,
    priceRange: '₹',
    address: 'Chandni Chowk, Delhi',
    city: 'Delhi'
  },

  // Bangalore Restaurants
  {
    id: 9,
    name: 'South Indian Hub',
    cuisine: 'South Indian',
    rating: 4.6,
    type: 'veg',
    image: images.restaurants.restaurant9,
    description: 'Authentic South Indian cuisine',
    waitTime: '20-30 min',
    distance: 2.2,
    priceRange: '₹₹',
    address: 'Koramangala, Bangalore',
    city: 'Bangalore'
  },
  {
    id: 10,
    name: 'Bangalore Bytes',
    cuisine: 'Multi-cuisine',
    rating: 4.5,
    type: 'both',
    image: images.restaurants.restaurant10,
    description: 'Modern fusion cuisine',
    waitTime: '30-40 min',
    distance: 2.8,
    priceRange: '₹₹₹',
    address: 'Indiranagar, Bangalore',
    city: 'Bangalore'
  },
  {
    id: 11,
    name: 'Garden BBQ',
    cuisine: 'BBQ & Grill',
    rating: 4.4,
    type: 'nonveg',
    image: images.restaurants.restaurant5,
    description: 'Outdoor BBQ experience',
    waitTime: '40-50 min',
    distance: 3.5,
    priceRange: '₹₹₹',
    address: 'MG Road, Bangalore',
    city: 'Bangalore'
  },
  {
    id: 12,
    name: 'Green Path',
    cuisine: 'Healthy Food',
    rating: 4.3,
    type: 'veg',
    image: images.restaurants.restaurant12,
    description: 'Healthy and organic food options',
    waitTime: '25-35 min',
    distance: 2.5,
    priceRange: '₹₹',
    address: 'HSR Layout, Bangalore',
    city: 'Bangalore'
  },

  // Add more Mumbai restaurants
  {
    id: 13,
    name: 'China Gate',
    cuisine: 'Chinese',
    rating: 4.3,
    type: 'both',
    image: images.restaurants.restaurant8,
    description: 'Authentic Chinese cuisine',
    waitTime: '30-40 min',
    distance: 2.8,
    priceRange: '₹₹₹',
    address: 'Powai, Mumbai',
    city: 'Mumbai'
  },
  {
    id: 14,
    name: 'South Express',
    cuisine: 'South Indian',
    rating: 4.4,
    type: 'veg',
    image: images.restaurants.restaurant9,
    description: 'Authentic South Indian dishes',
    waitTime: '20-30 min',
    distance: 1.5,
    priceRange: '₹₹',
    address: 'Matunga, Mumbai',
    city: 'Mumbai'
  },

  // Bangalore Restaurants (Add more)
  {
    id: 15,
    name: 'Udupi Grand',
    cuisine: 'South Indian',
    rating: 4.5,
    type: 'veg',
    image: images.restaurants.restaurant10,
    description: 'Traditional South Indian breakfast',
    waitTime: '20-30 min',
    distance: 2.0,
    priceRange: '₹₹',
    address: 'Jayanagar, Bangalore',
    city: 'Bangalore'
  },
  {
    id: 16,
    name: 'Kebab Corner',
    cuisine: 'Mughlai',
    rating: 4.6,
    type: 'nonveg',
    image: images.restaurants.restaurant11,
    description: 'Best kebabs in town',
    waitTime: '35-45 min',
    distance: 3.5,
    priceRange: '₹₹₹',
    address: 'Commercial Street, Bangalore',
    city: 'Bangalore'
  },

  // Chennai Restaurants
  {
    id: 17,
    name: 'Madras Kitchen',
    cuisine: 'South Indian',
    rating: 4.7,
    type: 'veg',
    image: images.restaurants.restaurant12,
    description: 'Authentic Chennai cuisine',
    waitTime: '25-35 min',
    distance: 2.2,
    priceRange: '₹₹',
    address: 'T Nagar, Chennai',
    city: 'Chennai'
  },
  {
    id: 18,
    name: 'Sea Shell',
    cuisine: 'Seafood',
    rating: 4.5,
    type: 'nonveg',
    image: images.restaurants.restaurant7,
    description: 'Fresh seafood specialties',
    waitTime: '35-45 min',
    distance: 3.0,
    priceRange: '₹₹₹',
    address: 'ECR Road, Chennai',
    city: 'Chennai'
  },
  {
    id: 19,
    name: 'Veg Paradise',
    cuisine: 'North Indian',
    rating: 4.3,
    type: 'veg',
    image: images.restaurants.restaurant8,
    description: 'Pure vegetarian delights',
    waitTime: '25-35 min',
    distance: 2.5,
    priceRange: '₹₹',
    address: 'Anna Nagar, Chennai',
    city: 'Chennai'
  },

  // Hyderabad Restaurants
  {
    id: 20,
    name: 'Paradise Biryani',
    cuisine: 'Hyderabadi',
    rating: 4.8,
    type: 'nonveg',
    image: images.restaurants.restaurant9,
    description: 'World famous Hyderabadi biryani',
    waitTime: '40-50 min',
    distance: 3.0,
    priceRange: '₹₹₹',
    address: 'Secunderabad, Hyderabad',
    city: 'Hyderabad'
  },
  {
    id: 21,
    name: 'Chutneys',
    cuisine: 'South Indian',
    rating: 4.4,
    type: 'veg',
    image: images.restaurants.restaurant10,
    description: 'Famous for dosas and chutneys',
    waitTime: '25-35 min',
    distance: 2.5,
    priceRange: '₹₹',
    address: 'Banjara Hills, Hyderabad',
    city: 'Hyderabad'
  },

  // Kolkata Restaurants
  {
    id: 22,
    name: 'Bengali Kitchen',
    cuisine: 'Bengali',
    rating: 4.6,
    type: 'nonveg',
    image: images.restaurants.restaurant11,
    description: 'Traditional Bengali cuisine',
    waitTime: '35-45 min',
    distance: 2.8,
    priceRange: '₹₹',
    address: 'Park Street, Kolkata',
    city: 'Kolkata'
  },
  {
    id: 23,
    name: 'Roll House',
    cuisine: 'Street Food',
    rating: 4.3,
    type: 'nonveg',
    image: images.restaurants.restaurant12,
    description: 'Famous Kolkata rolls',
    waitTime: '15-25 min',
    distance: 1.5,
    priceRange: '₹',
    address: 'New Market, Kolkata',
    city: 'Kolkata'
  },

  // Pune Restaurants
  {
    id: 24,
    name: 'Maratha Spice',
    cuisine: 'Maharashtrian',
    rating: 4.5,
    type: 'both',
    image: images.restaurants.restaurant7,
    description: 'Authentic Maharashtrian thali',
    waitTime: '30-40 min',
    distance: 2.5,
    priceRange: '₹₹',
    address: 'FC Road, Pune',
    city: 'Pune'
  },
  {
    id: 25,
    name: 'German Bakery',
    cuisine: 'Continental',
    rating: 4.4,
    type: 'both',
    image: images.restaurants.restaurant8,
    description: 'Famous bakery and cafe',
    waitTime: '20-30 min',
    distance: 2.0,
    priceRange: '₹₹₹',
    address: 'Koregaon Park, Pune',
    city: 'Pune'
  },

  // Ahmedabad Restaurants
  {
    id: 26,
    name: 'Gujarati Thali',
    cuisine: 'Gujarati',
    rating: 4.7,
    type: 'veg',
    image: images.restaurants.restaurant9,
    description: 'Unlimited Gujarati thali',
    waitTime: '25-35 min',
    distance: 2.2,
    priceRange: '₹₹',
    address: 'CG Road, Ahmedabad',
    city: 'Ahmedabad'
  },
  {
    id: 27,
    name: 'Street Food Hub',
    cuisine: 'Street Food',
    rating: 4.3,
    type: 'veg',
    image: images.restaurants.restaurant10,
    description: 'Famous street food items',
    waitTime: '15-25 min',
    distance: 1.8,
    priceRange: '₹',
    address: 'Law Garden, Ahmedabad',
    city: 'Ahmedabad'
  },

  // Jaipur Restaurants
  {
    id: 28,
    name: 'Rajasthani Rasoi',
    cuisine: 'Rajasthani',
    rating: 4.6,
    type: 'veg',
    image: images.restaurants.restaurant11,
    description: 'Traditional Rajasthani food',
    waitTime: '30-40 min',
    distance: 2.5,
    priceRange: '₹₹',
    address: 'MI Road, Jaipur',
    city: 'Jaipur'
  },
  {
    id: 29,
    name: 'Curry Palace',
    cuisine: 'North Indian',
    rating: 4.4,
    type: 'both',
    image: images.restaurants.restaurant12,
    description: 'Royal dining experience',
    waitTime: '35-45 min',
    distance: 3.0,
    priceRange: '₹₹₹',
    address: 'Civil Lines, Jaipur',
    city: 'Jaipur'
  },

  // Lucknow Restaurants
  {
    id: 30,
    name: 'Tunday Kababi',
    cuisine: 'Awadhi',
    rating: 4.8,
    type: 'nonveg',
    image: images.restaurants.restaurant7,
    description: 'Famous Lucknowi kebabs',
    waitTime: '35-45 min',
    distance: 2.8,
    priceRange: '₹₹',
    address: 'Aminabad, Lucknow',
    city: 'Lucknow'
  },
  {
    id: 31,
    name: 'Royal Cafe',
    cuisine: 'North Indian',
    rating: 4.5,
    type: 'both',
    image: images.restaurants.restaurant8,
    description: 'Multi-cuisine restaurant',
    waitTime: '30-40 min',
    distance: 2.5,
    priceRange: '₹₹₹',
    address: 'Hazratganj, Lucknow',
    city: 'Lucknow'
  }
];

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    e.stopPropagation();
    navigate(`/restaurant/${restaurant.id}/menu`);
  };

  return (
    <Card 
      component={motion.div}
      whileHover={{ scale: 1.03 }}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        height="200"
        image={restaurant.image}
        alt={restaurant.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography variant="h6" component="h2">
            {restaurant.name}
          </Typography>
          <Chip
            size="small"
            label={restaurant.type === 'veg' ? 'Pure Veg' : restaurant.type === 'nonveg' ? 'Non-Veg' : 'Mixed'}
            color={restaurant.type === 'veg' ? 'success' : 'default'}
          />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {restaurant.cuisine}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={restaurant.rating} precision={0.1} readOnly size="small" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({restaurant.rating})
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTime sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="body2">{restaurant.waitTime}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <DirectionsCar sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="body2">{restaurant.distance} km</Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {restaurant.address}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleMenuClick}
          startIcon={<LocalDining />}
          sx={{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)'
            }
          }}
        >
          View Menu & Book
        </Button>
      </CardActions>
    </Card>
  );
};

const Restaurants = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const [maxDistance, setMaxDistance] = useState(10);
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const selectedCity = useSelector((state) => state.location.selectedCity);
  const [isFiltering, setIsFiltering] = useState(false);

  // Add useEffect to refresh restaurants when city changes
  useEffect(() => {
    // Reset filters when city changes
    setFilter('all');
    setMaxDistance(10);
    setMinRating(0);
    setSearchQuery('');
  }, [selectedCity]);

  useEffect(() => {
    setIsFiltering(true);
    const timer = setTimeout(() => {
      setIsFiltering(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedCity, filter, maxDistance, minRating, searchQuery]);

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
  };

  const filteredRestaurants = DUMMY_RESTAURANTS.filter(restaurant => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'veg' && restaurant.type === 'veg') ||
      (filter === 'nonveg' && (restaurant.type === 'nonveg' || restaurant.type === 'both'));
    
    const matchesDistance = restaurant.distance <= maxDistance;
    const matchesRating = restaurant.rating >= minRating;
    const matchesCity = restaurant.city === selectedCity;
    
    const matchesSearch = searchQuery 
      ? restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return matchesFilter && matchesDistance && matchesRating && matchesSearch && matchesCity;
  });

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/register');
  };

  // Function to handle API errors
  const handleApiError = (error) => {
    console.error('API Error:', error);
    setError(error?.response?.data?.message || 'Something went wrong');
    setIsLoading(false);
  };

  // Function to handle restaurant navigation with error handling
  const handleRestaurantClick = async (restaurantId) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/restaurants/${restaurantId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch restaurant details');
      }
      const data = await response.json();
      navigate(`/restaurant/${restaurantId}`, { state: { restaurant: data } });
    } catch (error) {
      handleApiError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update the Book Table button click handler
  const handleBookTable = (restaurantId) => {
    const restaurant = DUMMY_RESTAURANTS.find(r => r.id === restaurantId);
    navigate(`/restaurant/${restaurantId}`, { state: { restaurant } });
  };

  // Add this function to show no results message when needed
  const NoResultsMessage = () => (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="h6" color="text.secondary" gutterBottom>
        No restaurants found in {selectedCity}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Try selecting a different city or adjusting your filters
      </Typography>
    </Box>
  );

  return (
    <>
      <RestaurantBanner onSearch={handleSearch} />
      
      {/* Add Navigation Buttons */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<Group />}
            onClick={() => navigate('/bloggers')}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'primary.dark',
              }
            }}
          >
            Food Bloggers
          </Button>
          <Button
            variant="contained"
            startIcon={<VideoLibrary />}
            onClick={() => navigate('/reels')}
            sx={{
              bgcolor: 'secondary.main',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                bgcolor: 'secondary.dark',
              }
            }}
          >
            Food Reels
          </Button>
        </Box>
      </Container>

      <Container maxWidth="lg">
        {/* Filters Section */}
        <Paper sx={{ p: 3, my: 4 }}>
          <Grid container spacing={3}>
            {/* Veg/Non-veg Filter */}
            <Grid item xs={12} md={4}>
              <ToggleButtonGroup
                value={filter}
                exclusive
                onChange={handleFilterChange}
                aria-label="restaurant type"
                fullWidth
              >
                <ToggleButton value="all">
                  All
                </ToggleButton>
                <ToggleButton value="veg">
                  <LocalDining />
                  Veg
                </ToggleButton>
                <ToggleButton value="nonveg">
                  <Restaurant />
                  Non-Veg
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            {/* Distance Filter */}
            <Grid item xs={12} md={4}>
              <Box sx={{ px: 2 }}>
                <Typography gutterBottom>Distance (km)</Typography>
                <Slider
                  value={maxDistance}
                  onChange={(e, newValue) => setMaxDistance(newValue)}
                  valueLabelDisplay="auto"
                  min={0}
                  max={20}
                  marks={[
                    { value: 0, label: '0 km' },
                    { value: 10, label: '10 km' },
                    { value: 20, label: '20 km' },
                  ]}
                />
              </Box>
            </Grid>

            {/* Rating Filter */}
            <Grid item xs={12} md={4}>
              <Box sx={{ px: 2 }}>
                <Typography gutterBottom>Minimum Rating</Typography>
                <Rating
                  value={minRating}
                  onChange={(e, newValue) => setMinRating(newValue)}
                  precision={0.5}
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Active Filters Display */}
        <Box sx={{ mb: 3 }}>
          {filter !== 'all' && (
            <Chip 
              label={`${filter === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}`}
              onDelete={() => setFilter('all')}
              sx={{ mr: 1 }}
            />
          )}
          {maxDistance < 20 && (
            <Chip 
              label={`Distance ≤ ${maxDistance}km`}
              onDelete={() => setMaxDistance(20)}
              sx={{ mr: 1 }}
            />
          )}
          {minRating > 0 && (
            <Chip 
              label={`Rating ≥ ${minRating}★`}
              onDelete={() => setMinRating(0)}
              sx={{ mr: 1 }}
            />
          )}
        </Box>

        {/* Restaurants Grid */}
        <Box sx={{ py: 4 }}>
          <Typography variant="h5" gutterBottom>
            Restaurants in {selectedCity}
            {filteredRestaurants.length > 0 && 
              <Typography component="span" color="text.secondary">
                ({filteredRestaurants.length} results)
              </Typography>
            }
          </Typography>
          
          {isFiltering ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <CircularProgress />
            </Box>
          ) : filteredRestaurants.length > 0 ? (
            <Grid container spacing={3}>
              {filteredRestaurants.map((restaurant) => (
                <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                  <RestaurantCard restaurant={restaurant} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid item xs={12}>
              <NoResultsMessage />
            </Grid>
          )}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Restaurants;

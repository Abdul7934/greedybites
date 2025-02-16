import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Tabs,
  Tab,
  Paper,
  Typography,
  Divider
} from '@mui/material';
import {
  Restaurant,
  MenuBook,
  PhotoLibrary,
  RateReview,
  Info,
  BookOnline
} from '@mui/icons-material';
import RestaurantMenu from './RestaurantMenu';
import RestaurantReviews from './RestaurantReviews';
import RestaurantBooking from './RestaurantBooking';
import { motion, AnimatePresence } from 'framer-motion';

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    {...other}
  >
    <AnimatePresence mode="wait">
      {value === index && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ py: 3 }}>
            {children}
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const RestaurantDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);

  // Mock data - Replace with actual API call
  const restaurant = {
    id,
    name: "Spice Garden",
    description: "Authentic Indian Cuisine",
    cuisine: "Indian",
    rating: 4.5,
    coverImage: "https://example.com/restaurant-image.jpg",
    availability: "Available",
    menu: {
      starters: [
        {
          name: "Paneer Tikka",
          description: "Grilled cottage cheese with spices",
          price: "250",
          isVeg: true,
          image: "https://example.com/paneer-tikka.jpg",
          isSpecial: true
        },
        // Add more items
      ],
      mainCourse: [
        // Add main course items
      ],
      desserts: [
        // Add dessert items
      ]
    },
    reviews: [
      {
        userName: "John Doe",
        userImage: "https://example.com/user1.jpg",
        rating: 5,
        comment: "Amazing food and ambiance!",
        date: "2024-01-15",
        likes: 12,
        isVerified: true,
        images: [
          "https://example.com/review1.jpg",
          "https://example.com/review2.jpg"
        ]
      },
      // Add more reviews
    ]
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper 
        elevation={3}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          background: 'linear-gradient(to right, #ffffff, #f8f9fa)'
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                minHeight: 64,
                fontSize: '1rem',
              }
            }}
          >
            <Tab icon={<Info />} label="Overview" iconPosition="start" />
            <Tab icon={<MenuBook />} label="Menu" iconPosition="start" />
            <Tab icon={<BookOnline />} label="Book Table" iconPosition="start" />
            <Tab icon={<RateReview />} label="Reviews" iconPosition="start" />
            <Tab icon={<PhotoLibrary />} label="Gallery" iconPosition="start" />
          </Tabs>
        </Box>

        <TabPanel value={activeTab} index={0}>
          <RestaurantBooking restaurant={restaurant} />
        </TabPanel>

        <TabPanel value={activeTab} index={1}>
          <RestaurantMenu menu={restaurant.menu} />
        </TabPanel>

        <TabPanel value={activeTab} index={2}>
          <RestaurantBooking restaurant={restaurant} />
        </TabPanel>

        <TabPanel value={activeTab} index={3}>
          <RestaurantReviews reviews={restaurant.reviews} />
        </TabPanel>

        <TabPanel value={activeTab} index={4}>
          {/* Add PhotoGallery component here */}
          <Typography variant="h5">Photo Gallery Coming Soon</Typography>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default RestaurantDetails; 
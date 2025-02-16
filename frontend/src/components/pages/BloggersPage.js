import { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Avatar, 
  IconButton,
  Button,
  Chip
} from '@mui/material';
import { 
  Instagram, 
  YouTube, 
  Twitter, 
  Facebook,
  Favorite,
  Restaurant as RestaurantIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { images } from '../../assets/images';

const bloggers = [
  {
    id: 1,
    name: "Sarah Foodie",
    avatar: images.bloggers.blogger1,
    followers: "520K",
    description: "Food explorer & culinary storyteller | Top Food Critic",
    favoriteRestaurants: ["Pizza Paradise", "Spice Garden", "Sushi Master"],
    socialLinks: {
      instagram: "sarahfoodie",
      youtube: "SarahFoodieTV",
      twitter: "sarahfoodie",
      facebook: "sarahfoodie.official"
    },
    recentPosts: 156,
    reviews: 342,
    location: "Mumbai, India"
  },
  {
    id: 2,
    name: "Chef Mike",
    avatar: images.bloggers.blogger2,
    followers: "385K",
    description: "Professional Chef | Restaurant Reviewer | Food Photography",
    favoriteRestaurants: ["Sushi Hub", "Burger King", "Spice Route"],
    socialLinks: {
      instagram: "chefmike",
      youtube: "ChefMikeTV",
      twitter: "chefmike",
      facebook: "chefmike.official"
    },
    recentPosts: 98,
    reviews: 245,
    location: "Delhi, India"
  },
  {
    id: 3,
    name: "Foodie Sisters",
    avatar: images.bloggers.blogger3,
    followers: "420K",
    description: "Sister duo exploring street food & luxury dining",
    favoriteRestaurants: ["Street Bites", "Royal Kitchen", "Cafe Deluxe"],
    socialLinks: {
      instagram: "foodiesisters",
      youtube: "FoodieSistersOfficial",
      twitter: "foodiesisters",
      facebook: "foodiesisters.official"
    },
    recentPosts: 210,
    reviews: 389,
    location: "Bangalore, India"
  },
  {
    id: 4,
    name: "Spice Master Raj",
    avatar: images.bloggers.blogger4,
    followers: "290K",
    description: "Indian cuisine expert | Spice consultant | Food historian",
    favoriteRestaurants: ["Masala House", "Heritage Kitchen", "Royal Thali"],
    socialLinks: {
      instagram: "spicemasterraj",
      youtube: "SpiceMasterRaj",
      twitter: "spicemasterraj",
      facebook: "spicemasterraj.official"
    },
    recentPosts: 178,
    reviews: 256,
    location: "Jaipur, India"
  },
  {
    id: 5,
    name: "Healthy Bites by Priya",
    avatar: images.bloggers.blogger5,
    followers: "310K",
    description: "Nutritionist | Healthy recipe developer | Wellness coach",
    favoriteRestaurants: ["Green Bowl", "Fit Kitchen", "Nature's Plate"],
    socialLinks: {
      instagram: "healthypriya",
      youtube: "HealthyBitesByPriya",
      twitter: "healthypriya",
      facebook: "healthypriya.official"
    },
    recentPosts: 145,
    reviews: 198,
    location: "Pune, India"
  },
  // Add more bloggers...
];

const BloggersPage = () => {
  const navigate = useNavigate();
  const [hoveredBlogger, setHoveredBlogger] = useState(null);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Food Bloggers Community
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Discover amazing food critics and their culinary journeys
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {bloggers.map((blogger) => (
          <Grid item xs={12} md={6} key={blogger.id}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredBlogger(blogger.id)}
              onHoverEnd={() => setHoveredBlogger(null)}
            >
              <Card 
                sx={{ 
                  height: '100%',
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6
                  },
                  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
                    <Avatar 
                      src={blogger.avatar}
                      sx={{ 
                        width: 100, 
                        height: 100,
                        border: '3px solid',
                        borderColor: 'primary.main',
                        boxShadow: '0 0 15px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Box>
                      <Typography variant="h5" gutterBottom>
                        {blogger.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {blogger.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        📍 {blogger.location}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
                        <Chip 
                          icon={<Favorite sx={{ fontSize: '1rem' }} />}
                          label={`${blogger.followers} followers`}
                          size="small"
                          color="primary"
                        />
                        <Chip 
                          icon={<RestaurantIcon sx={{ fontSize: '1rem' }} />}
                          label={`${blogger.reviews} reviews`}
                          size="small"
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Favorite Restaurants:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {blogger.favoriteRestaurants.map((restaurant) => (
                        <Chip 
                          key={restaurant}
                          label={restaurant}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton 
                        color="primary"
                        onClick={() => window.open(`https://instagram.com/${blogger.socialLinks.instagram}`, '_blank')}
                      >
                        <Instagram />
                      </IconButton>
                      <IconButton 
                        color="error"
                        onClick={() => window.open(`https://youtube.com/${blogger.socialLinks.youtube}`, '_blank')}
                      >
                        <YouTube />
                      </IconButton>
                      <IconButton 
                        sx={{ color: '#1DA1F2' }}
                        onClick={() => window.open(`https://twitter.com/${blogger.socialLinks.twitter}`, '_blank')}
                      >
                        <Twitter />
                      </IconButton>
                      <IconButton 
                        sx={{ color: '#4267B2' }}
                        onClick={() => window.open(`https://facebook.com/${blogger.socialLinks.facebook}`, '_blank')}
                      >
                        <Facebook />
                      </IconButton>
                    </Box>
                    <Button 
                      variant="contained"
                      onClick={() => navigate(`/bloggers/${blogger.id}`)}
                      sx={{
                        background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                        color: 'white',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FF5252, #45B7AF)'
                        }
                      }}
                    >
                      View Profile
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BloggersPage; 
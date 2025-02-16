import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  IconButton,
  Tooltip,
  Divider
} from '@mui/material';
import {
  Instagram,
  YouTube,
  Twitter,
  Verified as VerifiedIcon,
  TrendingUp,
  Restaurant as RestaurantIcon
} from '@mui/icons-material';

const FEATURED_BLOGGERS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'frontend/public/images/testimonials/user2.jpg',
    verified: true,
    followers: '50K',
    reachRate: '85%',
    restaurantReviews: 120,
    social: {
      instagram: '@sarahfoodie',
      youtube: 'SarahsKitchen',
      twitter: '@sarahfoodreview'
    },
    featuredRestaurants: [
      {
        name: 'Spice Route',
        rating: 4.8,
        review: 'Amazing authentic flavors!',
        date: '2024-01-15'
      },
      {
        name: 'Green Garden',
        rating: 4.5,
        review: 'Best vegetarian dishes',
        date: '2024-01-20'
      }
    ]
  },
  {
    id: 2,
    name: 'Mike Chen',
    avatar: 'frontend/public/images/testimonials/user1.jpg',
    verified: true,
    followers: '100K',
    reachRate: '92%',
    restaurantReviews: 200,
    social: {
      instagram: '@mikefoodie',
      youtube: 'MikeEats',
      twitter: '@mikefoodreview'
    },
    featuredRestaurants: [
      {
        name: 'Meat Haven',
        rating: 4.9,
        review: 'Best BBQ in town!',
        date: '2024-01-18'
      },
      {
        name: 'Pizza Paradise',
        rating: 4.7,
        review: 'Authentic Italian taste',
        date: '2024-01-22'
      }
    ]
  },
  {
    id: 3,
    name: 'Emma Lee',
    avatar: 'frontend/public/images/testimonials/user3.jpg',
    verified: true,
    followers: '75K',
    reachRate: '88%',
    restaurantReviews: 150,
    social: {
      instagram: '@emmaeats',
      youtube: 'EmmaFoodie',
      twitter: '@emmafoodlover'
    },
    featuredRestaurants: [
      {
        name: 'Spice Route',
        rating: 4.6,
        review: 'Excellent Indian cuisine',
        date: '2024-01-17'
      },
      {
        name: 'Pizza Paradise',
        rating: 4.4,
        review: 'Great ambiance and food',
        date: '2024-01-21'
      }
    ]
  }
];

const RestaurantBloggerPreview = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" gutterBottom>
          Top Food Bloggers & Their Reviews
        </Typography>
        <Chip 
          icon={<TrendingUp />} 
          label="Trending Reviews" 
          color="primary" 
          variant="outlined"
        />
      </Box>

      <Grid container spacing={2}>
        {FEATURED_BLOGGERS.map((blogger) => (
          <Grid item xs={12} md={4} key={blogger.id}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3
                }
              }}
            >
              <CardContent>
                {/* Blogger Info */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={blogger.avatar}
                    sx={{ width: 50, height: 50, mr: 2 }}
                  />
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {blogger.name}
                      </Typography>
                      {blogger.verified && (
                        <Tooltip title="Verified Blogger">
                          <VerifiedIcon color="primary" fontSize="small" />
                        </Tooltip>
                      )}
                    </Box>
                    <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                      <IconButton size="small" color="primary" href={`https://instagram.com/${blogger.social.instagram}`} target="_blank">
                        <Instagram fontSize="small" />
                      </IconButton>
                      <IconButton size="small" color="error" href={`https://youtube.com/${blogger.social.youtube}`} target="_blank">
                        <YouTube fontSize="small" />
                      </IconButton>
                      <IconButton size="small" color="info" href={`https://twitter.com/${blogger.social.twitter}`} target="_blank">
                        <Twitter fontSize="small" />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>

                {/* Stats */}
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={4}>
                    <Typography variant="caption" color="text.secondary">
                      Followers
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {blogger.followers}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="caption" color="text.secondary">
                      Reach
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {blogger.reachRate}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="caption" color="text.secondary">
                      Reviews
                    </Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {blogger.restaurantReviews}
                    </Typography>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                {/* Featured Restaurant Reviews */}
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  Recent Restaurant Reviews
                </Typography>
                <Stack spacing={1}>
                  {blogger.featuredRestaurants.map((restaurant, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        p: 1, 
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        border: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <RestaurantIcon fontSize="small" color="primary" />
                        <Typography variant="subtitle2">
                          {restaurant.name}
                        </Typography>
                        <Chip 
                          label={`${restaurant.rating}★`}
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ ml: 'auto' }}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        "{restaurant.review}"
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Reviewed on {new Date(restaurant.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantBloggerPreview; 
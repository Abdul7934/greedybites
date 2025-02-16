import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Rating,
  Chip,
  Stack
} from '@mui/material';

const bloggers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait-woman-1',
    followers: '50K',
    rating: 4.5,
    lastVisit: '2024-03-15',
    photos: [
      'https://source.unsplash.com/random/400x300/?restaurant-food-1',
      'https://source.unsplash.com/random/400x300/?restaurant-food-2',
      'https://source.unsplash.com/random/400x300/?restaurant-food-3'
    ],
    review: 'Amazing ambiance and delicious food! The service was impeccable.'
  },
  // Add more bloggers
];

const BloggerSection = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Food Blogger Reviews
      </Typography>
      <Grid container spacing={3}>
        {bloggers.map((blogger) => (
          <Grid item xs={12} md={6} key={blogger.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={blogger.avatar}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="h6">{blogger.name}</Typography>
                    <Stack direction="row" spacing={1}>
                      <Chip label={`${blogger.followers} followers`} size="small" />
                      <Rating value={blogger.rating} readOnly size="small" />
                    </Stack>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {blogger.review}
                </Typography>
                <Grid container spacing={1}>
                  {blogger.photos.map((photo, index) => (
                    <Grid item xs={4} key={index}>
                      <CardMedia
                        component="img"
                        height="120"
                        image={photo}
                        alt={`Food photo ${index + 1}`}
                        sx={{ borderRadius: 1 }}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  Last visited: {blogger.lastVisit}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BloggerSection; 
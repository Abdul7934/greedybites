import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Chip,
  Rating,
  IconButton,
  Divider,
  Paper,
  Stack
} from '@mui/material';
import {
  Favorite,
  Share,
  Restaurant,
  Verified,
  ThumbUp,
  CalendarToday,
  Group
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const BloggerReview = ({ blogger }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ mb: 4, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          {/* Blogger Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar 
              src={blogger.avatar} 
              sx={{ 
                width: 60, 
                height: 60, 
                mr: 2,
                border: '2px solid',
                borderColor: 'primary.main'
              }}
            >
              {blogger.name[0]}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h6">
                  {blogger.name}
                </Typography>
                <Verified color="primary" sx={{ fontSize: 20 }} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip 
                  icon={<Group sx={{ fontSize: 16 }} />}
                  label={blogger.followers}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
                <Chip 
                  icon={<Restaurant sx={{ fontSize: 16 }} />}
                  label={blogger.expertise}
                  size="small"
                  sx={{ bgcolor: 'primary.light', color: 'primary.dark' }}
                />
              </Box>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Rating value={blogger.rating} precision={0.1} readOnly />
              <Typography variant="caption" color="text.secondary">
                <CalendarToday sx={{ fontSize: 12, mr: 0.5 }} />
                {blogger.date}
              </Typography>
            </Box>
          </Box>

          {/* Review Content */}
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            {blogger.review}
          </Typography>

          {/* Recommended Dishes */}
          <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: 'grey.50' }}>
            <Typography variant="subtitle2" gutterBottom color="primary">
              Recommended Dishes
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {blogger.recommendedDishes.map((dish, index) => (
                <Chip
                  key={index}
                  label={dish}
                  icon={<Restaurant sx={{ fontSize: 16 }} />}
                  size="small"
                  variant="outlined"
                  sx={{ my: 0.5 }}
                />
              ))}
            </Stack>
          </Paper>

          {/* Review Images */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            {blogger.images.map((image, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Box
                    component="img"
                    src={image}
                    alt={`Review ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: 250,
                      objectFit: 'cover',
                      borderRadius: 2,
                      boxShadow: 2
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 2 }} />

          {/* Interaction Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton 
                onClick={() => setIsLiked(!isLiked)}
                color={isLiked ? 'error' : 'default'}
              >
                <Favorite />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {blogger.likes}
              </Typography>
              <IconButton>
                <Share />
              </IconButton>
            </Box>
            <Chip 
              icon={<ThumbUp />}
              label="Verified Review"
              color="success"
              size="small"
            />
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const BloggerReviews = ({ bloggers }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        Blogger Reviews & Recommendations
      </Typography>
      {bloggers.map((blogger, index) => (
        <BloggerReview key={index} blogger={blogger} />
      ))}
    </Box>
  );
};

export default BloggerReviews; 
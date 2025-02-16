import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Rating,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  IconButton,
  Button,
  Divider
} from '@mui/material';
import {
  ThumbUp,
  Share,
  VerifiedUser,
  PhotoCamera,
  Restaurant
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ReviewCard = ({ review }) => (
  <Card
    component={motion.div}
    whileHover={{ y: -5 }}
    sx={{ mb: 2 }}
  >
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar src={review.userImage} sx={{ mr: 2 }} />
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 1 }}>
              {review.userName}
            </Typography>
            {review.isVerified && (
              <VerifiedUser color="primary" sx={{ fontSize: 16 }} />
            )}
          </Box>
          <Rating value={review.rating} size="small" readOnly />
        </Box>
      </Box>
      
      <Typography variant="body2" color="text.secondary" paragraph>
        {review.comment}
      </Typography>

      {review.images && (
        <Grid container spacing={1} sx={{ mb: 2 }}>
          {review.images.map((image, index) => (
            <Grid item xs={4} key={index}>
              <CardMedia
                component="img"
                height="100"
                image={image}
                alt={`Review image ${index + 1}`}
                sx={{ borderRadius: 1 }}
              />
            </Grid>
          ))}
        </Grid>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small">
            <ThumbUp fontSize="small" />
          </IconButton>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {review.likes}
          </Typography>
        </Box>
        <Typography variant="caption" color="text.secondary">
          {review.date}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const RestaurantReviews = ({ reviews }) => {
  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">
          Customer Reviews
        </Typography>
        <Button
          variant="outlined"
          startIcon={<PhotoCamera />}
          sx={{ borderRadius: 20 }}
        >
          Add Review
        </Button>
      </Box>

      <Box sx={{ mb: 3 }}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Box>
    </Paper>
  );
};

export default RestaurantReviews; 
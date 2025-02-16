import { useState } from 'react';
import { Box, Card, CardContent, Typography, Avatar, Rating, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../../assets/images';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Food Enthusiast',
    rating: 5,
    comment: 'Amazing variety of restaurants and super fast delivery! The food always arrives hot and fresh.',
    image: images.testimonials.user1
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Regular Customer',
    rating: 4.5,
    comment: 'Great selection of cuisines and the app is very user-friendly. Love the real-time tracking feature!',
    image: images.testimonials.user2
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Food Blogger',
    rating: 5,
    comment: 'As a food blogger, I appreciate the quality and authenticity of the restaurants on GreedyBites.',
    image: images.testimonials.user3
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Tech Professional',
    rating: 4.5,
    comment: 'The app is fantastic! Smooth ordering process and great customer service.',
    image: images.testimonials.user4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box sx={{ position: 'relative', py: 4 }}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              maxWidth: 600,
              mx: 'auto',
              bgcolor: 'background.paper',
              boxShadow: 3,
              position: 'relative',
              overflow: 'visible'
            }}
          >
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Avatar
                src={testimonials[currentIndex].image}
                sx={{
                  width: 100,
                  height: 100,
                  mx: 'auto',
                  mb: 2,
                  border: 3,
                  borderColor: 'primary.main'
                }}
              />
              <Typography variant="h6" gutterBottom>
                {testimonials[currentIndex].name}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                {testimonials[currentIndex].role}
              </Typography>
              <Rating 
                value={testimonials[currentIndex].rating} 
                precision={0.5} 
                readOnly 
                sx={{ mb: 2 }}
              />
              <Typography variant="body1" color="text.secondary">
                "{testimonials[currentIndex].comment}"
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 2 }}>
        <IconButton onClick={handlePrev} color="primary">
          <ArrowBack />
        </IconButton>
        <IconButton onClick={handleNext} color="primary">
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonials; 
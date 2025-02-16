import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Dialog,
  Tabs,
  Tab
} from '@mui/material';
import {
  PlayCircle,
  Favorite,
  Share,
  Close
} from '@mui/icons-material';

const ReelCard = ({ reel, onPlay }) => (
  <Card 
    sx={{ 
      cursor: 'pointer',
      transition: 'transform 0.2s',
      '&:hover': { transform: 'scale(1.02)' }
    }}
    onClick={() => onPlay(reel)}
  >
    <CardMedia
      component="img"
      height="280"
      image={reel.thumbnail}
      alt={reel.title}
      sx={{ position: 'relative' }}
    >
      <PlayCircle 
        sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          fontSize: '3rem',
          color: 'white'
        }} 
      />
    </CardMedia>
    <CardContent>
      <Typography variant="subtitle1" gutterBottom>
        {reel.title}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="caption">
          {reel.views} views
        </Typography>
        <Typography variant="caption">
          {reel.likes} likes
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const RestaurantReels = ({ reels }) => {
  const [selectedReel, setSelectedReel] = useState(null);
  const [category, setCategory] = useState('trending');

  return (
    <Box>
      <Tabs 
        value={category} 
        onChange={(e, newValue) => setCategory(newValue)}
        sx={{ mb: 3 }}
      >
        <Tab value="trending" label="Trending" />
        <Tab value="behindTheScenes" label="Behind The Scenes" />
        <Tab value="festivalSpecials" label="Festival Specials" />
        <Tab value="quickRecipes" label="Quick Recipes" />
      </Tabs>

      <Grid container spacing={3}>
        {reels[category]?.map((reel) => (
          <Grid item xs={12} sm={6} md={4} key={reel.id}>
            <ReelCard reel={reel} onPlay={setSelectedReel} />
          </Grid>
        ))}
      </Grid>

      <Dialog
        fullScreen
        open={Boolean(selectedReel)}
        onClose={() => setSelectedReel(null)}
      >
        {/* Video player implementation */}
      </Dialog>
    </Box>
  );
};

export default RestaurantReels; 
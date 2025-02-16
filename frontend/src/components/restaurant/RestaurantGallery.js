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
  DialogContent,
  Tabs,
  Tab,
  ImageList,
  ImageListItem,
  Chip,
  Fade
} from '@mui/material';
import {
  Favorite,
  Share,
  Close,
  Collections,
  Restaurant,
  Event,
  Celebration
} from '@mui/icons-material';

const GalleryImage = ({ image, onOpen }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(parseInt(image.likes));

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <Card 
      sx={{ 
        cursor: 'pointer',
        transition: 'transform 0.2s',
        '&:hover': { 
          transform: 'scale(1.02)',
          '& .overlay': {
            opacity: 1
          }
        }
      }}
      onClick={() => onOpen(image)}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={image.url}
          alt={image.title}
        />
        <Box 
          className="overlay"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0,0,0,0.5)',
            opacity: 0,
            transition: 'opacity 0.2s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            p: 2
          }}
        >
          <Typography variant="subtitle1" align="center">
            {image.title}
          </Typography>
          <Typography variant="body2" align="center">
            {image.description}
          </Typography>
          <Box sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleLike}>
              <Favorite color={isLiked ? 'error' : 'inherit'} />
            </IconButton>
            <Typography variant="caption">{likes} likes</Typography>
            <IconButton>
              <Share />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

const ImageViewer = ({ image, onClose }) => (
  <Dialog
    open={Boolean(image)}
    onClose={onClose}
    maxWidth="lg"
    fullWidth
  >
    <DialogContent sx={{ p: 0, position: 'relative' }}>
      <IconButton
        onClick={onClose}
        sx={{ position: 'absolute', right: 8, top: 8, color: 'white' }}
      >
        <Close />
      </IconButton>
      <Box sx={{ position: 'relative' }}>
        <img
          src={image?.url}
          alt={image?.title}
          style={{ width: '100%', height: 'auto' }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            color: 'white'
          }}
        >
          <Typography variant="h6">{image?.title}</Typography>
          <Typography variant="body2">{image?.description}</Typography>
        </Box>
      </Box>
    </DialogContent>
  </Dialog>
);

const RestaurantGallery = ({ gallery }) => {
  const [category, setCategory] = useState('food');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = {
    food: { icon: <Restaurant />, label: 'Food' },
    ambience: { icon: <Collections />, label: 'Ambience' },
    events: { icon: <Event />, label: 'Events' },
    special: { icon: <Celebration />, label: 'Special Occasions' }
  };

  return (
    <Box>
      <Tabs 
        value={category}
        onChange={(e, newValue) => setCategory(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3 }}
      >
        {Object.entries(categories).map(([key, { icon, label }]) => (
          <Tab
            key={key}
            value={key}
            icon={icon}
            label={label}
            iconPosition="start"
          />
        ))}
      </Tabs>

      <Grid container spacing={2}>
        {gallery[category]?.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Typography variant="h6" gutterBottom>
              {section.category}
            </Typography>
            <Grid container spacing={2}>
              {section.images.map((image, imgIndex) => (
                <Grid item xs={12} sm={6} md={4} key={imgIndex}>
                  <Fade in timeout={300} style={{ transitionDelay: `${imgIndex * 100}ms` }}>
                    <Box>
                      <GalleryImage 
                        image={image}
                        onOpen={setSelectedImage}
                      />
                    </Box>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>

      <ImageViewer 
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </Box>
  );
};

export default RestaurantGallery; 
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { 
  PlayCircle, 
  Favorite, 
  ChatBubble, 
  Share,
  AccountCircle,
  MusicNote,
  Restaurant 
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { images } from '../../assets/images';

const reels = [
  {
    id: 1,
    blogger: "Sarah Foodie",
    thumbnail: images.reels.reel1,
    title: "Amazing Street Food Tour in Delhi",
    duration: "2:45"
  },
  {
    id: 2,
    blogger: "Chef Mike",
    thumbnail: images.reels.reel2,
    title: "Making Perfect Butter Chicken",
    duration: "3:15"
  },
  {
    id: 3,
    blogger: "Foodie Sisters",
    thumbnail: images.reels.reel3,
    title: "Best Pizza Places in Mumbai",
    duration: "2:30"
  },
  {
    id: 4,
    blogger: "Spice Master Raj",
    thumbnail: images.reels.reel4,
    title: "Traditional Biryani Secrets",
    duration: "4:00"
  },
  {
    id: 5,
    blogger: "Healthy Bites by Priya",
    thumbnail: images.reels.reel5,
    title: "Healthy Indian Breakfast Ideas",
    duration: "3:45"
  },
  {
    id: 6,
    blogger: "Sarah Foodie",
    thumbnail: images.reels.reel6,
    title: "Top 5 Sushi Restaurants",
    duration: "3:20"
  },
  {
    id: 7,
    blogger: "Chef Mike",
    thumbnail: images.reels.reel7,
    title: "Secret Restaurant Kitchen Tour",
    duration: "4:15"
  },
  {
    id: 8,
    blogger: "Foodie Sisters",
    thumbnail: images.reels.reel8,
    title: "Best Dessert Places in Bangalore",
    duration: "2:55"
  },
  {
    id: 9,
    blogger: "Spice Master Raj",
    thumbnail: images.reels.reel9,
    title: "Street Food Heaven in Jaipur",
    duration: "3:50"
  }
];

const ReelsSection = () => {
  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
      minHeight: '100vh',
      py: 4,
      position: 'relative'
    }}>
      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(45deg, #FF416C 0%, #FF4B2B 100%)',
          opacity: 0.1,
          clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0% 100%)'
        }}
      />

      {/* Header Section */}
      <Box sx={{ 
        textAlign: 'center', 
        position: 'relative',
        mb: 6,
        pt: 2
      }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          mb: 2
        }}>
          <Restaurant 
            sx={{ 
              fontSize: '2.5rem',
              color: '#FF416C'
            }} 
          />
          <Typography 
            variant="h3" 
            component="h1"
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #FF416C 0%, #FF4B2B 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Food Reels
          </Typography>
        </Box>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#999',
            fontWeight: 300,
            maxWidth: '600px',
            mx: 'auto',
            px: 2
          }}
        >
          Discover Mouthwatering Food Stories
        </Typography>
      </Box>

      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          maxWidth: '400px', // Mobile-first width
          mx: 'auto',
          px: 2
        }}
      >
        {reels.map((reel) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%' }}
          >
            <Box 
              sx={{ 
                position: 'relative',
                width: '100%',
                height: '80vh',
                bgcolor: '#000',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            >
              <Box
                component="img"
                src={reel.thumbnail}
                alt={reel.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              
              {/* Reel Info Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  p: 2,
                  color: 'white'
                }}
              >
                {/* User Info */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <AccountCircle sx={{ mr: 1 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {reel.blogger}
                  </Typography>
                </Box>

                {/* Title */}
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {reel.title}
                </Typography>

                {/* Music Info */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <MusicNote sx={{ fontSize: '1rem', mr: 1 }} />
                  <Typography variant="caption">
                    Original Audio • {reel.duration}
                  </Typography>
                </Box>
              </Box>

              {/* Interaction Buttons */}
              <Box
                sx={{
                  position: 'absolute',
                  right: 16,
                  bottom: 100,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  alignItems: 'center'
                }}
              >
                <IconButton sx={{ color: 'white' }}>
                  <Favorite />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <ChatBubble />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                  <Share />
                </IconButton>
              </Box>

              {/* Play Button */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                  '&:hover': {
                    opacity: 1
                  }
                }}
              >
                <PlayCircle 
                  sx={{ 
                    fontSize: '64px',
                    color: 'white',
                    cursor: 'pointer'
                  }} 
                />
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default ReelsSection; 
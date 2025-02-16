import { useState, useRef } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Avatar,
  IconButton,
  Typography,
  Box,
  Tooltip
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  Comment,
  Share,
  Restaurant,
  PlayArrow,
  Pause
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const ReelPost = ({ reel }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        sx={{ 
          maxWidth: 345,
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            transition: 'transform 0.3s ease'
          }
        }}
      >
        <CardHeader
          avatar={
            <Avatar src={reel.blogger.avatar} />
          }
          title={reel.blogger.name}
          subheader={reel.restaurant.name}
        />
        
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="video"
            ref={videoRef}
            height="400"
            src={reel.videoUrl}
            onClick={handleVideoClick}
            sx={{ cursor: 'pointer' }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: isPlaying ? 0 : 0.8,
              transition: 'opacity 0.3s ease'
            }}
          >
            {!isPlaying && (
              <IconButton>
                <PlayArrow sx={{ fontSize: 48, color: 'white' }} />
              </IconButton>
            )}
          </Box>
        </Box>

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {reel.caption}
          </Typography>
          <Box sx={{ mt: 1 }}>
            {reel.tags.map((tag, index) => (
              <Typography
                key={index}
                component="span"
                variant="body2"
                color="primary"
                sx={{ mr: 1 }}
              >
                #{tag}
              </Typography>
            ))}
          </Box>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton onClick={handleLike}>
            {isLiked ? (
              <Favorite sx={{ color: 'error.main' }} />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
            {reel.likes}
          </Typography>
          
          <IconButton>
            <Comment />
          </IconButton>
          <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
            {reel.comments}
          </Typography>

          <IconButton>
            <Share />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Tooltip title="Visit Restaurant">
            <IconButton 
              color="primary"
              onClick={() => window.location.href = `/restaurant/${reel.restaurant.id}`}
            >
              <Restaurant />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ReelPost; 
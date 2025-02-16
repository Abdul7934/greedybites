import { Box, Container, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../../assets/images';

const features = [
  {
    emoji: "🚀",
    text: "Fast Delivery",
    color: "#4CAF50"
  },
  {
    emoji: "💰",
    text: "Best Offers",
    color: "#FFC107"
  },
  {
    emoji: "⭐",
    text: "Top Rated",
    color: "#FF5722"
  },
  {
    emoji: "🎁",
    text: "Daily Deals",
    color: "#2196F3"
  }
];

const RestaurantBanner = ({ onSearch }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.banners.offer})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          minHeight: { xs: '400px', md: '500px' },
          display: 'flex',
          alignItems: 'center',
          clipPath: 'ellipse(100% 100% at 50% 0%)',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -50,
            left: 0,
            width: '100%',
            height: '100px',
            background: 'white',
            borderRadius: '50%',
            transform: 'scaleX(1.5)'
          }
        }}
      >
        {/* Animated Spotlight Effect */}
        <Box
          component={motion.div}
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 60%)',
              'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 60%)'
            ],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              <motion.div
                variants={itemVariants}
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    color: 'white',
                    textAlign: 'center',
                    mb: 2,
                    fontWeight: 'bold',
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
                    '& span': {
                      WebkitTextFillColor: 'initial'
                    }
                  }}
                >
                  Discover Amazing Deals
                  <motion.span
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ display: 'inline-block', marginLeft: '10px' }}
                  >
                    🎉
                  </motion.span>
                </Typography>
              </motion.div>

              {/* Features Section */}
              <Box 
                sx={{ 
                  mt: 3,
                  mb: 5,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: { xs: 2, md: 4 },
                  flexWrap: 'wrap'
                }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        padding: '8px 16px',
                        borderRadius: '50px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                        }
                      }}
                    >
                      <motion.span
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                        style={{ 
                          fontSize: '1.5rem',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                        }}
                      >
                        {feature.emoji}
                      </motion.span>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'white',
                          fontWeight: 500,
                          textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                        }}
                      >
                        {feature.text}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              {/* Floating Elements */}
              <Box sx={{ position: 'absolute', width: '100%', pointerEvents: 'none' }}>
                {['💫', '🎁', '🏷️', '⭐', '🔥'].map((emoji, index) => (
                  <motion.div
                    key={index}
                    style={{
                      position: 'absolute',
                      left: `${index * 25}%`,
                      top: `${Math.random() * 100}%`
                    }}
                    animate={{
                      y: [0, -50, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </Box>

              {/* Search Bar with Enhanced Animation */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <TextField
                  fullWidth
                  placeholder="Search for amazing deals..."
                  onChange={(e) => onSearch(e.target.value)}
                  sx={{
                    maxWidth: '600px',
                    mx: 'auto',
                    display: 'block',
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      borderRadius: '50px',
                      height: '56px',
                      backdropFilter: 'blur(5px)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,1)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                          borderWidth: '2px'
                        }
                      }
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <SearchIcon color="primary" sx={{ fontSize: '1.5rem' }} />
                        </motion.div>
                      </InputAdornment>
                    )
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Container>
      </Box>

      {/* Bottom curve SVG */}
      <Box
        component="svg"
        viewBox="0 0 1440 120"
        sx={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          width: '100%',
          height: '120px',
          display: 'block',
          zIndex: 1,
          backgroundColor: 'transparent'
        }}
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
        />
      </Box>

      {/* Side curves SVG */}
      <Box
        component="svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100px',
          zIndex: 1
        }}
      >
        <path
          d="M0,0 C30,50 30,50 0,100"
          fill="white"
          fillOpacity="0.1"
        />
      </Box>
      <Box
        component="svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: '100px',
          zIndex: 1,
          transform: 'scaleX(-1)'
        }}
      >
        <path
          d="M0,0 C30,50 30,50 0,100"
          fill="white"
          fillOpacity="0.1"
        />
      </Box>
    </Box>
  );
};

export default RestaurantBanner; 
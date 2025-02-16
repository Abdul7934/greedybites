import { motion } from 'framer-motion';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { RestaurantMenu, LocalOffer, Delivery } from '@mui/icons-material';
import './Banner.css';

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const features = [
    { 
      icon: <LocalOffer />, 
      text: 'Best Offers', 
      color: '#FFC107'
    },
    { 
      icon: <Delivery />, 
      text: 'Fast Delivery', 
      color: '#FF9800'
    },
    { 
      icon: '⭐', 
      text: 'Top Rated', 
      color: '#FF6B6B'
    }
  ];

  const foodEmojis = [
    '🍕', '🍔', '🍟', '🌭', '🍿', 
    '🥪', '🌮', '🌯', '🥙', '🧆',
    '🥘', '🍲', '🥗', '🍜', '🍝',
    '🍣', '🍱', '🍚', '🍛', '🍤',
    '🍗', '🍖', '🥩', '🥓', '🧀'
  ];

  const generateFoodElements = () => {
    return foodEmojis.map((emoji, index) => {
      const startX = Math.random() * 100;
      const endX = startX + (Math.random() * 40 - 20);
      
      return (
        <motion.div
          key={index}
          className="floating-food"
          style={{
            '--startX': `${startX}vw`,
            '--endX': `${endX}vw`,
            left: `${startX}%`,
            animationDelay: `${Math.random() * 15}s`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {emoji}
        </motion.div>
      );
    });
  };

  const SpecialOfferBadge = () => (
    <motion.div 
      className="special-offer-badge"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1 
      }}
    >
      <motion.div 
        className="badge-content"
        animate={{ 
          rotate: [0, -5, 5, -5, 0],
          scale: [1, 1.1, 1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <span className="offer-text">20% OFF</span>
        <span className="offer-subtext">First Order</span>
        <motion.div 
          className="sparkles"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        />
      </motion.div>
    </motion.div>
  );

  return (
    <Box className="home-banner">
      <div className="floating-foods">
        {generateFoodElements()}
      </div>

      <motion.div
        className="glow-overlay"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="banner-overlay">
        <Container maxWidth="lg">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="banner-content"
          >
            <Box className="banner-grid">
              {/* Left Content */}
              <Box className="banner-text">
                <SpecialOfferBadge />
                <motion.div variants={itemVariants}>
                  <Typography 
                    variant="h1" 
                    className="banner-title"
                  >
                    Delicious Food
                    <motion.span
                      className="highlight"
                      animate={{
                        color: ['#FFC107', '#FF9800', '#FFC107'],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Delivered Fast
                    </motion.span>
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography 
                    variant="h5" 
                    className="banner-subtitle"
                  >
                    Experience the best restaurants in your area with our fast delivery service
                  </Typography>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="banner-cta"
                >
                  <Button
                    component={Link}
                    to="/restaurants"
                    variant="contained"
                    size="large"
                    className="order-button"
                    startIcon={<RestaurantMenu />}
                  >
                    Order Now
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    className="menu-button"
                  >
                    View Menu
                  </Button>
                </motion.div>

                {/* Features */}
                <Box className="features-grid">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      variants={itemVariants}
                      className="feature-item"
                      style={{
                        backgroundColor: `${feature.color}22`,
                        borderColor: feature.color
                      }}
                      whileHover={{ 
                        y: -5,
                        boxShadow: `0 10px 20px ${feature.color}33`
                      }}
                    >
                      <motion.span
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      >
                        {feature.icon}
                      </motion.span>
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </Box>
              </Box>

              {/* Right Content - Hero Image */}
              <motion.div 
                className="banner-image"
                variants={itemVariants}
              >
                <motion.img
                  src="/images/hero-food.png"
                  alt="Delicious Food"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating Elements */}
                <motion.div
                  className="floating-element element-1"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="floating-element element-2"
                  animate={{
                    rotate: -360,
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </div>
    </Box>
  );
};

export default Banner; 
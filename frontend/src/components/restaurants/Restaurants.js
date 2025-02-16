import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

// Add these styled components
const RestaurantsContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4),

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url('/images/pattern-bg.png') repeat`,
    opacity: 0.1,
    animation: 'backgroundScroll 30s linear infinite',
  }
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: -100,
    width: 50,
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    transform: 'skewX(-15deg)',
    animation: 'shine 6s infinite',
  }
}));

const SearchTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(5px)',
    borderRadius: theme.spacing(1),
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  }
}));

// Add background effects components
const FloatingParticles = () => (
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          width: Math.random() * 4 + 1,
          height: Math.random() * 4 + 1,
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </Box>
);

// Update the return statement
return (
  <RestaurantsContainer>
    <FloatingParticles />
    <Container maxWidth="xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                textShadow: '0 2px 10px rgba(255, 65, 108, 0.2)',
              }}
            >
              Discover Restaurants
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              Explore the best restaurants in your area
            </Typography>
          </motion.div>
        </Box>

        <GlassCard sx={{ mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <SearchTextField
                fullWidth
                label="Search restaurants..."
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {/* Add your filter chips here */}
              </Box>
            </Grid>
          </Grid>
        </GlassCard>

        <Grid container spacing={3}>
          {loading ? (
            [...Array(8)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard>
                    <Skeleton variant="rectangular" height={200} sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
                    <Box sx={{ pt: 2 }}>
                      <Skeleton width="60%" sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
                      <Skeleton width="40%" sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }} />
                    </Box>
                  </GlassCard>
                </motion.div>
              </Grid>
            ))
          ) : (
            <AnimatePresence>
              {filteredRestaurants.map((restaurant, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={restaurant.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <GlassCard
                      onClick={() => handleRestaurantClick(restaurant)}
                      sx={{ cursor: 'pointer' }}
                    >
                      <Box
                        component="img"
                        src={restaurant.image}
                        alt={restaurant.name}
                        sx={{
                          width: '100%',
                          height: 200,
                          objectFit: 'cover',
                          borderRadius: 1,
                          mb: 2
                        }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'white',
                          fontWeight: 'bold',
                          mb: 1
                        }}
                      >
                        {restaurant.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <LocationOn sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: 18 }} />
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          {restaurant.location}
                        </Typography>
                      </Box>
                      {/* Add other restaurant details */}
                    </GlassCard>
                  </motion.div>
                </Grid>
              ))}
            </AnimatePresence>
          )}
        </Grid>
      </motion.div>
    </Container>
  </RestaurantsContainer>
); 
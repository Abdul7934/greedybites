import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { images } from '../../assets/images';
import ParallaxWrapper from '../utils/ParallaxWrapper';
import ScrollAnimation from '../utils/ScrollAnimation';
import FloatingElement from '../utils/FloatingElement';
import GradientBackground from '../utils/GradientBackground';

const features = [
  {
    title: 'Fast Delivery',
    description: 'Get your food delivered within 30 minutes',
    image: images.features.fastDelivery,
    color: '#FF4B4B'
  },
  {
    title: 'Live Tracking',
    description: 'Track your order in real-time',
    image: images.banners.delivery,
    color: '#4CAF50'
  },
  {
    title: 'Secure Payment',
    description: 'Multiple secure payment options',
    image: images.features.securePayment,
    color: '#2196F3'
  },
  {
    title: 'Quality Food',
    description: 'High-quality food from top restaurants',
    image: images.banners.quality,
    color: '#FF9800'
  },
  {
    title: '24/7 Support',
    description: 'Round the clock customer support',
    image: images.features.customerSupport,
    color: '#9C27B0'
  }
];

const Features = () => {
  return (
    <Box sx={{ position: 'relative', py: 8 }}>
      <GradientBackground />
      
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ParallaxWrapper offset={20}>
              <ScrollAnimation animation={
                index % 3 === 0 ? "slideLeft" : 
                index % 3 === 1 ? "scale" : "slideRight"
              }>
                <FloatingElement delay={index * 0.2} duration={4}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                      bgcolor: 'background.paper',
                      boxShadow: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: 6,
                        transform: 'translateY(-5px)',
                        transition: 'all 0.3s ease'
                      },
                      '&:hover .feature-icon': {
                        transform: 'scale(1.1) rotate(10deg)',
                      },
                      '&:hover .feature-glow': {
                        opacity: 1,
                      }
                    }}
                  >
                    {/* Glow effect */}
                    <Box
                      className="feature-glow"
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '120%',
                        height: '120%',
                        background: `radial-gradient(circle, ${feature.color}20 0%, transparent 70%)`,
                        transform: 'translate(-50%, -50%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: 'none',
                      }}
                    />

                    <Box
                      className="feature-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        mb: 2,
                        transition: 'transform 0.3s ease',
                        position: 'relative',
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={feature.image}
                        alt={feature.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      
                      {/* Icon shine effect */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)',
                          transform: 'translateX(-100%)',
                          animation: 'shine 3s infinite',
                        }}
                      />
                    </Box>

                    <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Typography variant="h6" gutterBottom>
                          {feature.title}
                        </Typography>
                      </motion.div>
                      <Typography variant="body2" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </FloatingElement>
              </ScrollAnimation>
            </ParallaxWrapper>
          </Grid>
        ))}
      </Grid>

      {/* Add shine animation keyframes */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          20% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default Features; 
import { motion } from 'framer-motion';
import { Box, Container, Typography, Card, Button, Badge } from '@mui/material';
import { LocalOffer as OfferIcon, Timer as TimerIcon } from '@mui/icons-material';
import './SpecialOffers.css';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "50% OFF",
      description: "On your first order",
      code: "FIRST50",
      expiresIn: "2 days",
      image: "https://source.unsplash.com/random/400x300/?gourmet-food",
      color: "#FF4B2B",
      isPopular: false
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "Orders above ₹499",
      code: "FREEDEL",
      expiresIn: "Today",
      image: "https://source.unsplash.com/random/400x300/?food-delivery",
      color: "#38A169",
      isPopular: false
    },
    {
      id: 3,
      title: "20% CASHBACK",
      description: "Special Weekend Offer!",
      subText: "Limited Time Only",
      code: "WEEKEND20",
      expiresIn: "48 hours",
      image: "https://source.unsplash.com/random/400x300/?restaurant-food",
      color: "#805AD5",
      isPopular: true,
      ribbon: "TRENDING"
    }
  ];

  return (
    <Box className="special-offers-section">
      <div className="sparkles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="sparkle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }} />
        ))}
      </div>

      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box className="offers-header">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <OfferIcon className="offers-icon" />
            </motion.div>
            <Typography variant="h3" className="offers-title">
              Special Offers
            </Typography>
            <Typography variant="h6" className="offers-subtitle">
              Grab these deals before they're gone!
            </Typography>
          </Box>

          <Box className="offers-container">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={offer.isPopular ? 'popular-offer' : ''}
              >
                <Card className={`offer-card ${offer.isPopular ? 'popular' : ''}`} 
                      style={{ borderColor: offer.color }}>
                  {offer.isPopular && (
                    <div className="ribbon-wrapper">
                      <div className="ribbon" style={{ backgroundColor: offer.color }}>
                        {offer.ribbon}
                      </div>
                    </div>
                  )}
                  
                  <Box className="offer-image-container">
                    <img src={offer.image} alt={offer.title} className="offer-image" />
                    <Box className="offer-overlay" 
                         style={{ background: `linear-gradient(135deg, ${offer.color}CC, ${offer.color}99)` }}>
                      <motion.div
                        animate={offer.isPopular ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Typography variant="h2" className="offer-percentage">
                          {offer.title}
                          {offer.subText && (
                            <Typography variant="subtitle1" className="offer-subtext">
                              {offer.subText}
                            </Typography>
                          )}
                        </Typography>
                      </motion.div>
                    </Box>
                  </Box>

                  <Box className="offer-content">
                    <Typography variant="h5" className="offer-description">
                      {offer.description}
                    </Typography>
                    
                    <Box className="offer-code-container">
                      <Badge 
                        badgeContent="COPY" 
                        color="primary"
                        className="copy-badge"
                        onClick={() => {
                          navigator.clipboard.writeText(offer.code);
                          // You could add a toast notification here
                        }}
                      >
                        <Typography className="offer-code" style={{ borderColor: offer.color }}>
                          {offer.code}
                        </Typography>
                      </Badge>
                    </Box>

                    <Box className="offer-expiry">
                      <TimerIcon fontSize="small" />
                      <Typography variant="body2">
                        Expires in {offer.expiresIn}
                      </Typography>
                    </Box>

                    <Button 
                      variant="contained" 
                      fullWidth
                      className={`claim-button ${offer.isPopular ? 'popular-button' : ''}`}
                      style={{ 
                        background: `linear-gradient(45deg, ${offer.color}, ${offer.color}DD)`,
                      }}
                    >
                      Claim Offer
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SpecialOffers; 
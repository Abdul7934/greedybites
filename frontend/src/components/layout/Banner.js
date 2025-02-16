import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { images } from '../../assets/images';
import FloatingElement from '../utils/FloatingElement';

const Banner = () => {
  return (
    <div 
      className="banner-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images.banners.hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-4 fw-bold mb-4">
                Discover the Best Food & Drinks
              </h1>
              <p className="lead mb-4">
                Explore top-rated restaurants, exclusive deals, and a world of flavors at your fingertips
              </p>
              <Button 
                variant="contained" 
                size="large"
                sx={{
                  bgcolor: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                  borderRadius: 2,
                  px: 4,
                  py: 1.5
                }}
              >
                Order Now
              </Button>
            </motion.div>
          </Col>
          <Col lg={6} className="position-relative" data-aos="fade-left">
            <FloatingElement>
              <motion.img
                src={images.dishes.pizza}
                alt="Featured Dish"
                className="img-fluid rounded-circle shadow-lg"
                style={{ maxWidth: '80%' }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </FloatingElement>
            <div 
              className="position-absolute"
              style={{
                bottom: '10%',
                right: '10%',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h4 className="text-dark mb-2">Special Offer</h4>
              <p className="text-primary mb-0">Get 20% off on your first order!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner; 
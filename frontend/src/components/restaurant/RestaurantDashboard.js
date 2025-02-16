import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Badge
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Restaurant as RestaurantIcon,
  TableBar as TableIcon,
  Reviews as ReviewsIcon,
  Notifications as NotificationIcon,
  Payment as PaymentIcon,
  RateReview as BloggerIcon,
  ViewInAr
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';

// Import dashboard sections
import BookingSection from './sections/BookingSection';
import TableSection from './sections/TableSection';
import BloggerSection from './sections/BloggerSection';
import PaymentSection from './sections/PaymentSection';
import OverviewSection from './sections/OverviewSection';
import Restaurant3DView from './Restaurant3DView';

// Add these styled components
const DashboardContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  padding: theme.spacing(4),
  color: 'white',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,65,108,0.1) 0%, rgba(255,75,43,0.1) 100%)',
    animation: 'pulse 15s ease infinite',
  }
}));

const GlassCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  '&.Mui-selected': {
    color: 'white',
  },
  '&:hover': {
    color: 'white',
    background: 'rgba(255, 255, 255, 0.1)',
  },
  transition: 'all 0.3s ease',
  borderRadius: theme.spacing(1),
  minHeight: 60,
}));

const RestaurantDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const restaurantType = localStorage.getItem('restaurantType');
  const navigate = useNavigate();
  const restaurantData = JSON.parse(localStorage.getItem('restaurantData'));

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  useEffect(() => {
    // Check if restaurant data exists
    const restaurantData = localStorage.getItem('restaurantData');
    if (!restaurantData) {
      navigate('/restaurant/login');
    }
  }, [navigate]);

  return (
    <DashboardContainer>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
              Restaurant Dashboard
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Welcome back, {restaurantData?.name || restaurantType || 'Restaurant'}
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {/* Quick Stats */}
            <Grid item xs={12}>
              <Grid container spacing={3}>
                {[
                  { icon: <TableIcon />, label: 'Total Tables', value: '24' },
                  { icon: <ReviewsIcon />, label: 'Today\'s Bookings', value: '12' },
                  { icon: <PaymentIcon />, label: 'Revenue', value: '₹45,000' },
                  { icon: <ReviewsIcon />, label: 'Rating', value: '4.5' }
                ].map((stat, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <GlassCard>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            sx={{
                              background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                              borderRadius: '12px',
                              p: 1,
                              display: 'flex',
                            }}
                          >
                            {stat.icon}
                          </Box>
                          <Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                              {stat.value}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                              {stat.label}
                            </Typography>
                          </Box>
                        </Box>
                      </GlassCard>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Navigation Tabs */}
            <Grid item xs={12}>
              <GlassCard>
                <Tabs 
                  value={activeTab}
                  onChange={handleTabChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  sx={{
                    '& .MuiTabs-indicator': {
                      background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                    }
                  }}
                >
                  {[
                    { icon: <DashboardIcon />, label: 'Overview' },
                    { icon: <TableIcon />, label: 'Bookings' },
                    { icon: <RestaurantIcon />, label: 'Tables' },
                    { icon: <BloggerIcon />, label: 'Bloggers' },
                    { icon: <PaymentIcon />, label: 'Payments' },
                    { icon: <ViewInAr />, label: '3D View' }
                  ].map((tab, index) => (
                    <StyledTab
                      key={index}
                      icon={tab.icon}
                      label={tab.label}
                      iconPosition="start"
                    />
                  ))}
                </Tabs>
              </GlassCard>
            </Grid>

            {/* Content Area */}
            <Grid item xs={12}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard>
                    {activeTab === 5 ? (
                      <Restaurant3DView />
                    ) : (
                      <>
                        {activeTab === 0 && <OverviewSection />}
                        {activeTab === 1 && <BookingSection />}
                        {activeTab === 2 && <TableSection />}
                        {activeTab === 3 && <BloggerSection />}
                        {activeTab === 4 && <PaymentSection />}
                      </>
                    )}
                  </GlassCard>
                </motion.div>
              </AnimatePresence>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </DashboardContainer>
  );
};

export default RestaurantDashboard; 
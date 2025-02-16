import { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Avatar,
  Grid,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  IconButton,
  Tab,
  Tabs,
  Badge,
  Card,
  CardContent,
  LinearProgress
} from '@mui/material';
import {
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Edit as EditIcon,
  RestaurantMenu as OrderIcon,
  Bookmark as BookmarkIcon,
  Settings as SettingsIcon,
  ExitToApp as LogoutIcon,
  Star as StarIcon,
  LocalOffer as OfferIcon,
  Favorite as FavoriteIcon,
  History as HistoryIcon
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const UserProfile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Mock data
  const userStats = {
    ordersCompleted: 45,
    totalSpent: "₹12,450",
    favoriteRestaurants: 8,
    reviewsGiven: 12,
    memberSince: "January 2024",
    rewardPoints: 2500,
    level: "Food Explorer",
    progress: 75
  };

  const recentOrders = [
    { id: 1, restaurant: "Spice Garden", date: "2024-01-20", status: "Delivered", amount: "₹850" },
    { id: 2, restaurant: "Pizza Paradise", date: "2024-01-15", status: "Delivered", amount: "₹650" }
  ];

  const savedRestaurants = [
    { id: 1, name: "Taj Palace", cuisine: "Indian", rating: 4.5 },
    { id: 2, name: "Sushi Hub", cuisine: "Japanese", rating: 4.3 }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {loading ? (
        <LinearProgress />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Grid container spacing={4}>
            {/* Left Sidebar - Profile Info */}
            <Grid item xs={12} md={4}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Paper 
                  elevation={3} 
                  sx={{ 
                    p: 3,
                    background: 'linear-gradient(135deg, #fff 0%, #f5f5f5 100%)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Decorative Element */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      width: '150px',
                      height: '150px',
                      background: 'linear-gradient(45deg, #FF416C 0%, #FF4B2B 100%)',
                      opacity: 0.1,
                      borderRadius: '0 0 0 100%'
                    }}
                  />

                  <Box sx={{ textAlign: 'center', position: 'relative' }}>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      badgeContent={
                        <IconButton 
                          size="small"
                          sx={{ 
                            bgcolor: 'primary.main',
                            color: 'white',
                            '&:hover': { bgcolor: 'primary.dark' }
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      }
                    >
                      <Avatar
                        src={user?.photoURL}
                        sx={{
                          width: 120,
                          height: 120,
                          mx: 'auto',
                          border: '4px solid',
                          borderColor: 'primary.main',
                          boxShadow: '0 0 20px rgba(0,0,0,0.1)'
                        }}
                      >
                        {user?.name?.charAt(0) || 'U'}
                      </Avatar>
                    </Badge>

                    <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
                      {user?.name || 'User Name'}
                    </Typography>

                    <Chip 
                      label={userStats.level}
                      color="primary"
                      sx={{ mt: 1 }}
                    />

                    <Box sx={{ mt: 2 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={userStats.progress} 
                        sx={{ 
                          height: 8, 
                          borderRadius: 4,
                          bgcolor: 'rgba(0,0,0,0.1)',
                          '& .MuiLinearProgress-bar': {
                            background: 'linear-gradient(45deg, #FF416C 0%, #FF4B2B 100%)'
                          }
                        }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        {userStats.progress}% to next level
                      </Typography>
                    </Box>
                  </Box>

                  <List sx={{ mt: 3 }}>
                    <ListItem>
                      <ListItemIcon>
                        <EmailIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Email"
                        secondary={user?.email || 'email@example.com'}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Phone"
                        secondary={user?.phone || '+91 XXXXXXXXXX'}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocationIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Location"
                        secondary="Mumbai, India"
                      />
                    </ListItem>
                  </List>

                  <Button
                    fullWidth
                    variant="contained"
                    color="error"
                    startIcon={<LogoutIcon />}
                    onClick={() => signOut()}
                    sx={{ mt: 2 }}
                  >
                    Logout
                  </Button>
                </Paper>
              </motion.div>
            </Grid>

            {/* Right Section - Stats and Activities */}
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 3 }}>
                {/* Stats Cards */}
                <Grid container spacing={2} sx={{ mb: 4 }}>
                  {[
                    { icon: <OrderIcon />, label: 'Orders', value: userStats.ordersCompleted },
                    { icon: <FavoriteIcon />, label: 'Favorites', value: userStats.favoriteRestaurants },
                    { icon: <StarIcon />, label: 'Reviews', value: userStats.reviewsGiven },
                    { icon: <OfferIcon />, label: 'Points', value: userStats.rewardPoints }
                  ].map((stat, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card 
                          sx={{ 
                            textAlign: 'center',
                            height: '100%',
                            background: 'linear-gradient(135deg, #fff 0%, #f5f5f5 100%)'
                          }}
                        >
                          <CardContent>
                            <IconButton
                              sx={{
                                bgcolor: 'primary.light',
                                color: 'primary.main',
                                mb: 1
                              }}
                            >
                              {stat.icon}
                            </IconButton>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                              {stat.value}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {stat.label}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>

                <Tabs 
                  value={activeTab} 
                  onChange={handleTabChange}
                  sx={{ 
                    borderBottom: 1, 
                    borderColor: 'divider',
                    mb: 3
                  }}
                >
                  <Tab label="Recent Orders" icon={<HistoryIcon />} iconPosition="start" />
                  <Tab label="Saved Places" icon={<BookmarkIcon />} iconPosition="start" />
                  <Tab label="Settings" icon={<SettingsIcon />} iconPosition="start" />
                </Tabs>

                {/* Tab Panels */}
                {activeTab === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <List>
                      {recentOrders.map((order) => (
                        <motion.div
                          key={order.id}
                          whileHover={{ x: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ListItem 
                            sx={{ 
                              bgcolor: 'background.paper',
                              mb: 1,
                              borderRadius: 2,
                              boxShadow: 1
                            }}
                          >
                            <ListItemIcon>
                              <OrderIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                              primary={order.restaurant}
                              secondary={`Date: ${order.date} • Amount: ${order.amount}`}
                            />
                            <Chip 
                              label={order.status}
                              color="success"
                              size="small"
                            />
                          </ListItem>
                        </motion.div>
                      ))}
                    </List>
                  </motion.div>
                )}

                {activeTab === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Grid container spacing={2}>
                      {savedRestaurants.map((restaurant) => (
                        <Grid item xs={12} sm={6} key={restaurant.id}>
                          <motion.div
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Card>
                              <CardContent>
                                <Typography variant="h6">
                                  {restaurant.name}
                                </Typography>
                                <Typography color="text.secondary">
                                  {restaurant.cuisine}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                  <StarIcon sx={{ color: 'gold', mr: 1 }} />
                                  <Typography>{restaurant.rating}</Typography>
                                </Box>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </motion.div>
                )}

                {activeTab === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Account Settings
                    </Typography>
                    {/* Add settings options here */}
                  </motion.div>
                )}
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      )}
    </Container>
  );
};

export default UserProfile; 
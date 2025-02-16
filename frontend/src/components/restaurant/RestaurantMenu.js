import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Tabs,
  Tab,
  Paper,
  Divider,
  Badge,
  Zoom
} from '@mui/material';
import {
  LocalDining,
  Restaurant,
  Whatshot,
  Favorite,
  LocalOffer,
  Star,
  EmojiFoodBeverage,
  BakeryDining,
  Cake,
  LocalBar,
  LocalFireDepartment
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MenuItem = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card sx={{ 
      display: 'flex', 
      height: '100%',
      '&:hover': {
        boxShadow: 6,
        transform: 'translateY(-4px)',
        transition: 'all 0.3s ease'
      }
    }}>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box>
              <Typography variant="h6" gutterBottom>
                {item.name}
                {item.recommended && (
                  <Star sx={{ ml: 1, color: 'warning.main', fontSize: 20 }} />
                )}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {item.description}
              </Typography>
            </Box>
            <Typography variant="h6" color="primary">
              {item.price}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip
              size="small"
              label={item.isVeg ? 'Veg' : 'Non-Veg'}
              color={item.isVeg ? 'success' : 'error'}
            />
            {item.spiceLevel && (
              <Chip
                size="small"
                icon={<Whatshot />}
                label={item.spiceLevel}
                color={
                  item.spiceLevel === 'Hot' ? 'error' :
                  item.spiceLevel === 'Medium' ? 'warning' : 'default'
                }
              />
            )}
            {item.recommended && (
              <Chip
                size="small"
                icon={<Star />}
                label="Chef's Special"
                color="warning"
              />
            )}
          </Box>
        </CardContent>
      </Box>
      {item.image && (
        <CardMedia
          component="img"
          sx={{ width: 140 }}
          image={item.image}
          alt={item.name}
        />
      )}
    </Card>
  </motion.div>
);

const MenuSection = ({ title, items, icon: Icon }) => (
  <Box sx={{ mb: 4 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      {Icon && <Icon sx={{ mr: 1, color: 'primary.main' }} />}
      <Typography variant="h6" component="h3">
        {title}
      </Typography>
    </Box>
    <Grid container spacing={3}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Zoom in style={{ transitionDelay: `${index * 100}ms` }}>
            <Card
              component={motion.div}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              }}
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.name}
              />
              {item.isSpecial && (
                <Chip
                  icon={<LocalFireDepartment />}
                  label="Chef's Special"
                  color="error"
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                  }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h4">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    ₹{item.price}
                  </Typography>
                  {item.isVeg && (
                    <Chip
                      size="small"
                      icon={<Restaurant />}
                      label="Veg"
                      color="success"
                    />
                  )}
                </Box>
              </CardContent>
            </Card>
          </Zoom>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const RestaurantMenu = ({ menu }) => {
  const [activeTab, setActiveTab] = useState(0);

  const menuSections = [
    { title: 'Starters', items: menu.starters, icon: LocalOffer },
    { title: 'Main Course', items: menu.mainCourse, icon: Restaurant },
    { title: 'Desserts', items: menu.desserts, icon: Favorite },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Our Menu
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {menuSections.map((section, index) => (
            <Tab
              key={index}
              label={section.title}
              icon={<section.icon />}
              iconPosition="start"
            />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ mt: 3 }}>
        {menuSections.map((section, index) => (
          <Box
            key={index}
            role="tabpanel"
            hidden={activeTab !== index}
          >
            {activeTab === index && (
              <MenuSection
                title={section.title}
                items={section.items}
                icon={section.icon}
              />
            )}
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default RestaurantMenu; 
import { useState } from 'react';
import {
  Container,
  Box,
  Tabs,
  Tab,
  Typography,
  Paper
} from '@mui/material';
import BloggerSection from '../restaurant/BloggerSection';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const RestaurantDetail = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ mb: 4 }}>
        {/* Restaurant header info */}
      </Paper>

      <Paper>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Overview" />
          <Tab label="Menu" />
          <Tab label="Reviews" />
          <Tab label="Bloggers" />
          <Tab label="Gallery" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          {/* Overview content */}
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          {/* Menu content */}
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          {/* Reviews content */}
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <BloggerSection />
        </TabPanel>

        <TabPanel value={tabValue} index={4}>
          {/* Gallery content */}
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default RestaurantDetail; 
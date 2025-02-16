import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Avatar,
  Typography,
  Button,
  Chip,
  Grid,
  Paper,
  IconButton,
  Tab,
  Tabs
} from '@mui/material';
import {
  Instagram,
  YouTube,
  Twitter,
  Edit as EditIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const BloggerProfile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [profileData, setProfileData] = useState({
    name: 'Foodie Explorer',
    handle: '@foodieexplorer',
    bio: 'Exploring the best restaurants and sharing amazing food experiences! 🍔✨',
    followers: 15200,
    following: 890,
    posts: 245,
    categories: ['Italian', 'Street Food', 'Fine Dining'],
    socialLinks: {
      instagram: 'https://instagram.com/foodieexplorer',
      youtube: 'https://youtube.com/foodieexplorer',
      twitter: 'https://twitter.com/foodieexplorer'
    },
    isVerified: true
  });

  return (
    <Container maxWidth="lg">
      <Paper 
        elevation={0}
        sx={{ 
          mt: 4, 
          p: 4, 
          borderRadius: 2,
          background: 'linear-gradient(135deg, #fff 0%, #f5f5f5 100%)'
        }}
      >
        <Grid container spacing={4}>
          {/* Profile Header */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Avatar
                  src="/path-to-profile-pic.jpg"
                  sx={{ 
                    width: 150, 
                    height: 150, 
                    margin: 'auto',
                    border: '4px solid white',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                  }}
                />
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography variant="h5" fontWeight="bold">
                    {profileData.name}
                  </Typography>
                  {profileData.isVerified && (
                    <VerifiedIcon 
                      color="primary" 
                      sx={{ ml: 1 }}
                    />
                  )}
                </Box>
                <Typography color="text.secondary">
                  {profileData.handle}
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Profile Stats & Bio */}
          <Grid item xs={12} md={8}>
            <Box>
              <Grid container spacing={3} sx={{ mb: 3 }}>
                {[
                  { label: 'Posts', value: profileData.posts },
                  { label: 'Followers', value: profileData.followers },
                  { label: 'Following', value: profileData.following }
                ].map((stat, index) => (
                  <Grid item xs={4} key={index}>
                    <Paper 
                      elevation={0}
                      sx={{ 
                        p: 2, 
                        textAlign: 'center',
                        bgcolor: 'background.default',
                        borderRadius: 2
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {stat.value.toLocaleString()}
                      </Typography>
                      <Typography color="text.secondary" variant="body2">
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              <Typography sx={{ mb: 2 }}>
                {profileData.bio}
              </Typography>

              <Box sx={{ mb: 3 }}>
                {profileData.categories.map((category, index) => (
                  <Chip
                    key={index}
                    label={category}
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      bgcolor: 'primary.main',
                      color: 'white'
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ display: 'flex', gap: 1 }}>
                {Object.entries(profileData.socialLinks).map(([platform, url]) => (
                  <IconButton
                    key={platform}
                    href={url}
                    target="_blank"
                    sx={{
                      bgcolor: 'background.default',
                      '&:hover': { bgcolor: 'action.hover' }
                    }}
                  >
                    {platform === 'instagram' && <Instagram />}
                    {platform === 'youtube' && <YouTube />}
                    {platform === 'twitter' && <Twitter />}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Content Tabs */}
          <Grid item xs={12}>
            <Tabs
              value={activeTab}
              onChange={(e, newValue) => setActiveTab(newValue)}
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              <Tab label="Reels" />
              <Tab label="Reviews" />
              <Tab label="Collaborations" />
            </Tabs>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default BloggerProfile; 
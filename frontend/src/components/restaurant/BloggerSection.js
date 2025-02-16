import { Box, Container, Typography, Avatar, Card, CardContent, IconButton, Grid } from '@mui/material';
import { PlayCircle, Favorite, Comment, Share } from '@mui/icons-material';
import { motion } from 'framer-motion';

const bloggers = [
  {
    id: 1,
    name: "Foodie Explorer",
    avatar: "/avatars/blogger1.jpg",
    followers: "50K",
    reels: [
      { id: 1, thumbnail: "/reels/reel1.jpg", likes: "12K", comments: "234" },
      { id: 2, thumbnail: "/reels/reel2.jpg", likes: "8K", comments: "156" }
    ]
  },
  // Add more bloggers...
];

const BloggerSection = () => {
  return (
    <Box sx={{ py: 6, bgcolor: 'background.default' }}>
      <Container>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center'
          }}
        >
          Featured Food Bloggers
        </Typography>

        <Grid container spacing={4}>
          {bloggers.map((blogger) => (
            <Grid item xs={12} md={4} key={blogger.id}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        src={blogger.avatar} 
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6">{blogger.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {blogger.followers} followers
                        </Typography>
                      </Box>
                    </Box>

                    {/* Reels Grid */}
                    <Grid container spacing={1}>
                      {blogger.reels.map((reel) => (
                        <Grid item xs={6} key={reel.id}>
                          <Box 
                            sx={{ 
                              position: 'relative',
                              paddingTop: '177.77%', // 16:9 Aspect Ratio
                              bgcolor: 'grey.200',
                              borderRadius: 1,
                              overflow: 'hidden'
                            }}
                          >
                            <Box
                              component="img"
                              src={reel.thumbnail}
                              alt="Reel thumbnail"
                              sx={{
                                position: 'absolute',
                                top: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                            />
                            <Box
                              sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                p: 1,
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                              }}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <IconButton size="small" sx={{ color: 'white' }}>
                                  <PlayCircle />
                                </IconButton>
                                <Typography variant="caption" sx={{ color: 'white' }}>
                                  {reel.likes}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>

                    {/* Social Actions */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
                      <IconButton>
                        <Favorite />
                      </IconButton>
                      <IconButton>
                        <Comment />
                      </IconButton>
                      <IconButton>
                        <Share />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BloggerSection; 
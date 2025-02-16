import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  IconButton,
  Fab,
  Zoom,
  Slide,
  Button,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar,
  Skeleton,
  Tooltip,
  InputAdornment
} from '@mui/material';
import {
  Restaurant as RestaurantIcon,
  LocalOffer,
  Favorite,
  ArrowBack,
  ShoppingCart,
  LocalFireDepartment,
  NavigateBefore,
  NavigateNext,
  People
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { format } from 'date-fns';
import { useAuth } from '../../context/AuthContext';
import { fetchRestaurantMenu } from '../../api/restaurants';
import { DUMMY_RESTAURANTS } from '../pages/Restaurants';
import { useState as useImageState } from 'react';
import { alpha } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { menuImages, getMenuImage } from '../../assets/images/menu';
import { styled } from '@mui/material/styles';
import { Grow } from '@mui/material';

const CUISINE_MENU_ITEMS = {
  'North Indian': {
    starters: [
      {
        name: "Paneer Tikka",
        description: "Marinated cottage cheese grilled to perfection",
        price: "299",
        isVeg: true,
        isSpecial: true
      },
      {
        name: "Tandoori Mushroom",
        description: "Grilled mushrooms with Indian spices",
        price: "249",
        isVeg: true,
        isSpecial: false
      },
      {
        name: "Chicken Tikka",
        description: "Classic tandoor-grilled marinated chicken",
        price: "349",
        isVeg: false,
        isSpecial: true
      }
    ],
    mainCourse: [
      {
        name: "Butter Chicken",
        description: "Creamy tomato curry with tender chicken",
        price: "449",
        isVeg: false,
        isSpecial: true
      },
      {
        name: "Dal Makhani",
        description: "Black lentils cooked overnight with cream",
        price: "299",
        isVeg: true,
        isSpecial: true
      },
      {
        name: "Shahi Paneer",
        description: "Rich and creamy cottage cheese curry",
        price: "349",
        isVeg: true,
        isSpecial: false
      }
    ],
    desserts: [
      {
        name: "Gulab Jamun",
        description: "Deep-fried milk solids in sugar syrup",
        price: "199",
        isVeg: true,
        isSpecial: true
      },
      {
        name: "Phirni",
        description: "Traditional rice pudding with nuts",
        price: "179",
        isVeg: true,
        isSpecial: false
      }
    ]
  },
  'Gujarati': {
    starters: [
      {
        name: "Khaman Dhokla",
        description: "Steamed gram flour cake with spicy tempering",
        price: "199",
        isVeg: true,
        isSpecial: true
      },
      {
        name: "Khandvi",
        description: "Rolled gram flour snack with coconut garnish",
        price: "179",
        isVeg: true,
        isSpecial: false
      }
    ],
    mainCourse: [
      {
        name: "Gujarati Thali",
        description: "Complete meal with rotis, dal, sabzi, and more",
        price: "399",
        isVeg: true,
        isSpecial: true
      },
      {
        name: "Undhiyu",
        description: "Mixed vegetable delicacy",
        price: "349",
        isVeg: true,
        isSpecial: true
      }
    ],
    desserts: [
      {
        name: "Basundi",
        description: "Thickened sweet milk with nuts",
        price: "199",
        isVeg: true,
        isSpecial: true
      }
    ]
  },
  'Seafood': {
    starters: [
      {
        name: "Fish Tikka",
        description: "Marinated and grilled fish pieces",
        price: "399",
        isVeg: false,
        isSpecial: true
      },
      {
        name: "Prawn Koliwada",
        description: "Crispy fried prawns with special masala",
        price: "449",
        isVeg: false,
        isSpecial: true
      }
    ],
    mainCourse: [
      {
        name: "Fish Curry",
        description: "Traditional coastal fish curry",
        price: "499",
        isVeg: false,
        isSpecial: true
      },
      {
        name: "Prawn Masala",
        description: "Spicy prawns in rich gravy",
        price: "549",
        isVeg: false,
        isSpecial: false
      }
    ],
    desserts: [
      {
        name: "Coconut Pudding",
        description: "Traditional coastal dessert",
        price: "199",
        isVeg: true,
        isSpecial: false
      }
    ]
  },
  'Continental': {
    starters: [
      {
        name: "Bruschetta",
        description: "Toasted bread with tomatoes and herbs",
        price: "249",
        isVeg: true,
        isSpecial: false
      },
      {
        name: "Caesar Salad",
        description: "Classic salad with creamy dressing",
        price: "299",
        isVeg: false,
        isSpecial: true
      }
    ],
    mainCourse: [
      {
        name: "Grilled Salmon",
        description: "Fresh salmon with herbs and lemon butter",
        price: "699",
        isVeg: false,
        isSpecial: true
      },
      {
        name: "Mushroom Risotto",
        description: "Creamy Italian rice with mushrooms",
        price: "449",
        isVeg: true,
        isSpecial: false
      }
    ],
    desserts: [
      {
        name: "Tiramisu",
        description: "Classic Italian coffee-flavored dessert",
        price: "299",
        isVeg: true,
        isSpecial: true
      }
    ]
  },
  'Street Food': {
    starters: [
      {
        name: "Pani Puri",
        description: "Crispy hollow puris filled with spicy water",
        price: "99",
        isVeg: true,
        isSpecial: true
      },
      {
        name: "Bhel Puri",
        description: "Puffed rice with tangy chutneys",
        price: "89",
        isVeg: true,
        isSpecial: false
      }
    ],
    mainCourse: [
      {
        name: "Pav Bhaji",
        description: "Spiced vegetable mash with buttered bread",
        price: "149",
        isVeg: true,
        isSpecial: true
      },
      {
        name: "Vada Pav",
        description: "Spiced potato patty in bread",
        price: "49",
        isVeg: true,
        isSpecial: false
      }
    ],
    desserts: [
      {
        name: "Kulfi Falooda",
        description: "Traditional Indian ice cream with vermicelli",
        price: "99",
        isVeg: true,
        isSpecial: true
      }
    ]
  },
  'Awadhi': {
    starters: [
      {
        name: "Galouti Kebab",
        description: "Melt-in-mouth minced meat kebabs",
        price: "399",
        isVeg: false,
        isSpecial: true
      },
      {
        name: "Kakori Kebab",
        description: "Grilled spiced meat skewers",
        price: "349",
        isVeg: false,
        isSpecial: true
      }
    ],
    mainCourse: [
      {
        name: "Lucknowi Biryani",
        description: "Fragrant rice layered with meat and spices",
        price: "449",
        isVeg: false,
        isSpecial: true
      },
      {
        name: "Nihari",
        description: "Slow-cooked meat stew",
        price: "399",
        isVeg: false,
        isSpecial: false
      }
    ],
    desserts: [
      {
        name: "Shahi Tukda",
        description: "Royal bread pudding",
        price: "199",
        isVeg: true,
        isSpecial: true
      }
    ]
  },
  'Rajasthani': {
    starters: [
      {
        name: "Pyaaz Kachori",
        description: "Crispy onion-filled pastry",
        price: "89",
        isVeg: true,
        isSpecial: true
      },
      {
        name: "Mirchi Vada",
        description: "Stuffed chili fritters",
        price: "79",
        isVeg: true,
        isSpecial: false
      }
    ],
    mainCourse: [
      {
        name: "Dal Baati Churma",
        description: "Traditional Rajasthani platter",
        price: "349",
        isVeg: true,
        isSpecial: true
      },
      {
        name: "Gatte ki Sabzi",
        description: "Gram flour dumplings in spicy gravy",
        price: "249",
        isVeg: true,
        isSpecial: false
      }
    ],
    desserts: [
      {
        name: "Ghevar",
        description: "Traditional disc-shaped sweet cake",
        price: "199",
        isVeg: true,
        isSpecial: true
      }
    ]
  }
};

const FOOD_IMAGES = {
  'Paneer Tikka': menuImages.northIndian.starters.paneerTikka,
  'Tandoori Mushroom': menuImages.northIndian.starters.tandooriMushroom,
  'Chicken Tikka': menuImages.northIndian.starters.chickenTikka,
  'Butter Chicken': menuImages.northIndian.mainCourse.butterChicken,
  'Dal Makhani': menuImages.northIndian.mainCourse.dalMakhani,
  'Shahi Paneer': menuImages.northIndian.mainCourse.shahiPaneer,
  'Gulab Jamun': menuImages.northIndian.desserts.gulabJamun,
  'Phirni': menuImages.northIndian.desserts.phirni,
  'Khaman Dhokla': menuImages.gujarati.starters.khamanDhokla,
  'Khandvi': menuImages.gujarati.starters.khandvi,
  'Gujarati Thali': menuImages.gujarati.mainCourse.gujaratiThali,
  'Undhiyu': menuImages.gujarati.mainCourse.undhiyu,
  'Basundi': menuImages.gujarati.desserts.basundi,
  'Fish Tikka': menuImages.seafood.starters.fishTikka,
  'Prawn Koliwada': menuImages.seafood.starters.prawnKoliwada,
  'Fish Curry': menuImages.seafood.mainCourse.fishCurry,
  'Prawn Masala': menuImages.seafood.mainCourse.prawnMasala,
  'Coconut Pudding': menuImages.seafood.desserts.coconutPudding,
  'Bruschetta': menuImages.continental.starters.bruschetta,
  'Caesar Salad': menuImages.continental.starters.caesarSalad,
  'Grilled Salmon': menuImages.continental.mainCourse.grilledSalmon,
  'Mushroom Risotto': menuImages.continental.mainCourse.mushroomRisotto,
  'Tiramisu': menuImages.continental.desserts.tiramisu,
  'Pani Puri': menuImages.streetFood.starters.paniPuri,
  'Bhel Puri': menuImages.streetFood.starters.bhelPuri,
  'Pav Bhaji': menuImages.streetFood.mainCourse.pavBhaji,
  'Vada Pav': menuImages.streetFood.mainCourse.vadaPav,
  'Kulfi Falooda': menuImages.streetFood.desserts.kulfiFalooda,
  'Galouti Kebab': menuImages.awadhi.starters.galoutiKebab,
  'Kakori Kebab': menuImages.awadhi.starters.kakoriKebab,
  'Lucknowi Biryani': menuImages.awadhi.mainCourse.lucknowiBiryani,
  'Nihari': menuImages.awadhi.mainCourse.nihari,
  'Shahi Tukda': menuImages.awadhi.desserts.shahiTukda,
  'Pyaaz Kachori': menuImages.rajasthani.starters.pyaazKachori,
  'Mirchi Vada': menuImages.rajasthani.starters.mirchiVada,
  'Dal Baati Churma': menuImages.rajasthani.mainCourse.dalBaatiChurma,
  'Gatte ki Sabzi': menuImages.rajasthani.mainCourse.gatteKiSabzi,
  'Ghevar': menuImages.rajasthani.desserts.ghevar
};

const AnimatedBackground = () => (
  <Box sx={{ position: 'relative' }}>
    {/* Main Gradient Background */}
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -2,
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 107, 0.1), transparent 70%)',
          animation: 'pulse 4s ease-in-out infinite'
        }
      }}
    />

    {/* Small Floating Particles */}
    {[...Array(30)].map((_, i) => (
      <Box
        key={`small-particle-${i}`}
        sx={{
          position: 'fixed',
          width: Math.random() * 3 + 1,
          height: Math.random() * 3 + 1,
          background: 'rgba(255, 107, 107, 0.15)',
          borderRadius: '50%',
          zIndex: -1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `floatParticle ${Math.random() * 6 + 4}s ease-in-out infinite`,
          animationDelay: `-${Math.random() * 2}s`,
          filter: 'blur(1px)',
          opacity: 0.6
        }}
      />
    ))}

    {/* Medium Glowing Particles */}
    {[...Array(15)].map((_, i) => (
      <Box
        key={`medium-particle-${i}`}
        sx={{
          position: 'fixed',
          width: Math.random() * 6 + 3,
          height: Math.random() * 6 + 3,
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          zIndex: -1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `floatGlow ${Math.random() * 8 + 6}s ease-in-out infinite`,
          animationDelay: `-${Math.random() * 3}s`,
          boxShadow: '0 0 10px rgba(255, 107, 107, 0.3)',
          opacity: 0.4
        }}
      />
    ))}

    {/* Large Blurred Orbs */}
    {[...Array(8)].map((_, i) => (
      <Box
        key={`large-orb-${i}`}
        sx={{
          position: 'fixed',
          width: Math.random() * 150 + 100,
          height: Math.random() * 150 + 100,
          background: 'radial-gradient(circle at center, rgba(255,107,107,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: -1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `floatOrb ${Math.random() * 15 + 10}s ease-in-out infinite`,
          animationDelay: `-${Math.random() * 5}s`,
          filter: 'blur(50px)',
          opacity: 0.3,
          transform: 'translate(-50%, -50%)'
        }}
      />
    ))}

    {/* Interactive Sparkles */}
    {[...Array(12)].map((_, i) => (
      <Box
        key={`sparkle-${i}`}
        sx={{
          position: 'fixed',
          width: 2,
          height: 2,
          background: '#fff',
          borderRadius: '50%',
          zIndex: -1,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `sparkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
          animationDelay: `-${Math.random() * 2}s`,
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'inherit',
            borderRadius: 'inherit',
            animation: 'sparkleGlow 1s ease-in-out infinite'
          }
        }}
      />
    ))}
  </Box>
);

const ScrollFadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const PriceTag = ({ price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
    >
      <Box
        className="price-tag"
        sx={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          padding: '4px 12px',
          background: 'linear-gradient(45deg, #2193b0, #6dd5ed)',
          borderRadius: '20px',
          color: 'white',
          boxShadow: isHovered ? '0 8px 16px rgba(33,147,176,0.3)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          ₹{price}
        </Typography>
        {isHovered && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="sparkle"
          />
        )}
      </Box>
    </motion.div>
  );
};

// Loading Skeleton for menu items
const MenuItemSkeleton = () => (
  <Box sx={{ mb: 2 }}>
    <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
    <Box sx={{ pt: 2 }}>
      <Skeleton width="60%" height={32} />
      <Skeleton width="90%" height={20} sx={{ mt: 1 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Skeleton width={80} height={32} />
        <Skeleton width={100} height={32} />
      </Box>
    </Box>
  </Box>
);

// Enhanced MenuCategory with loading state and gestures
const MenuCategory = ({ title, items, delay, loading }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [swipeInfo, setSwipeInfo] = useState({ x: 0, direction: null });

  // Gesture handlers
  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 100) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      setSwipeInfo({ x: info.offset.x, direction });
      // Handle swipe action (e.g., add to favorites, share, etc.)
    }
  };

  return (
    <ScrollFadeIn delay={delay / 1000}>
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            mb: 3,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#fff',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 60,
              height: 3,
              background: 'linear-gradient(90deg, transparent, #ff6b6b, transparent)',
              borderRadius: 2
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 30,
              height: 3,
              background: '#ff6b6b',
              borderRadius: 2,
              animation: 'slideWidth 2s ease-in-out infinite'
            }
          }}
        >
          {title}
        </Typography>

        <Grid container spacing={isMobile ? 2 : 3}>
          {loading ? (
            // Loading skeletons
            [...Array(6)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} key={`skeleton-${index}`}>
                <MenuItemSkeleton />
              </Grid>
            ))
          ) : (
            items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  drag={isMobile ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  whileTap={{ scale: 0.95 }}
                  role="article"
                  aria-label={`${item.name} menu item`}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: 4,
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: 'perspective(1000px) rotateX(0) rotateY(0)',
                      '&:hover': {
                        transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg) translateY(-10px)',
                        boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                        '& .card-content': {
                          transform: 'translateY(-5px)'
                        },
                        '& .card-media': {
                          transform: 'scale(1.1) rotate(2deg)'
                        },
                        '& .card-overlay': {
                          opacity: 1
                        },
                        '& .card-actions': {
                          transform: 'translateY(0)',
                          opacity: 1
                        }
                      }
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CardMedia
                          className="card-media"
                          component="img"
                          height="200"
                          image={item.image}
                          alt={item.name}
                          sx={{
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            filter: 'brightness(0.9)',
                            '&:hover': {
                              filter: 'brightness(1.1)'
                            }
                          }}
                        />
                        <Box
                          className="card-overlay"
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease'
                          }}
                        />
                      </motion.div>
                      
                      {item.isSpecial && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          drag
                          dragConstraints={{
                            top: -5,
                            left: -5,
                            right: 5,
                            bottom: 5
                          }}
                        >
                          <Chip
                            icon={<LocalFireDepartment />}
                            label="Chef's Special"
                            color="error"
                            sx={{
                              position: 'absolute',
                              top: 10,
                              right: 10,
                              background: 'linear-gradient(45deg, #FF512F 30%, #F09819 90%)',
                              color: 'white',
                              animation: 'pulse 2s infinite',
                              boxShadow: '0 4px 20px rgba(255, 81, 47, 0.4)',
                              cursor: 'grab',
                              '&:active': {
                                cursor: 'grabbing'
                              }
                            }}
                          />
                        </motion.div>
                      )}
                    </Box>

                    {/* Quick Action Buttons */}
                    <CardContent
                      className="card-content"
                      sx={{
                        flexGrow: 1,
                        p: 3,
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 'bold',
                            color: 'white',
                            mb: 1,
                            position: 'relative',
                            display: 'inline-block',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              bottom: -2,
                              left: 0,
                              width: '0%',
                              height: 2,
                              background: 'linear-gradient(90deg, #ff6b6b, transparent)',
                              transition: 'width 0.3s ease'
                            },
                            '&:hover::after': {
                              width: '100%'
                            }
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            mb: 2,
                            minHeight: 40,
                            transition: 'color 0.3s ease',
                            '&:hover': {
                              color: 'rgba(255,255,255,0.9)'
                            }
                          }}
                        >
                          {item.description}
                        </Typography>
                      </motion.div>

                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mt: 'auto'
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 'bold',
                              color: '#ff6b6b',
                              textShadow: '0 0 10px rgba(255,107,107,0.3)'
                            }}
                          >
                            ₹{item.price}
                          </Typography>
                        </motion.div>

                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Chip
                            size="small"
                            icon={<RestaurantIcon />}
                            label={item.isVeg ? 'Veg' : 'Non-Veg'}
                            color={item.isVeg ? 'success' : 'error'}
                            sx={{
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                transform: 'rotate(5deg)',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                              }
                            }}
                          />
                        </motion.div>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </ScrollFadeIn>
  );
};

// Add this component for pull-to-refresh functionality
const PullToRefresh = ({ onRefresh, children }) => {
  const [isPulling, setIsPulling] = useState(false);
  const pullThreshold = 100;

  const handlePull = (_, info) => {
    if (info.offset.y > pullThreshold && !isPulling) {
      setIsPulling(true);
      onRefresh().then(() => setIsPulling(false));
    }
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDrag={handlePull}
    >
      {isPulling && (
        <Box
          sx={{
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <CircularProgress size={24} />
        </Box>
      )}
      {children}
    </motion.div>
  );
};

// Update the RestaurantHeader component to accept navigate as a prop
const RestaurantHeader = ({ name, cuisine, navigate }) => (
  <Box
    sx={{
      mb: 4,
      position: 'relative',
      padding: '2rem',
      borderRadius: '16px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(5px)',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.3)',
              transform: 'scale(1.1)'
            }
          }}
        >
          <ArrowBack />
        </IconButton>
        
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '100%',
                height: 3,
                background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
                borderRadius: '2px'
              }
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              mt: 1,
              opacity: 0.8,
              fontStyle: 'italic'
            }}
          >
            {cuisine} Cuisine
          </Typography>
        </Box>

        {/* Decorative food icons */}
        <Box
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            gap: 2,
            opacity: 0.2
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Box
                component="img"
                src={`/icons/food-${i + 1}.svg`}
                alt=""
                sx={{
                  width: 32,
                  height: 32,
                  filter: 'grayscale(1)'
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </motion.div>

    {/* Background pattern */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        animation: 'patternMove 20s linear infinite'
      }}
    />
  </Box>
);

// Update the BookingFab styled component
const BookingFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: 40,
  right: 40,
  width: 80,
  height: 80,
  background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
  boxShadow: '0 8px 16px rgba(255, 65, 108, 0.3)',
  transition: 'all 0.3s ease',
  zIndex: 1000,

  '&:hover': {
    background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
    transform: 'scale(1.05)',
    boxShadow: '0 12px 20px rgba(255, 65, 108, 0.4)',
  },

  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
    color: 'white',
  }
}));

const RestaurantMenuPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openBooking, setOpenBooking] = useState(false);
  const [bookingDate, setBookingDate] = useState(null);
  const [bookingTime, setBookingTime] = useState(null);
  const [guests, setGuests] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setLoading(true);
    const foundRestaurant = DUMMY_RESTAURANTS.find(r => r.id === parseInt(id));
    
    if (foundRestaurant) {
      // Get menu items based on cuisine type or use default menu
      const cuisineMenu = CUISINE_MENU_ITEMS[foundRestaurant.cuisine] || {
        starters: [
          {
            name: `${foundRestaurant.cuisine} Special Starter`,
            description: "Chef's special starter",
            price: "299",
            isVeg: foundRestaurant.type === 'veg',
            isSpecial: true
          },
          {
            name: `${foundRestaurant.cuisine} Appetizer`,
            description: "Traditional appetizer",
            price: "249",
            isVeg: foundRestaurant.type === 'veg',
            isSpecial: false
          }
        ],
        mainCourse: [
          {
            name: `${foundRestaurant.cuisine} Signature Dish`,
            description: "Our signature main course",
            price: "449",
            isVeg: foundRestaurant.type === 'veg',
            isSpecial: true
          },
          {
            name: `${foundRestaurant.cuisine} Special`,
            description: "House special main course",
            price: "399",
            isVeg: foundRestaurant.type === 'veg',
            isSpecial: false
          }
        ],
        desserts: [
          {
            name: "House Special Dessert",
            description: "Perfect ending to your meal",
            price: "199",
            isVeg: true,
            isSpecial: true
          }
        ]
      };

      setRestaurant({
        ...foundRestaurant,
        menu: {
          starters: cuisineMenu.starters.map(item => ({
            ...item,
            image: getMenuImage(foundRestaurant.cuisine.toLowerCase().replace(/\s+/g, '-'), 'starters', item.name)?.primary || 
                   `https://source.unsplash.com/800x600/?${item.name.toLowerCase().replace(/\s+/g, '-')}`
          })),
          mainCourse: cuisineMenu.mainCourse.map(item => ({
            ...item,
            image: getMenuImage(foundRestaurant.cuisine.toLowerCase().replace(/\s+/g, '-'), 'mainCourse', item.name)?.primary || 
                   `https://source.unsplash.com/800x600/?${item.name.toLowerCase().replace(/\s+/g, '-')}`
          })),
          desserts: cuisineMenu.desserts.map(item => ({
            ...item,
            image: getMenuImage(foundRestaurant.cuisine.toLowerCase().replace(/\s+/g, '-'), 'desserts', item.name)?.primary || 
                   `https://source.unsplash.com/800x600/?${item.name.toLowerCase().replace(/\s+/g, '-')}`
          }))
        }
      });
    }
    setLoading(false);
  }, [id]);

  const validateBooking = (bookingDetails) => {
    const errors = [];
    const now = new Date();
    const bookingDateTime = new Date(
      bookingDetails.date + 'T' + bookingDetails.time
    );

    // Check if date is in the past
    if (bookingDateTime < now) {
      errors.push('Cannot book for past date/time');
    }

    // Check if booking is at least 1 hour in advance
    const hourDiff = (bookingDateTime - now) / (1000 * 60 * 60);
    if (hourDiff < 1) {
      errors.push('Bookings must be made at least 1 hour in advance');
    }

    // Check restaurant hours (example: 11 AM to 11 PM)
    const bookingHour = bookingDateTime.getHours();
    if (bookingHour < 11 || bookingHour >= 23) {
      errors.push('Restaurant is open from 11 AM to 11 PM');
    }

    // Check if it's within valid time slots (hourly slots)
    const minutes = bookingDateTime.getMinutes();
    if (minutes !== 0 && minutes !== 30) {
      errors.push('Bookings available only at :00 and :30 minutes');
    }

    return errors;
  };

  const handleBookTable = async () => {
    // Check if user is logged in first
    const userData = localStorage.getItem('userData');
    
    if (!userData) {
      // If not logged in, redirect to login page
      navigate('/login', { 
        state: { 
          from: location.pathname,
          message: 'Please login to book a table' 
        } 
      });
      return;
    }

    // If user is logged in, show booking dialog
    setOpenBooking(true);
  };

  const handleBookingSubmit = async () => {
    if (!bookingDate || !bookingTime || !guests) {
      setBookingError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      const newBooking = {
        id: Date.now(),
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        date: bookingDate,
        time: format(bookingTime, 'hh:mm a'),
        guests: guests,
        status: 'Confirmed',
        location: restaurant.location,
        createdAt: new Date().toISOString()
      };

      const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      const updatedBookings = [newBooking, ...existingBookings];
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));

      setBookingSuccess(true);
      setSuccessMessage('Table booked successfully!');
      setOpenBooking(false);
    } catch (error) {
      setBookingError('Failed to book table. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate refresh
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsRefreshing(false);
  };

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (!restaurant) return null;

  return (
    <Box 
      sx={{ position: 'relative', minHeight: '100vh' }}
      role="main"
      aria-label={`Menu for ${restaurant?.name}`}
    >
      <AnimatedBackground />
      <PullToRefresh onRefresh={handleRefresh}>
        <Container 
          maxWidth="lg" 
          sx={{ 
            pt: 4, 
            pb: 8,
            position: 'relative',
            zIndex: 1
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <RestaurantHeader 
              name={restaurant.name} 
              cuisine={restaurant.cuisine}
              navigate={navigate}
            />

            <MenuCategory 
              title="Starters" 
              items={restaurant.menu.starters} 
              delay={300}
              loading={loading || isRefreshing}
            />
            <MenuCategory title="Main Course" items={restaurant.menu.mainCourse} delay={600} />
            <MenuCategory title="Desserts" items={restaurant.menu.desserts} delay={900} />
          </motion.div>
        </Container>
      </PullToRefresh>

      {/* Updated Booking Button */}
      <Tooltip title="Book a Table" placement="left">
        <BookingFab
          onClick={handleBookTable}
          aria-label="Book a table"
        >
          <RestaurantIcon />
        </BookingFab>
      </Tooltip>

      {/* Enhanced Booking Dialog */}
      <Dialog
        open={openBooking}
        onClose={() => setOpenBooking(false)}
        maxWidth="md"
        fullWidth
        TransitionComponent={Grow}
        TransitionProps={{ timeout: 600 }}
        PaperProps={{
          sx: {
            borderRadius: '20px',
            background: 'linear-gradient(to right bottom, #ffffff, #f8f9fa)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            overflow: 'hidden'
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <DialogTitle sx={{ 
            background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
            color: 'white',
            py: 3
          }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Book Your Table
            </Typography>
            <Typography variant="subtitle2" sx={{ mt: 1, opacity: 0.9 }}>
              Reserve your special dining experience
            </Typography>
          </DialogTitle>

          <DialogContent sx={{ p: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Select Date"
                      value={bookingDate}
                      onChange={(newValue) => setBookingDate(newValue)}
                      renderInput={(params) => (
                        <TextField 
                          {...params} 
                          fullWidth 
                          required
                          error={!bookingDate}
                          helperText={!bookingDate ? "Please select a date" : ""}
                        />
                      )}
                      minDate={new Date()}
                      sx={{ mb: 3 }}
                    />
                  </LocalizationProvider>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Select Time"
                      value={bookingTime}
                      onChange={(newValue) => setBookingTime(newValue)}
                      renderInput={(params) => (
                        <TextField 
                          {...params} 
                          fullWidth 
                          required
                          error={!bookingTime}
                          helperText={!bookingTime ? "Please select a time" : ""}
                        />
                      )}
                      sx={{ mb: 3 }}
                    />
                  </LocalizationProvider>
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <TextField
                    label="Number of Guests"
                    type="number"
                    fullWidth
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <People />
                        </InputAdornment>
                      ),
                      inputProps: { min: 1, max: 20 }
                    }}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions sx={{ p: 3, background: '#f8f9fa' }}>
            <Button 
              onClick={() => setOpenBooking(false)}
              sx={{ color: 'text.secondary' }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleBookingSubmit}
              disabled={!bookingDate || !bookingTime || !guests || isSubmitting}
              sx={{
                background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                px: 4,
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                },
                '&.Mui-disabled': {
                  background: 'rgba(0, 0, 0, 0.12)',
                }
              }}
            >
              {isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Confirm Booking'
              )}
            </Button>
          </DialogActions>
        </motion.div>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={bookingSuccess}
        autoHideDuration={6000}
        onClose={() => setBookingSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setBookingSuccess(false)} 
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
          action={
            <Button 
              color="inherit" 
              size="small"
              onClick={() => navigate('/bookings')}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              View Booking
            </Button>
          }
        >
          {successMessage}
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar
        open={!!bookingError}
        autoHideDuration={6000}
        onClose={() => setBookingError('')}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setBookingError('')} 
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {bookingError}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RestaurantMenuPage; 
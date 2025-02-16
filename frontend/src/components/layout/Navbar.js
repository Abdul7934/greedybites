import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Box,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Avatar,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Menu as MenuIcon, PersonOutline, PersonAdd, LocationOn, KeyboardArrowDown } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import DiningIcon from '../common/DiningIcon';
import { useAuth } from '../../context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCity } from '../../redux/slices/locationSlice';

const CITIES = [
  { name: 'Mumbai', state: 'Maharashtra' },
  { name: 'Delhi', state: 'Delhi' },
  { name: 'Bangalore', state: 'Karnataka' },
  { name: 'Hyderabad', state: 'Telangana' },
  { name: 'Chennai', state: 'Tamil Nadu' },
  { name: 'Kolkata', state: 'West Bengal' },
  { name: 'Pune', state: 'Maharashtra' },
  { name: 'Ahmedabad', state: 'Gujarat' },
  { name: 'Jaipur', state: 'Rajasthan' },
  { name: 'Lucknow', state: 'Uttar Pradesh' }
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [locationAnchorEl, setLocationAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { user } = useAuth();
  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state.location.selectedCity);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLocationClick = (event) => {
    setLocationAnchorEl(event.currentTarget);
  };

  const handleLocationClose = () => {
    setLocationAnchorEl(null);
  };

  const handleCitySelect = (city) => {
    dispatch(setSelectedCity(city));
    handleLocationClose();
    if (window.location.pathname === '/restaurants') {
      window.location.reload();
    }
  };

  return (
    <AppBar 
      position="static"
      sx={{ 
        background: '#B71C1C',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            gap: '6px'
          }}
        >
          <DiningIcon size="1.8rem" />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              marginLeft: '2px'
            }}
          >
            GreedyBites
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
            sx={{ color: 'white' }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/restaurants"
            sx={{ color: 'white' }}
          >
            Restaurants
          </Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
          <Button
            color="inherit"
            startIcon={<LocationOn />}
            endIcon={<KeyboardArrowDown />}
            onClick={handleLocationClick}
            sx={{ 
              color: 'white',
              textTransform: 'none',
              fontSize: '1rem'
            }}
          >
            {selectedCity}
          </Button>
          <Menu
            anchorEl={locationAnchorEl}
            open={Boolean(locationAnchorEl)}
            onClose={handleLocationClose}
            PaperProps={{
              sx: {
                maxHeight: 300,
                width: 250
              }
            }}
          >
            {CITIES.map((city) => (
              <MenuItem 
                key={city.name}
                onClick={() => handleCitySelect(city.name)}
                selected={selectedCity === city.name}
              >
                <ListItemIcon>
                  <LocationOn fontSize="small" />
                </ListItemIcon>
                <ListItemText 
                  primary={city.name}
                  secondary={city.state}
                />
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {user ? (
            <IconButton
              color="inherit"
              onClick={() => navigate('/profile')}
              sx={{ ml: 2 }}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                {user.name?.charAt(0) || 'U'}
              </Avatar>
            </IconButton>
          ) : (
            <>
              <Button 
                color="inherit"
                component={Link} 
                to="/login"
                startIcon={<PersonOutline />}
                sx={{ color: 'white' }}
              >
                Login
              </Button>
              <Button 
                variant="contained"
                color="secondary"
                component={Link} 
                to="/register"
                startIcon={<PersonAdd />}
                sx={{ fontWeight: 500 }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
  Grid,
  InputAdornment
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Person, Phone, Lock, Email } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const RegisterContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4),

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
  padding: theme.spacing(4),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(5px)',
    borderRadius: theme.spacing(1),
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInputAdornment-root .MuiIconButton-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  }
}));

const FloatingParticles = () => (
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          width: Math.random() * 4 + 1,
          height: Math.random() * 4 + 1,
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() * 20 - 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </Box>
);

const GlowingOrbs = () => (
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none' }}>
    {[...Array(5)].map((_, i) => (
      <Box
        key={`orb-${i}`}
        component={motion.div}
        sx={{
          position: 'fixed',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          filter: 'blur(80px)',
          background: `radial-gradient(circle, ${
            ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96c93d', '#e056fd'][i]
          } 0%, transparent 70%)`,
          opacity: 0.3,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10 + Math.random() * 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </Box>
);

export default function UserRegister() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(formData); // In a real app, this would be a register function
      navigate('/');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <FloatingParticles />
      <GlowingOrbs />
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                  textShadow: '0 2px 10px rgba(255, 65, 108, 0.2)',
                }}
              >
                Create Your Account
              </Typography>
              <Typography
                variant="h6"
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontWeight: 'normal'
                }}
              >
                Join GreedyBites and start your culinary journey
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <GlassCard>
                  {error && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                      {error}
                    </Alert>
                  )}

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Person sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          fullWidth
                          label="Email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Email sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          fullWidth
                          label="Phone Number"
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Phone sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          fullWidth
                          label="Password"
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Lock sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={loading}
                      sx={{
                        mt: 4,
                        mb: 2,
                        background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                        fontSize: '1.1rem',
                        padding: '12px',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 5px 15px rgba(255, 75, 43, 0.4)',
                        }
                      }}
                    >
                      {loading ? <CircularProgress size={24} /> : 'Sign Up'}
                    </Button>
                  </Box>
                </GlassCard>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <GlassCard>
                  <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                    Already have an account?
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                    Sign in to continue your journey with us
                  </Typography>

                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => navigate('/login')}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        background: 'rgba(255, 255, 255, 0.1)',
                      }
                    }}
                  >
                    Sign In
                  </Button>
                </GlassCard>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </RegisterContainer>
  );
} 
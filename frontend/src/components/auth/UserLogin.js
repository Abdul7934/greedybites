import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  Fade
} from '@mui/material';
import { motion } from 'framer-motion';
import './Auth.css';

export default function UserLogin() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    otp: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState('PHONE');
  // Simulated OTP for development
  const [simulatedOtp, setSimulatedOtp] = useState('');

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (formData.phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setLoading(true);
    try {
      // Generate a random 6-digit OTP for testing
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setSimulatedOtp(generatedOtp);
      
      // In a real app, this would send an actual OTP to the phone number
      setStep('OTP');
      setError('');
      
      // Show success message with the OTP
      console.log('Development OTP:', generatedOtp);
    } catch (err) {
      setError(err.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (formData.otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    // Verify if entered OTP matches the simulated OTP
    if (formData.otp !== simulatedOtp) {
      setError('Invalid OTP. For testing, use: ' + simulatedOtp);
      return;
    }

    setLoading(true);
    try {
      // Sign in the user
      await signIn({
        phoneNumber: formData.phoneNumber,
        otp: formData.otp
      });

      // Store user data
      localStorage.setItem('userData', JSON.stringify({
        phoneNumber: formData.phoneNumber,
        isLoggedIn: true
      }));

      // Navigate to the intended page or home
      const redirectTo = location.state?.from || '/';
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message || 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessfulLogin = () => {
    // After successful login, redirect to the original page
    const from = location.state?.from || '/';
    navigate(from, { replace: true });
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 4,
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
      }}
    >
      <Container maxWidth="xs">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper 
            sx={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: 2,
              padding: 4,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
              }
            }}
          >
            <Typography 
              component="h1" 
              sx={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 3,
                color: 'white',
                background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {step === 'PHONE' ? 'Welcome Back!' : 'Verify Your Number'}
            </Typography>
            
            <Typography 
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textAlign: 'center',
                mb: 4,
                fontSize: '1.1rem'
              }}
            >
              {step === 'PHONE' 
                ? 'Login with your phone number to continue'
                : 'Enter the OTP sent to your phone'
              }
            </Typography>

            {error && (
              <Fade in={Boolean(error)}>
                <Alert 
                  severity="error" 
                  sx={{ 
                    mb: 3,
                    borderRadius: 2,
                    background: 'rgba(211, 47, 47, 0.1)',
                    color: '#ff4444'
                  }}
                  onClose={() => setError('')}
                >
                  {error}
                </Alert>
              </Fade>
            )}

            {step === 'PHONE' ? (
              <motion.form 
                onSubmit={handlePhoneSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  sx={{
                    mb: 3,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(5px)',
                      borderRadius: 1,
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#FF416C',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    }
                  }}
                  variant="outlined"
                  placeholder="Enter 10-digit number"
                  inputProps={{ maxLength: 10 }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={loading}
                  sx={{
                    background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                    fontSize: '1.1rem',
                    padding: '12px',
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                    }
                  }}
                >
                  {loading ? <CircularProgress size={24} /> : 'Send OTP'}
                </Button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {simulatedOtp && (
                  <Alert 
                    severity="info" 
                    sx={{ 
                      mb: 3,
                      borderRadius: 2,
                      background: 'rgba(33, 150, 243, 0.1)',
                      color: '#29b6f6'
                    }}
                  >
                    Development Mode: Your OTP is {simulatedOtp}
                  </Alert>
                )}
                
                <form onSubmit={handleOtpSubmit}>
                  <TextField
                    fullWidth
                    label="Enter OTP"
                    value={formData.otp}
                    onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                    type="number"
                    required
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(5px)',
                        borderRadius: 1,
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#FF416C',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      }
                    }}
                  />
                  
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={loading}
                    sx={{
                      background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
                      fontSize: '1.1rem',
                      padding: '12px',
                      textTransform: 'none',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                      }
                    }}
                  >
                    {loading ? <CircularProgress size={24} /> : 'Verify OTP'}
                  </Button>
                </form>

                <Button
                  fullWidth
                  onClick={() => {
                    setStep('PHONE');
                    setFormData({ ...formData, otp: '' });
                    setSimulatedOtp('');
                    setError('');
                  }}
                  sx={{
                    mt: 2,
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      color: 'white',
                      background: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  Change Phone Number
                </Button>
              </motion.div>
            )}
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
} 
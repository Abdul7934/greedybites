import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import axios from '../../utils/axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Password validation rules
  const passwordRules = {
    minLength: formData.password.length >= 8,
    hasUppercase: /[A-Z]/.test(formData.password),
    hasNumber: /\d/.test(formData.password),
    hasSpecial: /[!@#$%^&*]/.test(formData.password),
    passwordsMatch: formData.password === formData.confirmPassword && formData.password !== ''
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    // Check all password rules
    if (!Object.values(passwordRules).every(Boolean)) {
      setError('Please ensure all password requirements are met');
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/auth/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      // Show success message
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      setError(
        error.response?.data?.message || 
        'Registration failed. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="sm">
        <Box sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography component="h1" variant="h5" gutterBottom>
            Create Account
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
            />

            {/* Password Requirements List */}
            <List dense sx={{ 
              mt: 2, 
              bgcolor: 'background.paper',
              borderRadius: 1,
              border: '1px solid',
              borderColor: 'divider',
              p: 2
            }}>
              <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>
                Password Requirements:
              </Typography>
              {[
                { rule: 'minLength', label: 'At least 8 characters' },
                { rule: 'hasUppercase', label: 'One uppercase letter' },
                { rule: 'hasNumber', label: 'One number' },
                { rule: 'hasSpecial', label: 'One special character (!@#$%^&*)' },
                { rule: 'passwordsMatch', label: 'Passwords match' }
              ].map(({ rule, label }) => (
                <ListItem key={rule} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    {passwordRules[rule] ? (
                      <CheckIcon color="success" fontSize="small" />
                    ) : (
                      <CloseIcon color="error" fontSize="small" />
                    )}
                  </ListItemIcon>
                  <ListItemText 
                    primary={label}
                    primaryTypographyProps={{
                      variant: 'body2',
                      color: passwordRules[rule] ? 'success.main' : 'error.main'
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading || !Object.values(passwordRules).every(Boolean)}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Register'
              )}
            </Button>
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Register; 
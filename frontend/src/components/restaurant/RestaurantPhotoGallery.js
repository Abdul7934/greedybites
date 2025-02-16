import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Chip,
  Stack,
  Alert
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  PhotoCamera,
  Collections
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const PHOTO_CATEGORIES = [
  'Food',
  'Ambience',
  'Events',
  'Staff',
  'Menu Items',
  'Special Dishes'
];

const RestaurantPhotoGallery = () => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      url: '/images/restaurants/coastal/crab.jpg',
      title: 'Butter Garlic Crab',
      category: 'Food',
      description: 'Our signature dish - Fresh crab cooked in garlic butter sauce'
    },
    {
      id: 2,
      url: '/images/restaurants/coastal/ambience.jpg',
      title: 'Sea View Dining',
      category: 'Ambience',
      description: 'Elegant dining area with panoramic sea view'
    },
    {
      id: 3,
      url: '/images/restaurants/coastal/seafood.jpg',
      title: 'Fresh Catch Display',
      category: 'Food',
      description: 'Daily fresh seafood selection'
    }
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [newPhoto, setNewPhoto] = useState({
    title: '',
    category: '',
    description: '',
    file: null
  });
  const [error, setError] = useState('');

  const handleAddPhoto = () => {
    setSelectedPhoto(null);
    setNewPhoto({
      title: '',
      category: '',
      description: '',
      file: null
    });
    setOpenDialog(true);
  };

  const handleEditPhoto = (photo) => {
    setSelectedPhoto(photo);
    setNewPhoto({
      title: photo.title,
      category: photo.category,
      description: photo.description,
      file: null
    });
    setOpenDialog(true);
  };

  const handleDeletePhoto = (photoId) => {
    setPhotos(photos.filter(photo => photo.id !== photoId));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5000000) { // 5MB limit
        setError('File size should be less than 5MB');
        return;
      }
      setNewPhoto({ ...newPhoto, file });
      setError('');
    }
  };

  const handleSave = () => {
    if (!newPhoto.title || !newPhoto.category) {
      setError('Please fill in all required fields');
      return;
    }

    if (!selectedPhoto && !newPhoto.file) {
      setError('Please select a photo to upload');
      return;
    }

    if (selectedPhoto) {
      // Edit existing photo
      setPhotos(photos.map(photo =>
        photo.id === selectedPhoto.id
          ? { ...photo, ...newPhoto }
          : photo
      ));
    } else {
      // Add new photo
      const newPhotoObj = {
        id: Date.now(),
        url: URL.createObjectURL(newPhoto.file),
        ...newPhoto
      };
      setPhotos([...photos, newPhotoObj]);
    }

    setOpenDialog(false);
    setError('');
  };

  return (
    <Box>
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Photo Gallery
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddPhoto}
        >
          Add Photo
        </Button>
      </Box>

      <Grid container spacing={3}>
        <AnimatePresence>
          {photos.map((photo) => (
            <Grid item xs={12} sm={6} md={4} key={photo.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={photo.url}
                    alt={photo.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {photo.title}
                    </Typography>
                    <Chip 
                      label={photo.category}
                      color="primary"
                      size="small"
                      sx={{ mb: 1 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {photo.description}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => handleEditPhoto(photo)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleDeletePhoto(photo.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          {selectedPhoto ? 'Edit Photo' : 'Add New Photo'}
        </DialogTitle>
        <DialogContent>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <Stack spacing={2} sx={{ mt: 2 }}>
            {!selectedPhoto && (
              <Button
                variant="outlined"
                component="label"
                startIcon={<PhotoCamera />}
              >
                Upload Photo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Button>
            )}
            {newPhoto.file && (
              <Typography variant="caption" color="text.secondary">
                Selected file: {newPhoto.file.name}
              </Typography>
            )}
            <TextField
              label="Title"
              fullWidth
              value={newPhoto.title}
              onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
              required
            />
            <TextField
              select
              label="Category"
              fullWidth
              value={newPhoto.category}
              onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value })}
              required
              SelectProps={{
                native: true
              }}
            >
              <option value="">Select a category</option>
              {PHOTO_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </TextField>
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={3}
              value={newPhoto.description}
              onChange={(e) => setNewPhoto({ ...newPhoto, description: e.target.value })}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            {selectedPhoto ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RestaurantPhotoGallery; 
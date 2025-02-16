import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent,
  Grid,
  Button,
  Dialog,
  IconButton
} from '@mui/material';
import { Close, ThreeSixty } from '@mui/icons-material';

const VirtualTour = ({ tourData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handleViewPoint = (point) => {
    setSelectedPoint(point);
    setIsOpen(true);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Virtual Tour
      </Typography>

      <Grid container spacing={2}>
        {tourData.viewPoints.map((point, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={point.thumbnail}
                alt={point.name}
              />
              <CardContent>
                <Typography variant="subtitle1" gutterBottom>
                  {point.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {point.description}
                </Typography>
                <Button
                  startIcon={<ThreeSixty />}
                  onClick={() => handleViewPoint(point)}
                  sx={{ mt: 2 }}
                >
                  View in 360°
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        fullScreen
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <IconButton
          onClick={() => setIsOpen(false)}
          sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1 }}
        >
          <Close />
        </IconButton>
        <Box sx={{ height: '100vh', width: '100%' }}>
          <iframe
            src={`${tourData.tourUrl}?point=${selectedPoint?.name}`}
            style={{ border: 'none', width: '100%', height: '100%' }}
            title="Virtual Tour"
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default VirtualTour; 
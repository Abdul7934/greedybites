import { 
  Box, 
  Typography, 
  Card, 
  CardContent,
  Grid,
  Chip
} from '@mui/material';
import { Event } from '@mui/icons-material';

const SeasonalMenu = ({ seasonalMenu }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ mr: 2 }}>
          {seasonalMenu.name}
        </Typography>
        <Chip 
          icon={<Event />} 
          label={`Available: ${seasonalMenu.available}`}
          color="primary"
        />
      </Box>

      <Grid container spacing={2}>
        {seasonalMenu.items.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="subtitle1">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {item.description}
                </Typography>
                <Typography variant="subtitle2" color="primary">
                  {item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SeasonalMenu; 
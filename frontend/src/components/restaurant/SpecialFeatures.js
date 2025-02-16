import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import {
  Restaurant,
  Event,
  MusicNote,
  LocalBar,
  AccessTime,
  Group,
  Stars
} from '@mui/icons-material';

const FeatureCard = ({ title, icon, children }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {icon}
        <Typography variant="h6" sx={{ ml: 1 }}>
          {title}
        </Typography>
      </Box>
      {children}
    </CardContent>
  </Card>
);

const SpecialFeatures = ({ features }) => {
  return (
    <Grid container spacing={3}>
      {/* Meal Periods */}
      <Grid item xs={12} md={6}>
        <FeatureCard title="Meal Periods" icon={<AccessTime />}>
          <List>
            <ListItem>
              <ListItemText
                primary="Lunch"
                secondary={`${features.mealPeriods.lunch.timing} | Buffet: ${features.mealPeriods.lunch.buffetPrice}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Dinner"
                secondary={`${features.mealPeriods.dinner.timing} | Buffet: ${features.mealPeriods.dinner.buffetPrice}`}
              />
            </ListItem>
          </List>
        </FeatureCard>
      </Grid>

      {/* Entertainment */}
      <Grid item xs={12} md={6}>
        <FeatureCard title="Entertainment" icon={<MusicNote />}>
          <Typography variant="subtitle2" gutterBottom>
            Live Music
          </Typography>
          <Typography variant="body2" gutterBottom>
            {features.entertainment.liveMusic.days.join(', ')}
            <br />
            {features.entertainment.liveMusic.timing}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="subtitle2" gutterBottom>
            Special Events
          </Typography>
          {features.entertainment.events.map((event, index) => (
            <Chip
              key={index}
              label={`${event.name} (${event.day})`}
              sx={{ m: 0.5 }}
            />
          ))}
        </FeatureCard>
      </Grid>

      {/* Chef's Table */}
      <Grid item xs={12} md={6}>
        <FeatureCard title="Chef's Table Experience" icon={<Stars />}>
          <Typography variant="body2" paragraph>
            {features.chefTable.description}
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon><Group /></ListItemIcon>
              <ListItemText primary={`Capacity: ${features.chefTable.capacity} guests`} />
            </ListItem>
            <ListItem>
              <ListItemIcon><LocalBar /></ListItemIcon>
              <ListItemText primary={`Price: ${features.chefTable.pricePerPerson} per person`} />
            </ListItem>
          </List>
        </FeatureCard>
      </Grid>

      {/* Dietary Options */}
      <Grid item xs={12} md={6}>
        <FeatureCard title="Dietary Options" icon={<Restaurant />}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {Object.entries(features.dietaryOptions).map(([option, available]) => (
              available && (
                <Chip
                  key={option}
                  label={option.replace(/([A-Z])/g, ' $1').trim()}
                  color="primary"
                  variant="outlined"
                />
              )
            ))}
          </Box>
        </FeatureCard>
      </Grid>
    </Grid>
  );
};

export default SpecialFeatures; 
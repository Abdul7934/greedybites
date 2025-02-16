import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  IconButton,
  Collapse,
  Button,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import {
  ExpandMore,
  LocalDining,
  Event,
  Restaurant,
  Close
} from '@mui/icons-material';

const CategoryCard = ({ category, onViewDetails }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">{category.name}</Typography>
          <IconButton onClick={() => setExpanded(!expanded)}>
            <ExpandMore sx={{ transform: expanded ? 'rotate(180deg)' : 'none' }} />
          </IconButton>
        </Box>
        
        <Collapse in={expanded}>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {category.description}
            </Typography>
            <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {category.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" />
              ))}
            </Box>
            <Button
              variant="outlined"
              size="small"
              sx={{ mt: 2 }}
              onClick={() => onViewDetails(category)}
            >
              View Details
            </Button>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

const SpecializedCategories = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Box>
      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <CategoryCard 
              category={category}
              onViewDetails={setSelectedCategory}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(selectedCategory)}
        onClose={() => setSelectedCategory(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {selectedCategory?.name}
          <IconButton
            onClick={() => setSelectedCategory(null)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {/* Category details content */}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SpecializedCategories; 
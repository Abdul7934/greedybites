const MenuItem = ({ item }) => (
  <Card sx={{ display: 'flex', p: 2 }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="subtitle1">{item.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {item.description}
      </Typography>
      <Typography variant="subtitle2" color="primary">
        {item.price}
      </Typography>
    </Box>
    {item.isVeg ? <VegIcon /> : <NonVegIcon />}
  </Card>
); 
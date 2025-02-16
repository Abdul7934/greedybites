export const fetchRestaurantMenu = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/restaurants/${id}/menu`);
  if (!response.ok) {
    throw new Error('Failed to fetch restaurant menu');
  }
  return response.json();
}; 
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const restaurantData = localStorage.getItem('restaurantData');
  console.log('Protected Route - Restaurant Data:', restaurantData);
  
  let isAuthenticated = false;
  
  try {
    const parsedData = JSON.parse(restaurantData);
    isAuthenticated = parsedData && parsedData.isLoggedIn === true;
    console.log('Authentication status:', isAuthenticated);
  } catch (error) {
    console.error('Error parsing restaurant data:', error);
  }

  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login...');
    return <Navigate to="/restaurant/login" state={{ from: location }} replace />;
  }

  console.log('Authenticated, rendering protected content...');
  return children;
};

export default ProtectedRoute; 
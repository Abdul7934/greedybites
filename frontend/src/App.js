import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Restaurants from './components/pages/Restaurants';
import RestaurantLogin from './components/restaurant/RestaurantLogin';
import RestaurantSignup from './components/restaurant/RestaurantSignup';
import RestaurantDashboard from './components/restaurant/RestaurantDashboard';
import UserLogin from './components/auth/UserLogin';
import UserRegister from './components/auth/UserRegister';
import RestaurantDetail from './components/pages/RestaurantDetail';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { Router } from 'react-router-dom';
import UserProfile from './components/user/UserProfile';
import BloggersPage from './components/pages/BloggersPage';
import ReelsSection from './components/restaurant/ReelsSection';
import RestaurantMenuPage from './components/restaurant/RestaurantMenuPage';
import BookingHistory from './components/restaurant/BookingHistory';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import BookingsPage from './components/pages/BookingsPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="App">
            <Navbar />
            <main className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/register" element={<UserRegister />} />
                <Route path="/restaurant/login" element={<RestaurantLogin />} />
                <Route path="/restaurant/signup" element={<RestaurantSignup />} />
                <Route 
                  path="/restaurant/dashboard"
                  element={
                    <ProtectedRoute>
                      <RestaurantDashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/restaurant/:id" element={<RestaurantDetail />} />
                <Route path="/restaurant/:id/menu" element={<RestaurantMenuPage />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/bloggers" element={<BloggersPage />} />
                <Route path="/reels" element={<ReelsSection />} />
                <Route path="/bookings" element={<BookingsPage />} />
              </Routes>
            </main>
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

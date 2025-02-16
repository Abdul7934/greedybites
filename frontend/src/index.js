import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/Banner.css';
import './styles/animations.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

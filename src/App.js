import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ContactScreen from './Screens/ContactScreen';
import FilmScreen from './Screens/FilmScreen';
import AboutScreen from './Screens/AboutScreen';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Search from './Screens/Search';
import { MovieProvider } from './hooks/MovieProvider';
import TvScreen from './Screens/TvScreen';
import LoginScreen from './Screens/Auth/LoginScreen';
import RegisterScreen from './Screens/Auth/RegisterScreen';
import DashboardScreen from './Screens/Dashboard/DashboardScreen';
import PrivateRoute from './ProtectedRoutes/PrivateRoute';

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="films" element={<FilmScreen />} />
          <Route path="abouts" element={<AboutScreen />} />
          <Route path="contacts" element={<ContactScreen />} />
          <Route path="tv" element={<TvScreen />} />
          <Route path="details/:movieId" element={<Search />} />

          {/* Login and Register Routes */}
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />

          {/* Protected Route */}
          <Route path="dashboard" element={<PrivateRoute element={DashboardScreen} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;

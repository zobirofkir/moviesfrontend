import { Route, Routes, useLocation } from 'react-router-dom'
import HomeScreen from '../../Screens/HomeScreen'
import FilmScreen from '../../Screens/FilmScreen'
import AboutScreen from '../../Screens/AboutScreen'
import ContactScreen from '../../Screens/ContactScreen'
import TvScreen from '../../Screens/TvScreen'
import Search from '../../Screens/Search'
import LoginScreen from '../../Screens/Auth/LoginScreen'
import RegisterScreen from '../../Screens/Auth/RegisterScreen'
import DashboardScreen from '../../Screens/Dashboard/DashboardScreen'
import PrivateRoute from '../../ProtectedRoutes/PrivateRoute'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const AppWrapper = () => {
    const location = useLocation();
    const showHeader = location.pathname !== '/dashboard';
    const showFooter = location.pathname !== '/dashboard';
  
    return (
      <>
        {showHeader && <Header />}
        <Routes>
          <Route path="/" element={<HomeScreen  />} />
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
        {showFooter && <Footer />}
      </>
    );
  };

export default AppWrapper;
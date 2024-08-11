import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ContactScreen from './Screens/ContactScreen';
import FilmScreen from './Screens/FilmScreen';
import AboutScreen from './Screens/AboutScreen';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Search from './Screens/Search';
import { MovieProvider } from './hooks/MovieProvider';
import TvScreen from './Screens/TvScreen';
import LoginScreen from './Screens/Auth/LoginScreen'
import RegisterScreen from './Screens/Auth/RegisterScreen';

function App() {
  return (
    <MovieProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path='films' element={<FilmScreen />} />
        <Route path='abouts' element={<AboutScreen />} />
        <Route path='contacts' element={<ContactScreen />} />
        <Route path='tv' element={<TvScreen />} />
        <Route path='details/:movieId' element={<Search />} />

        {/* Login And Register Routes */}
        <Route path='login' element={<LoginScreen/>}/>
        <Route path='register' element={<RegisterScreen/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </MovieProvider>
  );
}

export default App;

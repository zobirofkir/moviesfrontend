// App.js
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ContactScreen from './Screens/ContactScreen';
import FilmScreen from './Screens/FilmScreen';
import AboutScreen from './Screens/AboutScreen';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Search from './Screens/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path='films' element={<FilmScreen />} />
        <Route path='abouts' element={<AboutScreen />} />
        <Route path='contacts' element={<ContactScreen />} />
        <Route path='details/:movieId' element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

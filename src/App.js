// src/Components/AppWrapper.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MovieProvider } from './hooks/MovieProvider';
import AppWrapper from './Components/Routes/AppWrapper';



const App = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </MovieProvider>
  );
};

export default App;

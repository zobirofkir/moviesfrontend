import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('access_token');

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoute;

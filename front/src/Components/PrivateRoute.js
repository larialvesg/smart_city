import React from 'react';
import { Route, Navigate } from 'react-router-dom';
 
const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = localStorage.getItem('accessToken'); 
 
  return isAuthenticated ? <Component /> : <Navigate to='/' />;
};
 
 
export default PrivateRoute;
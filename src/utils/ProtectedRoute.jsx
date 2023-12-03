// ProtectedRoute.js
import React, { useContext } from 'react';
import { Route, Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    
        currentUser  ? <Outlet /> : <Navigate to="/login" />

  );
};

export default ProtectedRoute;

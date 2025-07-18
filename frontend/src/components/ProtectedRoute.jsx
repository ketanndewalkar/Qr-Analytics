import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
  const { token } = useAuth();

  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLogged } from '../store/auth/selector';

export const PublicRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  const location = useLocation();

  if (isLogged) {
    return <Navigate to={location.state?.from || '/'} />;
  }
  return children;
};

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLogged } from '../store/auth/selector';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogged);
  const location = useLocation();
  // console.log(location)
  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />;
  }
  return children;
};

import { useSelector } from 'react-redux';
import { selectIsLogged } from '../store/auth/selector';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogged);
  const location = useLocation();
  if (isLoggedIn) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" />;
};

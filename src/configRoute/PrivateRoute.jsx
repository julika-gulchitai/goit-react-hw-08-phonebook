import { useSelector } from 'react-redux';
import { selectIsLogged } from '../store/auth/selector';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(selectIsLogged);
  const location = useLocation();
  if (isLogged) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/login" />;
};

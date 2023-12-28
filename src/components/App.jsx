import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import { Contacts } from '../pages/Contacts';
import Home from '../pages/Home/Home';
import { PrivateRoute } from '../configRoute/PrivateRoute';
import { PublicRoute } from '../configRoute/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh } from 'store/auth/selector';
import { Loader } from 'components/Loader';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import NotFound from 'pages/NotFound/NotFound';
import { useEffect } from 'react';
import { refreshThunk } from 'store/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  const isRefreshing = useSelector(selectIsRefresh);
  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

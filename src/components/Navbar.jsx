import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogged } from 'store/auth/selector';

import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'store/auth/operations';

const Navbar = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts book</NavLink>
      {!isLogged && (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">SignUp</NavLink>
        </>
      )}
      {isLogged && <>button onClick={() => dispatch(logoutThunk())}</>}
    </div>
  );
};

export default Navbar;

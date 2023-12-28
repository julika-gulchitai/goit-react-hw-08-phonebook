import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogged } from 'store/auth/selector';

import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'store/auth/operations';

const Navbar = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  return (
    <div className="text-white font-bold flex gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      {!isLogged && (
        <>
          <NavLink to="/login">LogIn</NavLink>
          <NavLink to="/register">SignIn</NavLink>
        </>
      )}
      {isLogged && (
        <>
          |<button onClick={() => dispatch(logoutThunk())}>SignOut</button>
        </>
      )}
    </div>
  );
};

export default Navbar;

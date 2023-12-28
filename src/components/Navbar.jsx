import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogged } from 'store/auth/selector';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'store/auth/operations';
import { toast } from 'react-toastify';

const Navbar = () => {
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  const logout = () =>
    dispatch(logoutThunk())
      .unwrap()
      .then(res => {
        toast.success(`See you!`);
      });
  return (
    <div className="text-white font-bold flex gap-4">
      <NavLink to="/">Home</NavLink>
      {isLogged && <NavLink to="/contacts">Contacts</NavLink>}
      {!isLogged && (
        <>
          <NavLink to="/login">LogIn</NavLink>
          <NavLink to="/register">SignIn</NavLink>
        </>
      )}
      {isLogged && (
        <>
          |<button onClick={() => logout()}>SignOut</button>
        </>
      )}
    </div>
  );
};

export default Navbar;

import { selectUserName } from 'store/auth/selector';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(selectUserName);
  return (
    <header>
      <h3>Contacts</h3>
      {user && <h2>Hello {user}</h2>}
      <Navbar />
    </header>
  );
};
export default Header;

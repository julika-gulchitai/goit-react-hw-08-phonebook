import { selectUserName } from 'store/auth/selector';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(selectUserName);
  return (
    <header className="text-3xl py-4 bg-red-950 flex justify-between px-4">
      <h3 className="text-red-500 font-bold text-center  md:text-white lg:text-violet-600 hover:text-white transition-colors duration-300">
        Contacts Book
      </h3>
      {user && <h2 className="text-white font-bold">Hello {user}!</h2>}
      <Navbar />
    </header>
  );
};
export default Header;

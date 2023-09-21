import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className='navbar'>
      <li>
        <Link to={'/users'}>Users</Link>
      </li>
      <li>
        <Link to={'/products'}>Products</Link>
      </li>
    </ul>
  );
};

export default Navbar;

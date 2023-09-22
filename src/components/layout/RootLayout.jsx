import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const RootLayout = () => {
  return (
    <div className='container'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;

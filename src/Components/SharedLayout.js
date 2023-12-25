
import {Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const SharedLayout = () => {
  return (
    <>
    <div className='appCont'>
      <Navbar />
      <div className='article'>
        <Outlet />
      </div>
      <div className='footer'>
        Footer
      </div>
    </div>
            
    </>
  );
};
export default SharedLayout;
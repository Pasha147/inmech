
import {Outlet } from 'react-router-dom';
import Header from './Header';
const SharedLayout = () => {
  return (
    <>
    <div className='appCont'>
      <Header />
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
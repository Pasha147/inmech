import { Outlet } from "react-router-dom";
import Header from "./Header";
import Futer from "./Footer";
const SharedLayout = () => {
  return (
    <>
      <div className="appCont">
        <Header />
        <Outlet />
        <Futer />
      </div>
    </>
  );
};
export default SharedLayout;

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logoDiv">
        <img className="logo" src="./img/logo.png"></img>
      </div>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Про комітет
      </NavLink>

      <NavLink
        to="/FounDocum"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Установчі документи
      </NavLink>

      <NavLink
        to="/GenMeeting"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Загальні збори
      </NavLink>

      <NavLink
        to="/ComMembers"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Члени комітету
      </NavLink>
    </nav>
  );
};
export default Navbar;

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [burMenu, setBurMenu] = useState(0);

  function hanndleClick(){
    burMenu ? setBurMenu(0) : setBurMenu(1)
    // console.log('burgerMenu = ', burMenu);

  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <a href="#.a" className="header__logo">
            <img className="logo" src="./img/logo.png" alt="Logo"></img>
          </a>
          <div 
                    className="header__burger"
                    onClick={()=>hanndleClick()}
                    >
            <span></span>
          </div>
          <nav 
          className={ burMenu ? "header__menu" : "header__menuOff"}
          onClick={()=>hanndleClick()}
          >
            <ul className="header__list">
              <li>
                <div className="header__link">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "link active" : "link"
                    }
                    
                  >
                    Home
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="header__link">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "link active" : "link"
                    }
                    
                  >
                    Про комітет
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="header__link">
                  <NavLink
                    to="/FounDocum"
                    className={({ isActive }) =>
                      isActive ? "link active" : "link"
                    }
                  >
                    Установчі документи
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="header__link">
                  <NavLink
                    to="/GenMeeting"
                    className={({ isActive }) =>
                      isActive ? "link active" : "link"
                    }
                  >
                    Загальні збори
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="header__link">
                  <NavLink
                    to="/ComMembers"
                    className={({ isActive }) =>
                      isActive ? "link active" : "link"
                    }
                  >
                    Члени комітету
                  </NavLink>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;

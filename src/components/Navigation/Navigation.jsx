// Import React
import React, { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// Import Data
import { navItems } from '../../data/data';
import { userInfo } from '../../App.js';

// Import Firebase
import { login, logout } from '../../services/firebase.js';

// Import CSS
import './Navigation.scss';

export function Navigation() {
  // Track Menu Open status
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useContext(userInfo);
  let userName = user ? user.reloadUserInfo.displayName : ""

  let currentUrl = useLocation().pathname;

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className='navigation'>
        <div className='navigation-left-container'>
          {/* <div className='navigation-hamburger' onClick={handleMenu}>
            <img src={require("./hamburger.png")} height="24px" width="24px" alt="Menu"/>
          </div> */}
          {user ? <div style={{color: "#004B82", fontWeight: '600'}}>{`Welcome ${userName}`}!</div> : <div style={{font: 'roboto serif', fontSize:'24px', fontWeight:'600', color:'#004B82'}}>ScoreEase</div>}
        </div>
        <div className="navigation-right-container">
        { user ?      
          <div 
            className="navigation-login"
            onClick={() => logout()}
          >
            Logout
          </div>
          :
          <div 
            className="navigation-login"
            onClick={() => login()}
          >
            Login
          </div>
        }
        </div>
      </div>
      <div className='navigation-background'></div>
      <div className='navigation-menu-container'
        style={{display: menuOpen ? "block" : "none" }}
      >
        {navItems.map((item, index) => {
          if (item.navUrl === currentUrl) {
            return <div key={index}></div>;
          }
          return (
            <div className="navigation-menu-item" key={index}>
              {
                <NavLink
                  className="navigation-menu-item-linked"
                  to={item.navUrl}
                  onClick={handleMenu}
                >
                  {item.name}
                </NavLink>
              }
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Navigation;

// Import React
import React, { useState , useEffect } from 'react'
import { NavLink , useLocation } from 'react-router-dom'

// Import Data
import { navItems } from '../../data/data'

// Import Firebase
import { login, logout } from '../../services/firebase.js';

// Import CSS
import './Navigation.scss'


export function Navigation ( { user } ) {
  // Track Menu Open status
  const [ menuOpen, setMenuOpen ] = useState(false)

  let currentUrl = useLocation().pathname

  function handleMenu () {
    setMenuOpen(!menuOpen)
  }


  return (
    <>
      <div className='navigation'>
        <div className="navigation-left-container">
          CREDIT SCORE APPLICATION
        </div>
        <div 
          className='navigation-right-container'
          onClick={handleMenu}
        >
          MENU
        </div>

      </div>
      <div className='navigation-background'></div>
      <div className='navigation-menu-container'
        style={{display: menuOpen ? "block" : "none" }}
      >
        { user ?      
          <div 
            className="navigation-menu-item"
            onClick={() => logout()}
          >
            Logout
          </div>
          :
          <div 
            className="navigation-menu-item"
            onClick={() => login()}
          >
            Login
          </div>
        }
        
        {navItems.map((item, index) => {
          if (item.navUrl === currentUrl) {
            return (
              <div key={index}></div>
            )
          }
          return (
            <div 
              className='navigation-menu-item' 
              key={index}
            >
              {
                <NavLink 
                  className='navigation-menu-item-linked'
                  to={item.navUrl}
                  onClick={handleMenu}
              >
                {item.name}
              </NavLink>}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Navigation;

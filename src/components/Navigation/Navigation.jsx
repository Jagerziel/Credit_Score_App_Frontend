// Import React
import React, { useState } from 'react'

// Import Data
import { navItems } from '../../data/data'

// Import CSS
import './Navigation.scss'


export function Navigation () {
  // Track Menu Open status
  const [ menuOpen, setMenuOpen ] = useState(false)

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
        {navItems.map((item, index) => {
          return (
            <div className='navigation-menu-item' key={index}>{item.name}</div>
          )
        })}
      </div>
    </>
  )
}

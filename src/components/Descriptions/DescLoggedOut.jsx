// Import React
import React, { useState } from 'react';
// Import Data

// Import CSS
import './DescLoggedOut.scss';

export default function DescLoggedOut( { title , description }) {
  const [ openMenu , setOpenMenu ] = useState(false)

  return (
    <>
      {
        !openMenu ? 
        <div className='descLoggedOut-container'>
            <div className='descLoggedOut-left-container'>
              <div className='descLoggedOut-blue-v'></div>
              <div className='descLoggedOut-title'>{title}</div>
            </div>
            <img 
              className='down-arrow'
              src={require("./down-arrow.png")} 
              height="24px" 
              width="24px" 
              alt="Menu"
              onClick={() => setOpenMenu(true)}
            />
        </div>
        :
        <div className='descLoggedOut-open-container'>
          <div className='descLoggedOut-blue-h'></div>
          <div className='descLoggedOut-open-title-container'>
            <img 
              className='down-arrow'
              src={require("./down-arrow.png")} 
              height="24px" 
              width="24px" 
              alt="Menu"
              onClick={() => setOpenMenu(false)}
            />
            <div className='descLoggedOut-open-title'>{title}</div>
          </div>
          <div className='descLoggedOut-open-description'>{description.p1}</div>
          <div className='descLoggedOut-open-description'>{description.p2}</div>
        </div>
      }
    </>
  );
}
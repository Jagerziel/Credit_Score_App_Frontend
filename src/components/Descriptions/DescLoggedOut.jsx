// Import React
import React, { useEffect, useState , useContext } from 'react';
// Import Data

// Import CSS
import './DescLoggedOut.scss';

export default function DescLoggedOut( { title , description }) {

  return (
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
        />
        {/* <div>{description}</div> */}
    </div>
  );
}
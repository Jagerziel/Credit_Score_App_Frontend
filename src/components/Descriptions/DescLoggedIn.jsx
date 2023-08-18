// Import React
import React, { useEffect, useState } from 'react';
// Import Data

// Import CSS
import './DescLoggedIn.scss';

export default function DescLoggedIn( { title , description , userInput , setUserInput , index } ) {
  const [ openMenu , setOpenMenu ] = useState(false)

  const placeholderList = [
    "25", // Date of Birth
    "5", // # of Dependents
    "50,000", // Total Income
    "35,000", // Total Debt
    "2", // Total Accoutns
    "0.5", // Revolving Utilization
    "1", // # of Real Estate Loans
    "1", // # of Times 30-59 Days Past Due
    "0", // # of Times 60-89 Days Past Due
    "0" // # of Times 90+ Days Past Due
  ]

  return (
    <div className='descLoggedIn-container'>
        <div style={{paddingBottom: "5px"}}>{title}</div>
        <div className='descLoggedIn-blue-h' style={{display: openMenu ? "block" : "none"}}></div>
        <div className='descLoggedIn-subContainer'>
          <div className="descLoggedIn-left-container">
            <div className='descLoggedIn-blue-v' style={{display: !openMenu ? "block" : "none"}}></div>
            <div>
              <input 
                className='desc-input'
                id='desc-input' 
                type="text" 
                placeholder={placeholderList[index]}
                value={userInput[index]} 
                onChange={(e) => setUserInput({...userInput, [`item_${index}`]: parseInt(e.target.value)})}
              />
            </div>
          </div>
          <img 
              className='down-arrow'
              src={require("./down-arrow.png")} 
              height="24px" 
              width="24px" 
              alt="Menu"
              style={{transform: openMenu ? "rotate(180deg)" : "rotate(0deg", paddingLeft: openMenu ? "15px" : "0"}}
              onClick={() => setOpenMenu(!openMenu)}
            />
        </div>
        <div className='descLoggedIn-desc-container' style={{display: openMenu ? "block" : "none"}}>
          <div className='descLoggedIn-open-description'>{description.p1}</div>  
          <div className='descLoggedIn-open-description'>{description.p2}</div>           
        </div>
    </div>
  );
}
// Import React
import React, { useEffect, useState , useContext } from 'react';
// Import Data
import { userInfo } from '../../App.js';
// Import CSS
import './Home.scss';

export default function Home() {
  const user = useContext(userInfo);
  // console.log(user.reloadUserInfo.displayName)
  let userName = user ? user.reloadUserInfo.displayName : ""

  return (
    <>
      {user ? <div style={{fontSize: "30px"}}>{`Welcome ${userName}`}</div> : <div style={{fontSize: "30px"}}>Home Screen: Please Login</div>}
    </>
  );
}

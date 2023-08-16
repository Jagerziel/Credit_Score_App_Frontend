import React, { useEffect, useState , useContext } from 'react';
import './Home.scss';
import { userInfo } from '../../App.js';

export default function Home() {
  const user = useContext(userInfo);
  // console.log(user.reloadUserInfo.displayName)
  let userName = user ? user.reloadUserInfo.displayName : ""

  return (
    <>
      {user ? <div>{`Welcome ${userName}`}</div> : <div>Home Screen: Please Login</div>}
    </>
  );
  }

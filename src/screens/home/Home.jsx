import React, { useContext } from 'react';
import './Home.scss';
import { userInfo } from '../../App.js';

export default function Home() {
  const user = useContext(userInfo);
  // console.log(user.reloadUserInfo.displayName)
  let userName = user ? user.reloadUserInfo.displayName : '';

  return (
    <>
      {user ? (
        <div style={{ fontSize: '30px' }}>{`Welcome ${userName}`}</div>
      ) : (
        <div style={{ fontSize: '30px' }}>Home Screen: Please Login</div>
      )}
    </>
  );
}

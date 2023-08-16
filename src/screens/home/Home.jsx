import React, { useEffect, useState , useContext } from 'react';
import './Home.scss';
import { userInfo } from '../../App.js';

export default function Home() {
  const user = useContext(userInfo);
  console.log(user)

  return (
    <>
      <div>Home</div>
    </>
  );
  }

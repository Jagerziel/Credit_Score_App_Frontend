import React, { useEffect, useState } from 'react';
import './Home.scss';
import NavTest from '../../components/NavTest/NavTest';

// import auth from firebase.js
// this will allow us to check if the user is logged in or not to our app
import { auth } from '../../firebase';
// importing from the node modules
// onAuthStateChanged is a function will verify if the user is logged in or not
import { onAuthStateChanged } from 'firebase/auth';

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);


  return (
    <>
      <NavTest user={user} />
      <div>Home</div>
    </>
  );
export default function Home () {

  return (
    <div>`Home`</div>
  )
}

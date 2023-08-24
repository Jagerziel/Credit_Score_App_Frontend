// Import React
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
// Import Components
import Home from './screens/home/Home.jsx';
import Profile from './screens/profile/Profile.jsx';
import Dashboard from './screens/dashboard/Dashboard.jsx';
import { Navigation } from './components/Navigation/Navigation.jsx';
// Import auth from firebase.js
// this will allow us to check if the user is logged in or not to our app
import { auth } from './services/firebase.js';
// Importing from the node modules
// onAuthStateChanged is a function will verify if the user is logged in or not
import { onAuthStateChanged } from 'firebase/auth';
// Import CSS
import './App.scss';

export const userInfo = React.createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  return (
    <div className="App">
      <userInfo.Provider value={user}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </userInfo.Provider>
    </div>
  );
}

export default App;

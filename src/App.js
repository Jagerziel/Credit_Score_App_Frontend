// Import React
import { Route, Routes } from "react-router-dom";
// Import Components
import Home from "./screens/home/Home.jsx"
import Profile from "./screens/profile/Profile.jsx";
import Dashboard from "./screens/dashboard/Dashboard.jsx";
import { Navigation } from "./components/Navigation/Navigation.jsx";
// Import CSS
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

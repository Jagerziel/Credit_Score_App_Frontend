// Import React
import { Route, Routes } from "react-router-dom";
// Import Components
import Home from "./screens/home/Home.jsx"
import { Navigation } from "./components/Navigation/Navigation.jsx";
// Import CSS
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

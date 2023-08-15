// Import React
import { Route, Routes } from 'react-router-dom';
// Import Components
import Home from './screens/home/Home.jsx';
// Import CSS
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

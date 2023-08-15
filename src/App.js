import { Route, Routes } from 'react-router-dom';
import Home from './screens/home/Home.jsx';
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

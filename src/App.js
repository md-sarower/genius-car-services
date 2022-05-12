import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;

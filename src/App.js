import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/services/home/Home';
import Header from './pages/shared/header/Header';
import Footer from './pages/shared/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

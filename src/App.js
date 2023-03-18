import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Neg from './components/Neg';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Home/>
    <Routes>
      <Route path='/'element={<Neg/>} />
      <Route path='/login' element={<login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}





export default App;

//app.js
import logo from './logo.svg';
import './App.css';
import Navbar from'./Components/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Follow from './Components/Follow';
import Sidenavbar from './Components/Sidenavbar';
import User from './Pages/User';
function App() {
  return (
    <div className='bg-slate-200'>
    <div>
      <Navbar />
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/User' element={<User />} />
        <Route path='/register' element={<Register />} />
        </Routes>
    </div>
    </div>
  );
}

export default App;
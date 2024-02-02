import './App.css'
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
    </>
  );
}

export default App

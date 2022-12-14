
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Login from './components/Login';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='login/home' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

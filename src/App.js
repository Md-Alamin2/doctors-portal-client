import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className='max-w-7xl	mx-auto px-12'>
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/appointment" element={<Appointment/>} />
      </Routes>
    </div>
  );
}

export default App;

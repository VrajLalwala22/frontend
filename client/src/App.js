import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'


function App() {
  return (
    <div className="App">
      
      <Router> {/* BrowserRouter is correctly imported as Router */}
        <Routes> {/* Wrap all Route components inside Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> uguyguyguy
          <Route path="/bookingcar" element={<BookingCar />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

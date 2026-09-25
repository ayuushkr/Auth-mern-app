import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {/* Background video */}
        <video autoPlay loop muted playsInline className="video-bg">
          <source src="/auth.mp4" type="video/mp4" />
        </video>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>

      <img src="/akbuild.png" alt="Logo" className="logo-fixed" />
    </div>
  );
}

export default App;

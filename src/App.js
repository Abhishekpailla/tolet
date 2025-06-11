import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default login route */}
        <Route path="/" element={<Login />} />

        {/* Register route */}
        <Route path="/register" element={<Register />} />

        {/* Forgot password route */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
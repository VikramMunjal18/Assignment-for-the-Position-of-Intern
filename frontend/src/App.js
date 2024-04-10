import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Use Routes to define routing configuration */}
        <Routes>
          {/* Specify individual Route components for each route */}
          <Route path="/" element={<Login />} /> {/* Use 'element' prop to specify component */}
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

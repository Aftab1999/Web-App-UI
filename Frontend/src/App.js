

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Settings from './Pages/Dashboard/Settings';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coming-soon" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;



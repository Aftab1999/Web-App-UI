

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Settings from './Pages/Dashboard/Settings';
import Header from './Pages/Header/Navbar';
import Treands from './Pages/Trends/Treands';
import { muiBlueTheme } from './utils/mui/themes'
import { ThemeProvider } from '@mui/material/styles'



function App() {
  return (
    <ThemeProvider theme={muiBlueTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/header" element={<Header />} />
          <Route path="/treands" element={<Treands />} />
          <Route path="/coming-soon" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;



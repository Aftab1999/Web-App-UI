

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  return (
    <Router>
      <div className="App">


      
        <Container style={{ marginTop: '20px' }}>
          <Routes>
          
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;



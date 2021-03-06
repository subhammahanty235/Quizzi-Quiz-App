import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from './pages/Settings'
import Questions from './pages/Questions'
import Scores from './pages/Scores'
import { Box, Container, Typography } from '@mui/material'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import {useNavigate} from 'react-router-dom'


function App() {
  


 
  return (
    <div>

      <Router>
        <Navbar />
       

        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Routes>
              <Route path='/' element={
                <>

                  <Settings />
                </>
              } />
              <Route path='/questions' element={<Questions />} />
              <Route path='/score' element={<Scores />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Box>
        </Container>

      </Router>
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import{BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Settings from './pages/Settings'
import Questions from './pages/Questions'
import Scores from './pages/Scores'
import {Box, Container, Typography} from '@mui/material'
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
       <Router>
        <Navbar/>
        <Container maxWidth="sm">
            <Box textAlign="center" mt={5}>
            <Routes>
            <Route path='/' element={
              <>
               
                <Settings/>
              </>
            }/>
            <Route path='/questions' element={<Questions/>}/>
            <Route path='/score' element={<Scores/>}/>
          </Routes>
            </Box>
        </Container>
          
       </Router>
    </div>
  );
}

export default App;
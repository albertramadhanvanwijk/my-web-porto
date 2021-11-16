import React from 'react';
import { Container, Grid } from '@material-ui/core';

import Profile from './../src/components/Profile/Profile';
import Header from './../src/components/Header/Header';
import Portfolio from './../src/pages/Portfolio/Portfolio';
import Resume from './../src/pages/Resume/Resume';
import Footer from './../src/components/Footer/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid 
        item 
        xs={12} 
        sm={12} 
        md={4} 
        lg={3} 
        style={{backgroundColor: 'blue'}}>
          <Profile/>
        </Grid>
        <Grid item xs style={{backgroundColor: 'red'}}>
          <Header/>
          <BrowserRouter> 
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </BrowserRouter>

          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

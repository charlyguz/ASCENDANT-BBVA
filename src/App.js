import './App.css';
import React from 'react';
import Navbar from './pages/global components/navbar/Navbar.js';
import Footer from './pages/global components/footer/Footer.js';
import Staking from './pages/staking/Staking.js';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Staking/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;


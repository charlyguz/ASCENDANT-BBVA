import './App.css';
import React from 'react';
import Staking from './pages/staking/Staking.js';
import Landing from './pages/landing/Landing.js';
import Mint from './pages/mint/Mint.js';
import CC from './pages/credit card/CC.js';

function App() {
  return (
    <React.Fragment>
      <CC/>
      {/* <Mint/> */}
      {/* <Landing/> */}
      {/* <Staking/> */}
    </React.Fragment>
  );
}

export default App;


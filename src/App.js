import './App.css';
import React, { useState } from "react";
import Staking from './pages/staking/Staking.js';
import Landing from './pages/landing/Landing.js';
import Mint from './pages/mint/Mint.js';
import CC from './pages/credit card/TCC.js';
import Wallet from './pages/wallet/Wallet.js';
import Claim from './pages/claim/Claim';
import {BrowserRouter as Router,
  Routes,
  Route,} from "react-router-dom"
import Hipoteca from './pages/hipoteca/Hipoteca';
//xd
function App() {
  const [account,setAccount] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path='*' element={<h1>Not found</h1>} />
        <Route path="/" element={<Landing account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/mint" element={<Mint account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/staking" element={<Staking account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/tcc" element={<CC account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/wallet" element={<Wallet account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/hipoteca" element={<Hipoteca account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/claim" element={<Claim account={account} setAccount={setAccount}/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;


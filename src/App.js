import './App.css';
import React, { useState } from "react";
import Staking from './pages/staking/Staking.js';
import Landing from './pages/landing/Landing.js';
import Mint from './pages/mint/Mint.js';
import CC from './pages/credit card/TCC.js';
import Wallet from './pages/wallet/Wallet.js';
import {BrowserRouter as Router,
  Routes,
  Route,} from "react-router-dom"
import Hipoteca from './pages/hipoteca/Hipoteca';
//  puto aaron de mierda tienes que hacer una ruta de la pagina de mint: src\pages\mint\Mint.js
// agregar a todasd la paginas uncontenedor de 1200 px de width y un margin 0 auto
function App() {
  const [account,setAccount] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path='*' element={<h1>Not found</h1>} />
        <Route path="/" element={<Landing  account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/mint" element={<Mint  account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/staking" element={<Staking  account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/tcc" element={<CC account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/wallet" element={<Wallet account={account} setAccount={setAccount}/>} ></Route>
        <Route path="/hipoteca" element={<Hipoteca  account={account} setAccount={setAccount}/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;


import React, { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import "./Mint.css";
import Navbar from "../global components/navbar/Navbar";
import PaypalCheckoutButton from "../credit card/PaypalCheckoutButton";
import ABI from '../../contracts/ABI.json';
const CONTRACTAddress = "0xAeB702F008536B31E207c572669F0BcB3c4Fa119";

// const ABI = 'das';
function Mint({ account, setAccount }) {
    const [mintAmount, setMintAmount] = useState(0);
    const order = {
        customer : '12345',
        total: '50.00',
        items: [
            {
                sku: '12',
                name: 'NFT Cat',
                price: '14.00',
                currency: 'USD',
                quantity: 1,
            },
            {
                sku: '13',
                name: 'NFT Dog',
                price: '18.00',
                currency: 'USD',
                quantity: 2,
            }
        ]
    }

    async function handleMint() {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            CONTRACTAddress,
            ABI.abi,
            signer
          );
          try {
            // const response = await contract.mint(BigNumber.from(mintAmount), {value: ethers.utils.parseEther((0.033 * mintAmount).toString()),});
            const response = await contract.mint(BigNumber.from(mintAmount));
            console.log('response: ', response);
          } catch (err) {
            console.log("error: ", err)
          }
        }
      }
    
    const handleDecrement = () => {
      if (mintAmount <= 1) return;
      setMintAmount(mintAmount - 1);
    };
    const handleIncrement = () => {
      if (mintAmount >= 10) return;
      setMintAmount(mintAmount + 1);
    };

    return (    
    <React.Fragment>
        <Navbar account={account} setAccount={setAccount}/>
        <div className="mint__container-general">
        <main className="main">
            <div className="main__NFTcontainer">
                <img src={require("../../assets/NFTprueba.png")} className="main__nftimage-1" alt=""/>
                <img src={require("../../assets/NFTprueba.png")} className="main__nftimage-3" alt=""/>
                <img src={require("../../assets/NFTprueba.png")} className="main__nftimage-2" alt=""/>
            </div>
            <div className="main__title">
                <h3>Bank pets</h3>
            </div>
            <div className="main__subtitle">
                <h4>El futuro esta a nuestro alcance</h4>
            </div>
            <div className="main__text">
                <h1>Lorem Ipsum is simply dummy text of the printing and  </h1>
                <p>El futuro esta a nuestro alcance  <br/> 
                El futuro esta a nuestro alcance  <br/>
                El futuro esta a nuestro alcance</p>
            </div>
            <div className="main__button-container">
                <button className="main__button-minus"  onClick={handleDecrement}>-</button>
                <label className="main__label">{mintAmount}</label>
                <button className="main__button-plus" onClick={handleIncrement}>+</button>
                
            </div>
            <button className="main__button-mint" onClick={handleMint}>Mint Now</button>
            <div className="main__paypal">
                <PaypalCheckoutButton order={order} />
            </div>
        </main>
        
        </div>
    </React.Fragment>
  );
}

export default Mint;
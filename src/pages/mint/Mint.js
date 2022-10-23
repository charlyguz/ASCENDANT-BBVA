import React, { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import "./Mint.css";
import "bootswatch/dist/flatly/bootstrap.min.css";
import Navbar from "../global components/navbar/Navbar";
import PaypalCheckoutButton from "../credit card/PaypalCheckoutButton";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "axios";
import abi from '../../contracts/CryptoBlueBerry.json';
const CONTRACTAddress = "0x2347C1DB57cF4f1557b97b13f5A9B467ddbA6145";
const stripePromise = loadStripe("pk_test_51LvKUxHJpuPbpMgxiKFeC7ZO0mZ11LCeqZlcssqIl0glO5D5xS24fefDr0REoKfzUNEE8XzUgLJX5yLrlmu2i7cv00ZbiI0PqK")

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });  

        setLoading(true);

        if(!error){
            const { id } = paymentMethod;
            try {
                const data = await axios.post('http://localhost:3001/api/checkout', {
                    id,
                    amount: 10000
                });
                console.log('data: ',data);
                // mostrar alerta de pago exitoso
                if(data.data.message === 'Payment Successful'){
                    alert('Pago exitoso');
                } else {
                    alert('Pago fallido');
                }
                elements.getElement(CardElement).clear();
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    }

    return <form onSubmit={handleSubmit} className="card card-body">
        {/* <img src={require("../../assets/ascendent.png")} alt="ascendent" className="img-fluid" />
        <h3 className="text-center text-dark">Price: 10$</h3> */}
        <div className="form-group">
            <CardElement className="form-control my-4" />
        </div>

        <button className="btn btn-primary" disabled={!stripe}>
            Buy
        </button>
    </form>
}


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
            abi.abi,
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
                <img src={require("../../assets/uno.gif")} className="main__nftimage-1" alt=""/>
                <img src={require("../../assets/dos.gif")} className="main__nftimage-3" alt=""/>
                <img src={require("../../assets/tres.gif")} className="main__nftimage-2" alt=""/>
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
            <div className="main__payment">
                <PaypalCheckoutButton order={order} />
                
            </div>
            <Elements stripe={stripePromise} >
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                            <CheckoutForm />  
                            </div>
                        </div>
                        
                    </div>
            </Elements>
        </main>
        
        </div>


    </React.Fragment>
  );
}

export default Mint;
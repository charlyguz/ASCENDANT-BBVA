import React from "react";
import "./CC.css";
import Navbar from "../global components/navbar/Navbar";

import PaypalCheckoutButton from "./PaypalCheckoutButton";

function CC() {
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
    return(
        <React.Fragment>
            <Navbar/>
            <section className="section1">
                <div className="section1__container">
                    <h1 className="section1__tittle">
                    Compra NFT’S desde tu banca movil
                    </h1>
                    <img src={require("../../assets/Mobile payments-rafiki 1.svg").default} alt="" className="section1__image"/>
                    <p className="section1__p">
                    Ecosistema BBVA uniendo mundos
                    </p>
                </div>
                </section>


                <section className="section2">
                <div className="section2__container1">
                    <h1 className="section2__title">
                    Podras comprar con tu credit Card cualquier NFT
                    </h1>
                    <p className="section2__p">
                    No tendras que preocuparte en cambiar tus pesos a crypto, guardar frases secretras  e interactuar con contratos 
                    </p>
                    <button className="section2__button">Download</button>
                </div>
                <div className="section2__container2">
                    <img src={require("../../assets/image 33.png")} alt="" className="section2__img1"/>
                    <img src={require("../../assets/image 35.png")} alt="" className="section2__img2"/>
                    <img src={require("../../assets/nftpunk.png")} alt="" className="section2__img3"/>
                </div>~
                </section>


                <section className="section3">
                <div className="section3__container">
                    <div className="section3__container-left">
                    <img src={require("../../assets/E-Wallet-rafiki 1.png")} alt="" className="section3__img"/>
                    </div>
                    <div className="section3__container-rigth">
                    <h1 className="section3__tittle">
                        Ecosistema BBVA
                    </h1>
                    <p className="section3__p">
                        Ingresa solo el  Contract Address del NFT, BBVA se encargara de interactuar con el Smart Contract, 
                        cobrando directamente a tu cuenta de debito o credito.
                    </p>
                    <p className="section3__p">
                        El NFT te sera entregador en tu Crypto Wallet BBVA.
                    </p>
                    </div>
                </div>
            </section>
            <PaypalCheckoutButton order={order} />
        </React.Fragment>
    )
}


export default CC
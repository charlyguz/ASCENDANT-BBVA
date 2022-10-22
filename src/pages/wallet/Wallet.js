import React from "react";
import Navbar from "../global components/navbar/Navbar";
import "./Wallet.css";

function Wallet() {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="wallet__container-general">
        <section className="wsection1">
            <div className="wsection1__container">
                <h1 className="wsection1__tittle">
                Las wallets NUNCA han sido tan seguras
                </h1>
                <p className="wsection1__p">
                Con la nueva wallet  BBVA todos tus NFT’S estaran seguros.
                </p>
                <button className="wsection1__button">Start Now</button>
                <div className="wsection1__container2">
                <img src={require("../../assets/vault.png")} alt="" className="wsection1__img1"/>
                </div>
            </div>

            
        </section>


        <section className="wsection2">
            <div className="wsection2__container1">
                <img src={require("../../assets/Fingerprint.png")} alt="" className="wsection2__img1"/>
            </div>


            <div className="wsection2__container2">
                <h1 className="wsection2__title">
                CREANDO OPORTUNIDADES
                </h1>
                <p className="wsection2__p">
                Con la insfraestructura de BBVA ahora todas tus transacciones seran firmadas con datos biometricos TODO desde tu banca movil.
                La primer Wallet que integra datos biometricos desde un solo lugar
                </p>
            </div>
        </section>


        <section className="wsection3">
                <h1 className="wsection3__tittle">
                El INICIO DE UNA NUEVA ERA
                </h1>
                <img src={require("../../assets/World.png")} alt="" className="wsection3__img"/>
                <p className="wsection3__p1">
                Con esta wallet SEGURA, la era de los tickets fisicos quedara en el pasado    
                </p>
                <h2 className="wsection3__h2">
                ECOSISTEMA BBVA
                </h2>
        </section>
        </div>
    </React.Fragment>
  );
}

export default Wallet;
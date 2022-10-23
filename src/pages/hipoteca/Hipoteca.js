import React from "react";
import Navbar from "../global components/navbar/Navbar";
import "./Hipoteca.css";

function Hipoteca({ account, setAccount }){
    return(
        <React.Fragment>
        <Navbar account={account} setAccount={setAccount}/>
        <div className="hipoteca__container-general">
            <section className="hipoteca__section1">
                <div className="hipoteca__section1__container1">
                    <h1 className="hipoteca__section1__container1__title">HIPOTECAR TUS NFT’S AHORA ES POSIBLE CON BBVA</h1>
                    <div className="hipoteca__section1__container1__butons">
                        <button className="hipoteca__section1__container1__butons__button">Comprar</button>
                        <button className="hipoteca__section1__container1__butons__button">Vender</button>
                    </div>
                </div>
                <div className="hipoteca__section1__container2">
                    <img src={require("../../assets/Bitcoin.png")} alt="hipoteca"/>
                </div>
            </section>
            <section className="hipoteca__section2">
                <div className="hipoteca__section2__container1">
                    <img className="hipoteca__section2__container1--image" src={require("../../assets/hipoteca-NFT.png")} alt="NFT"/>
                    <h1 className="hipoteca__section2__container1__title">POR AHORA SOLO PODRAS HIPOTECAR NUESTRA COLECCION</h1>
                </div>
                <button className="hipoteca__section2__button">Hipoteca Ahora</button>
            </section>

        </div>
        </React.Fragment>
    )
}


export default Hipoteca;
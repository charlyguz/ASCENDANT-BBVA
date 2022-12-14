import React from "react";
import Navbar from "../global components/navbar/Navbar";
import "./Claim.css";


function Claim({account,setAccount}){
    return(
        <React.Fragment>
            <div className="cc_claim">
                <Navbar account={account} setAccount={setAccount}/>
                    < div className="claim__container1">
                        <div className="claim__container1-items">
                            <h3 className="claim__title">Aqui podras canjear tus airdrops dandole click en el boton</h3>
                            <button className="claim__button">Reclamar beneficios</button>
                        </div>
                        <div className="claim__container1-items">
                            <img src={require("../../assets/5.png")} alt="claim" className="claim__container1-items-img"/>
                        </div>
                    <div/>
                </div>  
                    <div className="claim__container2">
                        <h3 className="claim__title">Los beneficos que podras obtener depende de la rareza de tu airdrop los beneficios posibles son:
                        </h3>
                        <ul className="claim__list">
                            <li className="claim__list__item">Puntos BBVA.</li>
                            <li className="claim__list__item">Anualidad Gratis.</li>
                            <li className="claim__list__item">Reducir tasas de interés.</li>
                            <li className="claim__list__item">Upgrade de tarjeta de crédito.</li>
                            <li className="claim__list__item">Aumento en tu linea de credito.</li>
                            <li className="claim__list__item">Salas preferentes en Aeropuertos.</li>
                            <li className="claim__list__item">Pass preferencial en sucursales. </li>
                            <li className="claim__list__item">Asistente financiero personal. </li>
                            <li className="claim__list__item">Puntos de vuelo.</li>
                        </ul>    
                </div>
            </div>
        </React.Fragment>
    );
}

export default Claim;
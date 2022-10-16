import React from "react";
import "./Staking.css";

function Staking(){
    return(
        <React.Fragment>
            <div className="main-staking">
                    <div className="beneficios-container">
                        <h2>¿Que es staking?</h2>
                        <div className="beneficios-container-items">
                            <p>Staking es una forma de ganar criptomonedas sin tener que minarlas, es decir, sin tener que gastar recursos de tu computadora. En vez de eso, simplemente tienes que mantener tus criptomonedas en una billetera compatible con staking y esperar a que se generen recompensas.</p>
                            <p className="info-staking">Staking es una forma de ganar criptomonedas sin tener que minarlas, es decir, sin tener que gastar recursos de tu computadora para generar bloques y recibir recompensas. En vez de eso, puedes dejar tus criptomonedas en una billetera especializada y recibir recompensas por ello.</p>
                        </div>
                        
                    </div>
                    <div className="triangle-container">
                        <div className="triangle-container-items">
                            <div className="triangle1">
                                <div className="niv1">
                                    <h2>Nivel 1 </h2>
                                </div>
                                <div className="info-de-nivel1">
                                    <p className="tus-beneficios">Staking es una forma de ganar intereses por mantener tus criptomonedas en una wallet. </p>
                                </div>
                            </div>
                            <div className="triangle2">
                                <div className="niv2">
                                    <h2>Nivel 2 </h2>
                                </div>
                                <div className="info-de-nivel2">
                                    <p className="tus-beneficios">Staking es una forma de ganar intereses por mantener tus criptomonedas en una wallet. </p>
                                </div>
                            </div>
                            <div className="triangle3">
                                <div className="niv3">
                                    <h2>Nivel 3 </h2>
                                </div>
                                <div className="info-de-nivel3">
                                    <p className="tus-beneficios">Staking es una forma de ganar intereses por mantener tus criptomonedas en una wallet. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </React.Fragment>
    );
}

export default Staking;
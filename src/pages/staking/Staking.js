import React from "react";
import Footer from "../global components/footer/Footer";
import Navbar from "../global components/navbar/Navbar";
import "./Staking.css";

function Staking(){
    return(
        <React.Fragment>
            <Navbar/>
            <div className="hipoteca__container-general">
                <div className="main-staking">
                        <div className="beneficios-container">
                            <div className="beneficios-container-items">
                                <p>BBVA TAMBIEN OFRECE STAKING</p>
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
            </div>
                <Footer/>
        </React.Fragment>
    );
}

export default Staking;
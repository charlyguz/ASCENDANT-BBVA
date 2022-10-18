import React from "react";
import "./Navbar.css";

function Navbar () {
    return (
        <React.Fragment>
            <header className="header">
                <nav className="header-container">
                    <div className="header__logo">
                        <img src={require("../../../assets/blueberry-icon.png")} alt="logo"  className="header__logo-img"/>
                    </div>
                    <div className="name-proyect">
                        <h3 className="name-proyect">CryptoBlueberry</h3>
                    </div>
                    <div className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-item"><a href="#" className="header__menu-item">Mint</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-item">Home</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-item">Wallet</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-item">Staking</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-item">Buy Credit Card</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-item">Wallet BBVA</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-item">Hipoteca NFT</a></li>
                        </ul>
                    </div>
                    
                    <div className="header__button">
                        <button className="header__button-connect">Connect Wallet</button>
                    </div>
                </nav>
            </header>
        </React.Fragment>
    );
}

export default Navbar;
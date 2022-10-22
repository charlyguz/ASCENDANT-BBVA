import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <header className="header">
        <nav className="header-container">
          <div className="header__logo">
            <img
              src={require("../../../assets/blueberry-icon.png")}
              alt="logo"
              className="header__logo-img"
            />
          </div>
          <div className="name-proyect">
            <h3 className="name-proyect">CryptoBlueberry</h3>
          </div>
          <div className="header__menu">
            <ul className="header__menu-list">
              <NavLink
                end
                to="/"
                className="header__menu-item"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  
                })}
              >
                Home
              </NavLink>
              <NavLink
                to="/mint"
                className="header__menu-item"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
               
                })}
              >
                Mint
              </NavLink>
              <NavLink
                to="/wallet"
                className="header__menu-item"
                style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                 
                })}
              >
                Wallet BBVA
              </NavLink>
              <NavLink
                to="/staking"
                className="header__menu-item"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
           
                })}
              >
                Staking
              </NavLink>
              <NavLink
                to="/tcc"
                className="header__menu-item"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  
                })}
              >
                Buy Credit Card
              </NavLink>
              <NavLink
                to="/hipoteca"
                className="header__menu-item"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
          
                })}
              >
                Hipoteca NFT
              </NavLink>
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

import React from "react";
import "./Footer.css";

function Footer (){
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="footer-items">
                    <h2 className="footer-items">Powered by CryptoBlueberry</h2>
                    <p className="footer-items">© 2021 CryptoBlueberry. All rights reserved.</p>
                    <p className="footer-items">Compra e hipoteca tus NFTs de forma segura y agil </p>
                </div>

            </footer>
        </React.Fragment>
    );
}

export default Footer;
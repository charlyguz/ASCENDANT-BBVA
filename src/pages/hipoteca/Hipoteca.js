import React from "react";
import { ethers, BigNumber } from 'ethers';
import Navbar from "../global components/navbar/Navbar";
import "./Hipoteca.css";
import abi from "../../contracts/AIRDROP.json";
const CONTRACTAddress = "0x3990e55d5d43Ad804E41148f0533321Fe7463096"
function Hipoteca({ account, setAccount }){
    async function empeñar() {
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
            const response = await contract.pawned(2);
            console.log('response: ', response);
          } catch (err) {
            console.log("error: ", err)
          }
        }
      }

    return(
        <React.Fragment>
        <div className="cc_hipoteca">
            <Navbar account={account} setAccount={setAccount}/>
            <div className="hipoteca__container-general">
                <section className="hipoteca__section1">
                    <div className="hipoteca__section1__container1">
                        <h1 className="hipoteca__section1__container1__title">EMPEÑAR TUS NFT’S AHORA ES POSIBLE CON BBVA</h1>
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
                        <img className="hipoteca__section2__container1--image" src={require("../../assets/airdrop.gif")} alt="NFT"/>
                        <h1 className="hipoteca__section2__container1__title">POR AHORA SOLO PODRAS HIPOTECAR NUESTRA COLECCION</h1>
                    </div>
                    <>
                        {/* <button className="hipoteca__section2__button" onClick={}>Verificar que numero de NFT tienes</button> */}
                        <button className="hipoteca__section2__button" onClick={empeñar}>Hipoteca Ahora</button>
                    </>
                </section>

            </div>
        </div>
        </React.Fragment>
    )
}


export default Hipoteca;